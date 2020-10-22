import React from "react";

import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";

export default class Indecision extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }
  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("options"));
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      //nothing
    }
  }
  componentDidUpdate(prevProps, PreState) {
    if (PreState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
    console.log("unmount");
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(option) {
    this.setState((preState) => {
      return {
        options: preState.options.filter((item) => {
          return option !== item;
        }),
      };
    });
  }
  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const selection = this.state.options[randomNumber];
    this.setState(() => ({ options: [selection] }));
  }
  handleAddOption(option) {
    if (!option) {
      return "type a valid Option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Item Already Exist. Enter New One";
    }
    this.setState((preState) => ({
      options: preState.options.concat([option]),
    }));
  }

  render() {
    let title = "Indecision App";
    let subTitle = "Put your life in the hand of computer ";

    return (
      <div>
        <Header subTitle={subTitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          handleDeleteOption={this.handleDeleteOption}
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
