import React, { Component } from "react";
class SelectCity extends Component {
  state = { options: [], show: false };
  updateOptions = e => {
    let input = e.target.value;
    let options = [];
    for (let i = 0, l = this.props.cityArray.length; i < l; i++) {
      if (this.props.cityArray[i].toUpperCase().includes(input.toUpperCase())) {
        options.push(this.props.cityArray[i]);
      }
    }
    this.props.updateCity(options[0]);
    this.setState({ options });
  };
  show = () => {
    this.setState({ show: true });
  };
  dontShow = () => {
    this.setState({ show: false });
  };
  componentDidMount() {
    window.addEventListener("click", e => {
      if (!document.getElementById("option-box").contains(e.target)) {
        this.dontShow();
      }
    });
  }
  enterKeyPressed = e => {
    if (e.keyCode === 13) {
      this.props.search(this.props.selectedCity);
    }
  };
  render() {
    return (
      <div className="row option-select" id="option-box">
        <input
          placeholder="search cities"
          className="form-control"
          type="text"
          onFocus={this.show}
          onKeyDown={this.enterKeyPressed}
          onChange={this.updateOptions}
        />

        {this.state.show && this.state.options.length > 0 ? (
          <select
            className="form-control option-collection"
            size="3"
            value={this.props.selectedCity}
            onChange={this.props.handleChange}
          >
            {this.state.options.slice(0, 100).map(element => (
              <option value={element}>{element}</option>
            ))}
          </select>
        ) : null}
      </div>
    );
  }
}

export default SelectCity;
