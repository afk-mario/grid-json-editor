import React from 'react';
import Select from 'react-select';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      hidden: false,
      button: false,
      btnScreenID: '',
      btnTargetId: '',
      linePoints: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
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

  handleSubmit(event) {
    const {onSubmit} = this.props;

    event.preventDefault();
    onSubmit(this.state);
    this.setState({
      id: '',
      name: '',
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      hidden: false,
      button: false,
      btnScreenID: '',
      btnTargetId: '',
      linePoints: null,
    });
  }

  onSelectOption({id, name}) {
    this.setState({
      name,
    });
  }

  render() {
    const {items} = this.props;
    const {
      id,
      name,
      x,
      y,
      w,
      h,
      hidden,
      button,
      btnScreenID,
      btnTargetId,
    } = this.state;

    return (
      <div className="container">
        <form className="white-container" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="id">ID</label>
            <input
              id="id"
              name="id"
              type="text"
              value={id}
              onChange={this.handleInputChange}
            />
          </div>
          <Select
            name="name"
            options={items}
            labelKey="name"
            valueKey="name"
            value={name}
            onChange={this.onSelectOption}
            clearable={false}
            required
          />
          <div>
            <label htmlFor="x">x</label>
            <input
              id="x"
              name="x"
              type="number"
              value={x}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="y">y</label>
            <input
              id="y"
              name="y"
              type="number"
              value={y}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="w">w</label>
            <input
              id="w"
              name="w"
              type="number"
              value={w}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="h">h</label>
            <input
              id="h"
              name="h"
              type="number"
              value={h}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="hidden">Hidden</label>
            <input
              id="hidden"
              name="hidden"
              type="checkbox"
              value={hidden}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="button">Button</label>
            <input
              id="button"
              name="button"
              type="checkbox"
              value={button}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="btnScreenID">Button ID</label>
            <input
              id="btnScreenID"
              name="btnScreenID"
              type="text"
              value={btnScreenID}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="btnTargetId">Button target</label>
            <input
              id="btnTargetId"
              name="btnTargetId"
              type="text"
              value={btnTargetId}
              onChange={this.handleInputChange}
            />
          </div>
          <button className="button blue" type="submit">
            Add Element
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
