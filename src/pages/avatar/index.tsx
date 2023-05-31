import Experience from "@/comps/avatar/Experience";
import { Canvas } from "@react-three/fiber";
import React from "react";

const index = () => {
  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{
          near: 0.1,
        }}
      >
        <Experience />
      </Canvas>
    </div>
  );
};

export default index;
