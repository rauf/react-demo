import React, { Component } from 'react';

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      toggleOn: true
    };
    this.toggleTime = this.toggleTime.bind(this);
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  toggleTime() {
    this.setState((prev) => ({
      toggleOn: !prev.toggleOn
    }));
  }

  render() {

    const loggedIn = this.state.toggleOn;
    let str = '';
    if (loggedIn) {
        str = 'The current time is ' + this.state.date.toLocaleTimeString();
    }
    else {
        str = 'Clock Turned Off';
    }
    return (
      <div className="Clock">
          <p onClick={this.toggleTime}>
            {str}
          </p>
      </div>
    );
  }
}

export default Clock;
