"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

const MeshComponent = () => {
    const fileUrl = "../cyberpunk/scene.gltf"
    const mesh = useRef<Mesh>(null!)
    const gltf = useLoader(GLTFLoader, fileUrl)

    useFrame(() => {
        mesh.current.rotation.y += 0.01
    })

    return (
        <mesh ref={mesh} scale={[0.2, 0.2, 0.2]}>
            <primitive object={gltf.scene} />
        </mesh>
    )
}

export default MeshComponent