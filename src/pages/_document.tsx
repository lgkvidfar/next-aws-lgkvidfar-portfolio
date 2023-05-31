import { Html, Head, Main, NextScript } from "next/document";

import loader from "../comps/loading/textLoader";
import { useEffect, useRef, useState } from "react";

export default function Document() {
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const day = new Date().getDay();

  const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <Html
      lang="en"
      style={{
        backgroundColor: "#1b1b1b",
      }}
    >
      <Head />
      <head>
        <style>{loader}</style>
      </head>
      <body
        style={{
          overflow: "hidden",
        }}
      >
        <Main />
        <NextScript />
      </body>
      {/* <div id={"globalLoader"}>
        <div className="loader">
          <div />
          <div />
        </div>
      </div> */}

      <div id={"globalLoader"}>
        <div className="container">
          <h1 className="text">
            lgk
            <br /> vidfar <br />
            <span className="date">{`${dayName[day]} ${date}/${
              month + 1
            }/${year} `}</span>
          </h1>
        </div>
      </div>
    </Html>
  );
}
