import React from 'react';
import statesList from './statesList';
import makesList from './makesList';
import modelList from './modelList';
import FaIconPack from 'react-icons/lib/fa';
import FaAngleDown from 'react-icons/lib/fa/angle-down';

class Content extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        stateLocationValue: '',
        vehicleMakeValue: '',
        stateDefault: ''
      };
    }

  styles = {
  container: {
    fontSize: 20,
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

  }

  stateHandleChange = (e) => {
    this.setState({stateLocationValue: e.target.value})
  }

  vehicleMakeHandleChange = (e) => {
    this.setState({vehicleMakeValue: e.target.value})
  }

  stateDefaultHandler = (e) => {
    this.setState({stateDefault: e.target.value})
  }
  render() {
  
  return(
    <div id="main-content">
      <div id="select-location">
        <h3 id="select-location-text">
          Please select your location
        </h3>
        <form onSubmit={this.handleSubmit}>    
          <select name="state-location" id="state-location" className="browser-default" onChange={this.stateHandleChange}>
            <option value="none">State</option>
            {statesList}
          </select>
        </form>
      </div>
      <div id="vehicle-information">
        <h3 id="vehicle-information-text">
          Vehicle Information:
        </h3>
        <select name="vehicle-make" id="vehicle-make" className="browser-default" onChange={this.vehicleMakeHandleChange}>
          <option value="none">--Select your make--</option>
        {makesList}
        </select>
        <select name="vehicle-mode" id="vehicle-model" className="browser-default">
          <option value="none">--Select your model--</option>
          {makesList}
        </select>
        {this.state.vehicleMakeValue ? <div>You chose {this.state.vehicleMakeValue} buddy!</div> : null}
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    </div>
  )
  }
};

export default Content;