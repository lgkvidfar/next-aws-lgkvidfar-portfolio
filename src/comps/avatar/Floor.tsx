import React from "react";

const Floor = () => {
  return (
    <>
      <group position-y={-1.01}>
        <mesh receiveShadow rotation-x={-Math.PI / 2}>
          <planeGeometry args={[100, 100]} />
          <meshBasicMaterial color="#f5f5f5" />
        </mesh>
      </group>
    </>
  );
};

export default Floor;
