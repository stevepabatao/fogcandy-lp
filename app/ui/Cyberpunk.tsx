"use client"

import { Canvas } from "@react-three/fiber"
import MeshComponent from "./MeshComponent"
import { Clouds, Cloud, OrbitControls } from "@react-three/drei"
import { motion } from "framer-motion";


const Cyberpunk = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen bg-gray-900'>

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
                <Clouds>
                    <Cloud concentrate="outside" seed={1} segments={100} color={'red'} bounds={20} volume={20} growth={10} opacity={0.15} position={[0, 0, -10]} speed={5} />
                    <Cloud concentrate="outside" seed={1} segments={200} color={'white'} bounds={20} volume={20} growth={10} opacity={0.15} position={[0, 0, -10]} speed={1} />
                    <Cloud concentrate="outside" seed={1} segments={300} color={'green'} bounds={20} volume={20} growth={10} opacity={0.15} position={[0, 0, -10]} speed={5} />
                    <Cloud concentrate="outside" seed={1} segments={400} color={'yellow'} bounds={20} volume={20} growth={10} opacity={0.15} position={[0, 0, -10]} speed={1} />
                </Clouds>
                <MeshComponent /> {/* Scale the model down */}
            </Canvas>
            <div className="absolute mt-[600px]">
                <motion.h1
                    className="text-6xl text-violet-100 tracking-widest anton.className"
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