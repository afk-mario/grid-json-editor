import React from 'react';
import {v4} from 'uuid';
import Input from '../../components/input';
import spec from './spec';
import specField from './spec_field';
import Field from './field-form';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = Object.assign(
      {},
      ...spec.map(({name, value}) => ({[name]: value})),
    );

    this.state = {
      ...this.state,
      fields: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExtraField = this.handleExtraField.bind(this);
    this.handleExtraFieldChange = this.handleExtraFieldChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const {onSubmit} = this.props;

    event.preventDefault();
    onSubmit(this.state);
    let state = Object.assign(
      {},
      ...spec.map(({name, value}) => ({[name]: value})),
    );
    state = {
      ...state,
      fields: [],
    };
    this.setState({...state});
  }

  handleExtraField() {
    const field = {
      pk: v4(),
    };

    this.setState({fields: [...this.state.fields, field]});
  }

  handleExtraFieldChange(item) {
    const {fields} = this.state;

    this.setState({
      fields: fields.map(field => (field.pk === item.pk ? {...item} : field)),
    });
  }

  render() {
    return (
      <div className="container">
        <form className="dark-container" onSubmit={this.handleSubmit}>
          {spec.map((item, i) => (
            <Input
              key={i}
              {...item}
              value={this.state[item.name]}
              onChange={this.handleInputChange}
            />
          ))}
          <div className="container two-columns">
            <h2>Custom Data</h2>
            <span className="button blue" onClick={this.handleExtraField}>
              Add Field
            </span>
          </div>
          {this.state.fields.map((item, i) => (
            <Field
              key={i}
              pk={item.pk}
              value={item}
              spec={specField}
              onChange={this.handleExtraFieldChange}
            />
          ))}

          <button className="button blue" type="submit">
            Add Element Type
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
