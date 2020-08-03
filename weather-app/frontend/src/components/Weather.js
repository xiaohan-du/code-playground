import React from 'react';
import FetchWeather from './FetchWeather';

class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherFetched: false,
            weatherData: []
        }
        this.getWeather = this.getWeather.bind(this);
    }

    getWeather(e) {
        e.preventDefault();
        FetchWeather.getWeather().then(response => {
            this.setState({
                weatherData: response,
                weatherFetched: true
            })
        })
    }

    unfetchedUI() {
        return (
            <div>Click button to display weather</div>
        )
    }

    fetchedUI() {
        return (
            <div>
                <div>City: {this.state.weatherData.name}</div>
                <div>Temperature in Kelvin: {this.state.weatherData.main.temp}</div>
            </div>
        )
    }

    render() {
        let weatherUI;
        if (this.state.weatherFetched) {
            weatherUI = this.fetchedUI();
        }
        else {
            weatherUI = this.unfetchedUI();
        }
        return (
            <div>
                <button onClick={this.getWeather}>Click</button>
                {weatherUI}
            </div>
        )
    }
}

export default Weather;