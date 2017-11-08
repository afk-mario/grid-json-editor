import React from 'react';
import Select from 'react-select';
import Input from '../../components/input';
import spec from './spec';
import CoordsList from '../../components/coordsList';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {...props.item};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputDataChange = this.handleInputDataChange.bind(this);
    this.onSelectOption = this.onSelectOption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onCoordsChange = this.onCoordsChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.match.params.pk) return;
    if (nextProps.match.params.pk !== this.props.match.params.pk)
      this.setState({...nextProps.item});
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleInputDataChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      data: {
        ...this.state.data,
        [name]: value,
      },
    });
  }

  handleSubmit(event) {
    const {onSubmit} = this.props;

    event.preventDefault();
    onSubmit(this.state);
    const state = Object.assign(
      {},
      ...spec.map(({name, value}) => ({[name]: value})),
    );
    this.setState({
      ...state,
      data: {},
      elementType: {fields: []},
      linePoints: [],
    });
  }

  onSelectOption(item) {
    const {name} = item;
    const data = Object.assign(
      {},
      ...item.fields.map(({name, value}) => ({[name]: value})),
    );
    this.setState({
      name,
      data,
      elementType: item,
    });
  }

  onCoordsChange(arr) {
    this.setState({linePoints: arr.coords});
  }

  render() {
    const {items} = this.props;
    const item = this.state.elementType;

    return (
      <div className="container">
        <form className="dark-container" onSubmit={this.handleSubmit}>
          {spec.map(
            (item, i) =>
              item.hide ? (
                ''
              ) : (
                <Input
                  key={i}
                  {...item}
                  value={this.state[item.name]}
                  onChange={this.handleInputChange}
                />
              ),
          )}
          <CoordsList
            name="CoordsRow"
            linePoints={this.state.linePoints}
            onCoordsChange={this.onCoordsChange}
          />
          <Select
            name="name"
            options={items}
            labelKey="name"
            valueKey="name"
            value={this.state.name}
            onChange={this.onSelectOption}
            clearable={false}
            required
          />
          {item &&
            item.fields.map((field, i) => {
              return (
                <Input
                  key={i}
                  {...field}
                  value={this.state.data[field.name]}
                  onChange={this.handleInputDataChange}
                />
              );
            })}
          <button className="button blue" type="submit">
            OK
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
