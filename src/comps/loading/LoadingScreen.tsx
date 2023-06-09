import React, { useEffect, useRef } from "react";

import s from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  useEffect(() => {
    const loadingScreen = document.getElementById("loadingScreen");
    if (loadingScreen) {
      setTimeout(() => {
        const fadeOut = loadingScreen.animate(
          [
            {
              opacity: 1,
            },
            {
              opacity: 0,
            },
          ],
          {
            duration: 1000,
            fill: "forwards",
          }
        );
        fadeOut.onfinish = () => {
          loadingScreen.remove();
          document.body.style.overflow = "auto";
        };
      }, 2500);
    }
  }, []);

  return (
    <div id="loadingScreen" className={s.section}>
      <section className={s.container}>
        <div className={s.loaderOuter}>
          <div className={s.loaderInner}></div>
        </div>
      </section>
    </div>
  );
};

export default LoadingScreen;
