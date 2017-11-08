import React from 'react';
import CoordsRow from '../../components/coordsRow';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {coords: [...props.linePoints]};

    this.handleExtraField = this.handleExtraField.bind(this);
    this.handleExtraFieldChange = this.handleExtraFieldChange.bind(this);
    this.handleDeleteExtraField = this.handleDeleteExtraField.bind(this);
  }

  handleExtraField() {
    const field = [0, 0];

    this.setState({coords: [...this.state.coords, field]});
  }

  handleDeleteExtraField(i) {
    const arr = this.state.coords;
    if (i > -1) {
      arr.splice(i, 1);
    }
    this.setState({coords: arr});
  }

  handleExtraFieldChange(id, item) {
    const arr = this.state.coords;
    arr[id] = [item[0], item[1]];
    this.setState({coords: arr}, () => {
      this.props.onCoordsChange(this.state);
    });
  }

  render() {
    return (
      <div>
        <div className="container two-columns">
          <h2>LinePoints</h2>
          <span className="button blue" onClick={this.handleExtraField}>
            Add Field
          </span>
        </div>
        {this.state.coords.map((item, i) => (
          <CoordsRow
            key={i}
            id={i}
            name="point"
            label={`Point ${i}`}
            item={item}
            onChange={this.handleExtraFieldChange}
            onDelete={this.handleDeleteExtraField}
          />
        ))}
      </div>
    );
  }
}

export default Form;
