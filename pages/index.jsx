import React from "react";
import Face from "../src/face";

function HomePage() {
  return (
    <>
      <style jsx>
        {`
          .wrapper {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 4rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            height: 100vh;
          }
          h2 {
            font-size: 3rem;
            font-weight: 100;
            line-height: 1rem;
          }
          h1 {
            font-size: 6rem;
            font-weight: 900;
            margin-top: 0;
            line-height: 8rem;
          }
        `}
      </style>
      <div className="wrapper">
        <h2>My name is Agnish</h2>
        <h1>and I make <br/> websites</h1>
      </div>
    </>
  );
}

export default HomePage