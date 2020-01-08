import React from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = props => {
  const removeFeature = item => {
    return props.dispatch({ type: "REMOVE_FEATURE", payload: item });
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    return props.dispatch({ type: "ADD_FEATURE", payload: item });
    // dipsatch an action here to add an item
  };

  console.log(props.car.features);

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeFeature={removeFeature} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures
          state={props.car.features}
          buyItem={buyItem}
          additionalFeatures={props.additionalFeatures}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    car: state.car,
    features: state.features,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  };
}

export default connect(mapStateToProps)(App);
