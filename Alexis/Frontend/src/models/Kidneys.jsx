/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 kidneys.glb 
Author: neshallads (https://sketchfab.com/neshallads)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/human-kidney-e1476ceb1e3b4412af5418eee9c5ed08
Title: Human Kidney
*/

import React, { useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'

export function Kidneys(props) {
  const { nodes, materials } = useGLTF('/models/kidneys.glb')
  return (
    <>
    <OrbitControls />
    <hemisphereLight intensity={1} />
    <group {...props} dispose={null} scale={2.5}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.363}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.kidney02kidney03Group12708_Kidney_Tex_0.geometry} material={materials.Kidney_Tex} position={[126.797, -12.19, 3.735]} scale={98.682} />
          <mesh geometry={nodes.Group12708_Kidney_Tex_0.geometry} material={materials.Kidney_Tex} position={[-129.393, 12.44, -3.812]} rotation={[Math.PI, 0, -Math.PI]} scale={98.682} />
        </group>
      </group>
    </group>
    </>
  )
}

useGLTF.preload('/models/kidneys.glb')
