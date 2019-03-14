import InputDisplay from "./InputDisplay";
import InputForm from "./InputForm";
import React, { Component } from "react";
import Navbar from "./Navbar";
import * as requestUtil from "../Util/util";
import "../App.css";

export default class Home extends Component {
  state = {};
  handleInput1Change = event => {
    this.setState({ input1: event.target.value });
  };

  handleInput2Change = event => {
    this.setState({ input2: event.target.value });
  };

  handleFormSubmit = async () => {  
    const response = await requestUtil.sendData(
      this.state.input1,
      this.state.input2
    );
    console.log(response);
  };

  render() {
    return (
      <div>
        <Navbar />
        <InputForm
          handleInput1Change={this.handleInput1Change}
          handleInput2Change={this.handleInput2Change}
          handleFormSubmit={this.handleFormSubmit}
        />
        <InputDisplay 
          input1={this.state.input1} 
          input2={this.state.input2} 
        />
      </div>
    );
  }
}
