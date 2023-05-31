import { Cloud, Sparkles } from "@react-three/drei";
import React from "react";

const MySky = () => {
  return (
    <>
      <Cloud position={[5, -5, -20]} opacity={0.9} />
      <Cloud position={[-5, 5, -20]} opacity={0.9} />
      <Sparkles size={10} count={200} scale={20} noise={1} color={"#f5f5f5"} />
    </>
  );
};

export default MySky;
