import React, { Component } from 'react';
import TemperatureInput from "./TemperatureInput";


function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}


class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scale: 'celsius',
            temperature: ''
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temp) {
        this.setState({
            scale: 'celsius',
            temperature: temp
        });
    }

    handleFahrenheitChange(temp) {
        this.setState({
            scale: 'fahrenheit',
            temperature: temp
        });
    }

    render() {

        const scale = this.state.scale;
        const temp = this.state.temperature;

        const celsius = scale === 'celsius' ? temp : tryConvert(temp, toCelsius);
        const fahrenheit = scale === 'fahrenheit' ? temp : tryConvert(temp, toFahrenheit);

        return (
            <div>
                <TemperatureInput
                    scale="celsius"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                    />
                <br/>

                <TemperatureInput
                    scale="fahrenheit"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                    />
            </div>
        );
    }
}

export default Calculator;