class Indecision extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
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

Indecision.defaultProps = {
  options: [],
};
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.title && <h2>{props.subTitle}</h2>}
    </div>
  );
};
Header.defaultProps = {
  title: "Indecision App",
};

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should I do
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      {props.options.length === 0 && <p>Add Som Options to start</p>}
      <button onClick={props.handleDeleteOptions}>Clear All</button>
      {props.options.map((items) => {
        return (
          <Option
            key={props.options.indexOf(items)}
            option={items}
            handleDeleteOption={props.handleDeleteOption}
          />
        );
      })}
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.option}
      <button
        onClick={() => {
          props.handleDeleteOption(props.option);
        }}
      >
        delete
      </button>
    </div>
  );
};
class AddOption extends React.Component {
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

ReactDOM.render(<Indecision />, document.getElementById("app"));
