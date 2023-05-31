import React from "react";

const Chair = () => {
  return (
    <>
      <group position-y={-0.8} position-z={-0.05}>
        <mesh>
          <meshStandardMaterial color="#f5f5f5" />
          <boxGeometry args={[0.8, 0.5, 0.8]} />
        </mesh>
      </group>
    </>
  );
};

export default Chair;
