const docuRoot = document.getElementById("app");

///jsx

const app = {
  title: "Anamutta",
  subtitle: "Nalla Rasamulla Mutta",
  options: [],
};

function subti(sub) {
  if (sub) {
    return <p>sub</p>;
  }
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    console.log(app.options);
  }

  render();
};
const clearAll = (e) => {
  e.preventDefault();
  app.options = [];
  render();
};
const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const selection = app.options[randomNumber];
  console.log(selection);
};
const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>
        {app.options.length > 0
          ? "here are your options"
          : "there is no options"}
      </p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What Should I Do?
      </button>
      <button onClick={clearAll}>Clear All</button>
      <ol>
        {app.options.map((items) => {
          console.log(app.options.indexOf(items));
          return <li key={app.options.indexOf(items)}>{items}</li>;
        })}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add Button</button>
      </form>
    </div>
  );

  ReactDOM.render(template, docuRoot);
};

render();
