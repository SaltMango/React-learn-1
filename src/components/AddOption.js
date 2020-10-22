import React from "react";

export default class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const newValue = e.target.elements.newOption.value.trim();
    let error = this.props.handleAddOption(newValue);
    this.setState(() => ({ error }));
    e.target.elements.newOption.value = "";
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="newOption"></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
