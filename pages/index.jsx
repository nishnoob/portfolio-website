import React from "react";
import Face from "../src/face";

function HomePage() {
  return (
    <>
      <style jsx>
        {`
          .wrapper {
            padding: 0rem 1rem;
          }
          .first-fold {
            padding: 8rem 0 0;
            height: 70vh;
          }
          h2 {
            font-size: 2rem;
            font-weight: 100;
            line-height: 1rem;
          }
          h1 {
            font-size: 4.2rem;
            font-weight: 900;
            margin-top: 0;
            line-height: 4rem;
          }
          .absolute-face-backdrop {
            position: sticky;
            top: 0vh;
            
          }
          .face-backdrop {
            position: absolute;
            top: 25vh;
            overflow: hidden;
          }
          .eg-bg {
            margin: 40vh 0 0;
            width: 100%;
            height: 100vh;
            background-color: yellow;
            box-shadow: 0 0 8px 8px white inset;
          }
          @media (min-width:641px) {
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
            .face-backdrop {
              position: fixed;
              left: 0;
              top: 0;
              width: 100vw;
              height: 100vh;
            }
          }
        `}
      </style>
      <div className="wrapper">
        <div className="absolute-face-backdrop">
          <div className='face-backdrop'>
            <Face />
          </div>
        </div>
        <div className="first-fold">
          <h2>My name is Agnish</h2>
          <h1>and I make <br/> websites</h1>
        </div>
        <div className="eg-bg"></div>
      </div>
    </>
  );
}

export default HomePage