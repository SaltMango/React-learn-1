class VisibilityToggle extends React.Component {
  constructor() {
    this.buttonStatus = false;
  }
  onButtonClick() {
    this.buttonStatus = !this.buttonStatus;
    console.log(this.buttonStatus);
    return this.buttonStatus;
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>

        <button onClick={this.onButtonClick}>
          {this.buttonStatus ? "Hide Details" : "Show Details"}
        </button>

        {this.buttonStatus && <p>There are Som Details You Can See now!!</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// class VisibilityToggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
//     this.state = {
//       visibility: false,
//     };
//   }
//   handleToggleVisibility() {
//     this.setState((prevState) => {
//       return {
//         visibility: !prevState.visibility,
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={this.handleToggleVisibility}>
//           {this.state.visibility ? "Hide details" : "Show details"}
//         </button>
//         {this.state.visibility && (
//           <div>
//             <p>Hey. These are some details you can now see!</p>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
