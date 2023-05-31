import { ContactShadows, Environment } from "@react-three/drei";
import React from "react";

const Staging = () => {
  return (
    <>
      <Environment files={"/textures/car/envmap.hdr"} background={true} />
    </>
  );
};

export default Staging;
