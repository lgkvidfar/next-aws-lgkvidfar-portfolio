import { Lgkvidfar } from "@/scenes/Lgkvidfar";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import MyStage from "./staging/MyStage";

const Background = () => {
  return (
    <div className="fixed inset-0 h-screen w-full">
      <Canvas>
        <OrbitControls enabled={false} />

        <MyStage />

        <Lgkvidfar />
      </Canvas>
    </div>
  );
};

export default Background;
