/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 lgkvidfar.glb -d -t -T
*/

import { useEffect, useRef } from "react";
import { useGLTF, MeshTransmissionMaterial } from "@react-three/drei";

import { GLTF } from "three-stdlib";
import { useLenis } from "@studio-freight/react-lenis";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { DoubleSide } from "three";
gsap.registerPlugin(ScrollTrigger);

type GLTFResult = GLTF & {
  nodes: {
    Text: THREE.Mesh;
  };
};

export function Lgkvidfar(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/models/lgkvidfar-transformed.glb") as GLTFResult;

  const meshRef = useRef<THREE.Mesh>(null);
  const tlRef = useRef<any>(null);

  useLenis(({ progress }: any) => {
    if (!meshRef.current) return;
    if (!tlRef.current) return;

    tlRef.current.progress(progress);
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });
      tlRef.current = tl;
      if (!meshRef.current) return;
      const pos = meshRef.current.position;
      const rot = meshRef.current.rotation;

      tlRef.current
        //flip to top
        .to(pos, {
          y: 250,
        })
        .to(
          rot,
          {
            x: Math.PI * 2,
          },
          "<"
        )
        // flip to left side
        .to(pos, {
          y: 0,
          x: -550,
        })
        .to(
          rot,
          {
            y: Math.PI * 2,
            z: Math.PI / 2,
          },
          "<"
        )

        // wheel to right side
        .to(pos, {
          x: 550,
        })
        .to(
          rot,
          {
            y: Math.PI * 2,
            z: Math.PI * -3.5,
          },
          "<"
        )

        // return to center
        .to(pos, {
          x: 0,
          y: 0,
        })
        .to(
          rot,
          {
            y: 0,
            z: Math.PI * -4,
          },
          "<"
        )
        // flip once more
        .to(rot, {
          y: Math.PI * -2,
        })
        .to(rot, {
          y: 0,
        })
        .to(rot, {
          x: 0,
        });
    }, meshRef);

    return () => ctx.revert();
  }, []);

  return (
    <group position={[0, 0, 1]} {...props} dispose={null}>
      <group scale={0.01}>
        <mesh ref={meshRef} geometry={nodes.Text.geometry}>
          <MeshTransmissionMaterial
            color={"#f5f5f5"}
            distortionScale={1}
            temporalDistortion={1}
            transmission={0.75}
            metalness={0.5}
            roughness={0.1}
            clearcoat={0.5}
            clearcoatRoughness={0.5}
            envMapIntensity={0.5}
            opacity={0.5}
            transparent={true}
            side={DoubleSide}
            ior={1}
            thickness={1}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/lgkvidfar-transformed.glb");
