import { Lgkvidfar } from "@/scenes/Lgkvidfar";
import { Canvas } from "@react-three/fiber";
import React from "react";
import MyStage from "./staging/MyStage";

const Background = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  return (
    <div className="fixed inset-0 z-[-1] h-screen w-full">
      <Canvas
        camera={{
          position: [0, 0, isMobile ? 10 : 5],
        }}
        className="pointer-events-none touch-none"
      >
        <MyStage />
        <Lgkvidfar isMobile={isMobile} />
      </Canvas>
    </div>
  );
};

export default Background;
