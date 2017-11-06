import React from 'react';
import Input from '../../components/input';

class FieldForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign(
      {},
      ...this.props.spec.map(({name, value}) => ({[name]: value})),
    );

    this.state = {
      pk: this.props.pk,

      ...this.state,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.props.onChange(this.state);
      },
    );
  }

  render() {
    const {spec} = this.props;
    return (
      <div>
        {spec.map((item, i) => (
          <Input
            key={i}
            {...item}
            value={this.state[item.name]}
            onChange={this.handleInputChange}
          />
        ))}
      </div>
    );
  }
}

export default FieldForm;
