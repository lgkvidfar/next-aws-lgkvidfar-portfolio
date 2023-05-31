import * as THREE from "three";
import React, { useEffect, useMemo, useRef } from "react";
import {
  ContactShadows,
  useAnimations,
  useFBX,
  useGLTF,
} from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";

type GLTFResult = GLTF & {
  nodes: {
    Wolf3D_Body: THREE.SkinnedMesh;
    Wolf3D_Outfit_Bottom: THREE.SkinnedMesh;
    Wolf3D_Outfit_Footwear: THREE.SkinnedMesh;
    Wolf3D_Outfit_Top: THREE.SkinnedMesh;
    EyeLeft: THREE.SkinnedMesh;
    EyeRight: THREE.SkinnedMesh;
    Wolf3D_Head: THREE.SkinnedMesh;
    Wolf3D_Teeth: THREE.SkinnedMesh;
    Hips: THREE.Bone;
  };
  materials: {
    Wolf3D_Body: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Top: THREE.MeshStandardMaterial;
    Wolf3D_Eye: THREE.MeshStandardMaterial;
    Wolf3D_Skin: THREE.MeshStandardMaterial;
    Wolf3D_Teeth: THREE.MeshStandardMaterial;
  };
};

export function Avatar(props: JSX.IntrinsicElements["group"] | any) {
  const group = useRef<THREE.Group>(null);

  const { animation, wireframe } = props;

  const { headFollow, cursorFollow } = useControls({
    headFollow: false,
    cursorFollow: false,
  });

  const { nodes, materials } = useGLTF(
    "/models/avatar/avatar.glb"
  ) as GLTFResult;

  const { animations: typingAnim } = useFBX("/anims/Typing.fbx");
  typingAnim[0].name = "Typing";

  const { animations: capoAnim } = useFBX("/anims/Capoeira.fbx");
  capoAnim[0].name = "Capo";

  const { animations: frontTwistFlipAnim } = useFBX(
    "/anims/Front_Twist_Flip.fbx"
  );
  frontTwistFlipAnim[0].name = "FrontTwistFlip";

  const { animations: idleCatwalkAnim } = useFBX("/anims/Idle_Catwalk.fbx");
  idleCatwalkAnim[0].name = "Idle";

  const { animations: idleFalling } = useFBX("/anims/Idle_Falling.fbx");
  idleFalling[0].name = "IdleFalling";

  const { actions }: any = useAnimations(
    [
      typingAnim[0],
      capoAnim[0],
      frontTwistFlipAnim[0],
      idleCatwalkAnim[0],
      idleFalling[0],
    ],
    group
  );

  useEffect(() => {
    if (actions[animation] && actions && animation) {
      actions[animation].reset().fadeIn(0.5).play();
    }
    return () => {
      if (!actions[animation]) return;
      actions[animation].reset().fadeOut(0.5);
    };
  }, [animation]);

  useMemo(() => {
    Object.values(materials).forEach((mat) => {
      mat.wireframe = wireframe;
    });
  }, [wireframe]);

  useFrame((state, delta) => {
    if (!group.current) return;
    if (headFollow) {
      group.current.getObjectByName("Head")?.lookAt(state.camera.position);
    }
    if (cursorFollow) {
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
      group.current.getObjectByName("Spine")?.lookAt(target);
    }
  });

  return (
    <group position-y={animation === "IdleFalling" ? 2 : -1}>
      <ContactShadows
        opacity={0.25}
        scale={10}
        blur={1}
        far={10}
        resolution={256}
        color="#000000"
      />
      <group ref={group} rotation-x={-Math.PI / 2} {...props} dispose={null}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/avatar/avatar.glb");
useFBX.preload("/anims/Typing.fbx");
useFBX.preload("/anims/Capoeira.fbx");
useFBX.preload("/anims/Front_Twist_Flip.fbx");
useFBX.preload("/anims/Idle_Catwalk.fbx");
useFBX.preload("/anims/Idle_Falling.fbx");
