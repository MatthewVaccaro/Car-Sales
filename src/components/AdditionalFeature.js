import React from "react";

const AdditionalFeature = props => {
  console.log("props", props.state);

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => {
          if (props.state.includes(props.feature)) {
            console.log("noop");
          } else {
            props.buyItem(props.feature);
          }
        }}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
