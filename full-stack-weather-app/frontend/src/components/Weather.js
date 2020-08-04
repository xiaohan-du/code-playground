import React from 'react';
import WeatherResult from './WeatherResult';
import axios from 'axios';

class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addressData: [],
            coordinate: [],
            postcodeInput: '',
            displayResult: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async getCoord() {
        const postcodeAPI = `http://api.postcodes.io/postcodes/${this.state.postcodeInput}`;

        let response = await fetch(postcodeAPI);
        await response.json().then(response => {
            this.setState({
                addressData: response,
                coordinate: [response.result.latitude, response.result.longitude]
            });
            let coord = {
                latitude: this.state.coordinate[0],
                longitude: this.state.coordinate[1]
            }
            axios.post('http://localhost:4001/search-location', coord)
                .then((response) => {
                    console.log(response);
                    this.setState({
                        displayResult: true
                    });
                }, (error) => {
                    console.log(error);
                });
        });
    }

    handleSubmit(e) {
        e.preventDefault();
            this.getCoord();
    }

    handleInputChange(e) {
        this.setState({
            postcodeInput: e.target.value,
            displayResult: false
        });
    }

    render() {
        return (
            <article className="tile is-child notification is-warning">
                <div className='columns'>
                    <div className="column">
                        <form onSubmit={this.handleSubmit}>
                            <p className="title">Weather</p>
                            <p className="subtitle">Check UK weather by entering postcode</p>
                            <div>
                                <div className="field">
                                    <label className="label">Postcode</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Type UK postcode here"
                                            onChange={this.handleInputChange}
                                            required />
                                        {/* {this.state.formIsValid ? null : <span className='WeatherForm__input-error'>{this.state.errors["postcode"]}</span>} */}
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <input
                                            type='submit'
                                            className="button is-light is-large"
                                            value='Search'
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="column">
                        {this.state.displayResult ? <WeatherResult /> : null}
                    </div>
                </div>
            </article>
        )
    }
}

export default Weather;
