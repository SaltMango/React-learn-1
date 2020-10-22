import React from "react";
import Option from "./Option";

const Options = (props) => {
  return (
    <div>
      {props.options.length === 0 && <p>Add Som Options to start</p>}
      <button
        disabled={props.options.length === 0}
        onClick={props.handleDeleteOptions}
      >
        Clear All
      </button>
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

export default Options;
