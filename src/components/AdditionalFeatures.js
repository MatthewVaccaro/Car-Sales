import React from "react";
import AdditionalFeature from "./AdditionalFeature";

const AdditionalFeatures = props => {
  console.log("masterProps", props.state);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature
              key={item.id}
              buyItem={props.buyItem}
              feature={item}
              state={props.state}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
