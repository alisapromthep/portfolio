import React from 'react';
import * as THREE from "three";
import { Canvas } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';

const Background = () => {
    return (
        <Canvas className='canvas'>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[-2,5,2]} intensity={1}/>
            <mesh rotation={[90,0,20]}>
                <boxBufferGeometry attach="geometry" args={[5,5,5]}/>
                <meshLambertMaterial attach="material" color="blue"/>
            </mesh>
        </Canvas>
    )
}

export default Background