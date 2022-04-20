import { useLoader } from '@react-three/fiber';
import * as React from 'react';
import { GLTFLoader } from 'three';
import PlaneMesh from '../assets/plane.scene.glb';
import PlaneTrailMask from '../assets/mask.png';

const Plane = () => {
    let plane = useLoader(GLTFLoader, PlaneMesh).scene.children[0];
    let planeTrail = useLoader(TextureLoader, PlaneTrailMask);

    return (
        <mesh>

        </mesh>
    )
} 

export default Plane;