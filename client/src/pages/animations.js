import React from "react";
// import AnimationContainer from "../components/animationContainer";
// import Dropdown from "../components/dropdown";
import "../sass/animationContainer.scss";

const animations = props => {
  return (
    <React.Fragment>
      {/* <AnimationContainer /> */}
      {/* <Dropdown /> */}
      <div className="container animations">
        <div className="row">
          <div className="col-md zoomIn">zoomIn</div>
          <div className="col-md">One of three columns</div>
          <div className="col-md">One of three columns</div>
        </div>
        <div className="row">
          <div className="col-md">One of three columns</div>
          <div className="col-md">One of three columns</div>
          <div className="col-md">One of three columns</div>
        </div>
        <div className="row">
          <div className="col-md">One of three columns</div>
          <div className="col-md">One of three columns</div>
          <div className="col-md">One of three columns</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default animations;
