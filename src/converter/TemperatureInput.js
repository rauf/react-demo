import React, { Component } from 'react';

class TemperatureInput extends Component {
    
    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event) {
        this.props.onTemperatureChange(event.target.value);
    }

    render() {
        const scale = this.props.scale;
        const temp = this.props.temperature;

        return (
            <div>
                <p>Enter the temperature in {scale} </p>
                <input value={temp} onChange={this.onChangeHandler} />
            </div>
        );
    }
}

export default TemperatureInput;