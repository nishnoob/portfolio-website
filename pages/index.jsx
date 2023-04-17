import React from "react";
import Face from "../src/face";

function HomePage() {
  return (
    <>
      <style jsx>
        {`
          div {
            color: red;
          }
        `}
      </style>
      <div><Face/></div>
    </>
  );
}

export default HomePage