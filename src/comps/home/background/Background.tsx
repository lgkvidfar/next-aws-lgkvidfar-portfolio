import { Lgkvidfar } from "@/scenes/Lgkvidfar";
import { Canvas } from "@react-three/fiber";
import React from "react";
import MyStage from "./staging/MyStage";
import { useDetectGPU } from "@react-three/drei";

const Background = () => {
  const gpu = useDetectGPU();
  return (
    <div className="fixed inset-0 z-[-1] h-screen w-full">
      <Canvas
        camera={{
          position: [0, 0, gpu.isMobile ? 10 : 5],
        }}
        className="pointer-events-none touch-none"
      >
        <MyStage isMobile={gpu.isMobile || false} />
        <Lgkvidfar isMobile={gpu.isMobile || false} />
      </Canvas>
    </div>
  );
};

export default Background;
