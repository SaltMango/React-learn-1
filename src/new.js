const docuRoot = document.getElementById("app");

let count = 0;

const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const resetButton = () => {
  count = 0;
  renderCounterApp();
};

const renderCounterApp = () => {
  const template = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetButton}>Reset</button>
    </div>
  );

  ReactDOM.render(template, docuRoot);
};

renderCounterApp();
