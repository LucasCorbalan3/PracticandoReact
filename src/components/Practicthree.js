import React from "react";
import Status from "./Status";

const Practicthree = (props) => {
  return (
    <div>
      <h1 className="display-6 lead text-center">
        Hello {props.classroom}
        {props.changestatus && <Status />}
      </h1>

      <hr />
    </div>
  );
};

export default Practicthree;
