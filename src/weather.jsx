import React, { Component } from "react";
import Details from "./details";
import cities from "cities.json";
import SelectCity from "./selectCity";
import Spinner from "./spinner";
class Weather extends Component {
  state = {
    data: {},
    cityArray: [],
    selectedCity: "",
    spinner: true,
    message: ""
  };

  handleChange = e => {
    let options = e.target.options;
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        this.setState({ selectedCity: options[i].value });
      }
    }
  };
  search = city => {
    this.setState({ spinner: true });
	const API_KEY = '8805db7f763df68be75af049e2cc6a6f';
    fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        if (myJson.hasOwnProperty("error")) {
          if (myJson.error.code === 1003) this.getCurrentCityWeather();
          else if (myJson.error.code === 1006)
            this.setState({ message: myJson.error.message, spinner: false });
        } else this.setState({ data: myJson, spinner: false, message: "" });
      });
  };
  getCurrentCityWeather = () => {
    fetch("https://json.geoiplookup.io/api")
      .then(res => {
        return res.json();
      })
      .then(myjson => {
        return myjson.city;
      })
      .then(city => {
        this.search(city);
      });
  };
  componentDidMount() {
    let cityArray = cities.map(city => {
      return city.name;
    });
    this.setState({ cityArray });
    this.getCurrentCityWeather();
  }
  render() {
    return (
      <div className="main-window">
        <span>
          {this.state.spinner ? (
            <Spinner />
          ) : (
            <span>
              {this.state.message.length === 0 ? (
                <Details data={this.state.data} />
              ) : (
                <div className="message">{this.state.message}</div>
              )}
            </span>
          )}
          <SelectCity
            updateCity={city => this.setState({ selectedCity: city })}
            cityArray={this.state.cityArray}
            selectedCity={this.state.selectedCity}
            handleChange={this.handleChange}
            search={this.search}
          />
          <div className="row">
            <button
              className="btn btn-info"
              onClick={() => this.search(this.state.selectedCity)}
            >
              Search
            </button>
          </div>
        </span>
      </div>
    );
  }
}
export default Weather;
