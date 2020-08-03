import React from 'react';
import { Link } from 'react-router-dom';

class WeatherResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            currentTemp: '',
            humidity: '',
            cityNotFound: '',
            wind: '',
            currentConditionDescription: '',
            cityName: '',
            longitude: '',
            latitude: '',
            sunrise: '',
            sunset: ''
        }
    }

    async fetchWeather() {
        let response = await fetch('http://localhost:4001/weather');
        await response.json().then(data => {
            if (data.cod === '404') {
                this.setState({
                    isLoading: false,
                    cityNotFound: '404'
                })
            } else {
                this.setState({
                    isLoading: false,
                    currentTemp: Math.round(data.main.temp - 273.15) + '°C',
                    humidity: data.main.humidity + '%',
                    wind: Math.round(data.wind.speed) + ' mph',
                    currentCondition: data.weather[0].main,
                    currentConditionDescription: data.weather[0].description,
                    cityName: data.name,
                    longitude: data.coord.lon,
                    latitude: data.coord.lat,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset
                })
            }
        })
    }

    componentDidMount() {
        this.fetchWeather();
    }

    errorUI() {
        return (
            <div>
                <p> Error with postcode. </p>
                <Link to='/'><button>Try Again</button></Link>
            </div>
        )
    }

    convertUnixTime(unixTime) {
        let date = new Date(unixTime * 1000),
            hours = date.getHours(),
            minutes = '0' + date.getMinutes(),
            seconds = '0' + date.getSeconds(),
            formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return formattedTime;
    }

    fetchedUI() {
        return (
            <div>
                <p>Current temperature: {this.state.currentTemp}</p>
                <p>Description: {this.state.currentConditionDescription}</p>
                <p>Humidity: {this.state.humidity}</p>
                <p>Wind Speed: {this.state.wind}</p>
                <p>Location: {this.state.cityName}</p>
                <p>Coordinates: {this.state.latitude} (lat), {this.state.longitude} (lon)</p>
                <p>Sunrise: {this.convertUnixTime(this.state.sunrise)}</p>
                <p>Sunset: {this.convertUnixTime(this.state.sunset)}</p>
            </div >
        )
    }

    render() {
        return (
            this.state.cityNotFound === 404
                ? <div>{this.errorUI()}</div>
                : <div>{this.fetchedUI()}</div>
        )
    }
}

export default WeatherResult;