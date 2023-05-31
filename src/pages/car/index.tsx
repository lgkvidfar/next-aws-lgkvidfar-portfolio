import { Experience } from "@/comps/car/Experience";
import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

const index = () => {
  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{
          near: 0.1,
        }}
      >
        <Suspense fallback={null}>
          <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
      <div className="fixed bottom-0 left-0 h-auto w-auto bg-dark/40 p-[2rem] text-light">
        <span>WASD to drive</span>
        <br />
        <span>E to change camera</span>
        <br />
        <span>R to restart</span>
        <br />
        <span>Arrows to flip</span>
      </div>
    </div>
  );
};

export default index;
