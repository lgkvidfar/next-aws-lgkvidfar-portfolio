import { Lgkvidfar } from "@/scenes/Lgkvidfar";
import { Canvas } from "@react-three/fiber";
import React from "react";
import MyStage from "./staging/MyStage";

const Background = () => {
  return (
    <div className="fixed inset-0 h-screen w-full">
      <Canvas>
        <MyStage />
        <Lgkvidfar />
      </Canvas>
    </div>
  );
};

export default Background;
