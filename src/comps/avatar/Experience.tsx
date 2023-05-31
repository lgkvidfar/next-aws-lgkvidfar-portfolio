import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import Staging from "./Staging";
import Floor from "./Floor";
import Chair from "./Chair";

const Experience = () => {
  const { animation, wireframe } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Capo", "FrontTwistFlip", "Idle", "IdleFalling"],
    },
    wireframe: false,
  });

  return (
    <>
      <OrbitControls />
      <Staging />
      <Suspense fallback={null}>
        <Avatar animation={animation} wireframe={wireframe} />
      </Suspense>
      {animation === "Typing" && <Chair />}
      <Floor />
    </>
  );
};

export default Experience;
