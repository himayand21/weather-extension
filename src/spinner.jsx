import React from "react";
import ReactLoading from "react-loading";

const Spinner = () => {
  return (
    <div className="table">
      <div className="spinner">
        <ReactLoading
          type={"spinningBubbles"}
          color={"#5bc0de"}
          height={"100%"}
          width={"100%"}
        />
      </div>
    </div>
  );
};
export default Spinner;
