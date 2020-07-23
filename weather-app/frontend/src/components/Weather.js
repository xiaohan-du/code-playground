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

    render() {
        return (
            <div>
                <button onClick={this.getWeather}>Click</button>
                <div>{this.state.weatherFetched ? this.state.weatherData.main.temp : null}</div>
            </div>
        )
    }
}

export default Weather;