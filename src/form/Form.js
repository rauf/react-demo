import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      gender: 'male'
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const target = event.target;
    const nam = target.name;
    const value = nam !== 'gender' ? target.value.toUpperCase() : target.value;
    this.setState({
      [nam]: value
    });
  }

  onSubmit() {
    alert('Submitted : ' + JSON.stringify(this.state));
  }

  render() {

    return (
      <form className="Form" onSubmit={this.onSubmit}>
        <label>
          Name: 
          <input 
            name="name" 
            type="text" 
            value={this.state.name} 
            onChange={this.onChange}/>
        </label>
        
        <br/>

        <label>
          Address: 
          <textarea 
            name="address" 
            type="text" 
            value={this.state.address} 
            onChange={this.onChange}/>
        </label>

        <br/>

        <label>Gender </label>
          <select name="gender" value={this.state.gender} onChange={this.onChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

        <input type="submit" value="Submit"/> 
      </form>
    );
  }
}

export default Form;