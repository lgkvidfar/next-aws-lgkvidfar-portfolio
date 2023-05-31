import React from "react";
import MyEnv from "./MyEnv";
import MyShadows from "./MyShadows";
import MySky from "./MySky";

const MyStage = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <>
      <MyEnv isMobile={isMobile} />
      <MyShadows isMobile={isMobile} />
      <MySky isMobile={isMobile} />
    </>
  );
};

export default MyStage;
