import React, { Suspense } from 'react';
import Model from './Alisa_half';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const HeroModel = () => {
    return (
        <Canvas
        camera={{ position: [10, 0, 10], fov: 15 }}
        style={{
            backgroundColor: '#111a21',
            width: '20rem',
            height: '20rem',
            }}
        >
            <ambientLight intensity={1.25} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.4} />
            <Suspense fallback={null}>
            <Model position={[0.05, -0.5, -5]} /> 
            </Suspense>
            <OrbitControls />
        </Canvas>
    )
}

export default HeroModel