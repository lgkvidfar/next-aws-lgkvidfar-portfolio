import { ContactShadows, Environment } from "@react-three/drei";
import React from "react";

const Staging = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
    </>
  );
};

export default Staging;
