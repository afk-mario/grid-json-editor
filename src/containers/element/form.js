import React from 'react';
import Select from 'react-select';
import Input from '../../components/input';
import spec from './spec';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = Object.assign(
      {},
      ...spec.map(({name, value}) => ({[name]: value})),
    );
    this.state = {
      ...this.state,
      type: null,
      data: {},
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputDataChange = this.handleInputDataChange.bind(this);
    this.onSelectOption = this.onSelectOption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.setState({...state});
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

  render() {
    const {items} = this.props;
    const item = this.state.elementType;

    return (
      <div className="container">
        <form className="white-container" onSubmit={this.handleSubmit}>
          {spec.map((item, i) => ( item.hide ? '' :
            <Input
              key={i}
              {...item}
              value={this.state[item.name]}
              onChange={this.handleInputChange}
            />
          ))}
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
            item.fields.map((field, i) => (
              <Input
                key={i}
                {...field}
                value={this.state.data[field.name]}
                onChange={this.handleInputDataChange}
              />
            ))}
          <button className="button blue" type="submit">
            Add Element
          </button>
        </form>
      </div>
    );
  }
}

export default Form;