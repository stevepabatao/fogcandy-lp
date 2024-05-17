"use client"

import { Canvas } from "@react-three/fiber"
import MeshComponent from "./MeshComponent"
import { OrbitControls } from "@react-three/drei"
import { motion } from "framer-motion";
import ActiveClouds from "./ActiveClouds";
import { Suspense } from "react";


const Cyberpunk = () => {
    return (

        <div className='flex flex-col justify-center items-center h-screen bg-gray-900'>
            <Suspense fallback={
                <motion.p 
                    className="text-gray-100 text-2xl"
                    animate={{ x: 180 }}
                    transition={{ type: "spring", stiffness: 100, repeat: Infinity, duration: 2 }}
    
                >
                        Loading ...
                </motion.p>
            }>
                <Canvas className="h-2xl w-2xl">
                    <OrbitControls />
                    <ambientLight />
                    <ambientLight intensity={0.5} /> {/* Adjust ambient light intensity */}
                    <pointLight position={[5, 5, 5]} intensity={1} /> {/* Adjust point light position and intensity */}
                    <directionalLight
                        position={[-5, 95, -5]} // Adjust backlight position
                        intensity={25} // Adjust backlight intensity
                        color="#ffffff" // Optional: Set backlight color
                    />
                    <ActiveClouds />
                    <MeshComponent /> {/* Scale the model down */}
                </Canvas>
            </Suspense>
            <div className="absolute mt-[600px] text-center">
                <motion.h1
                    className="flex text-6xl text-violet-100 items-center tracking-widest anton.className"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >
                    COMING SOON
                </motion.h1>
            </div>

        </div>
    )
}

export default Cyberpunk