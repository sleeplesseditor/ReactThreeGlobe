import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { Color } from 'three';
import { Controls } from './Controls';
import { Globe } from './Globe';

export const GlobeContainer = () => {
    return (
        <Canvas shadows camera={{ near: 0.5, far: 100, position: [10, 10, -10] }}>
            <Controls />
            <color attach="background" args={["#0b1a2b"]} />
            <directionalLight
                camera={{ near: 0.5, far: 100, position: [-10, -10, 10, 10]}}
                castShadow={true} 
                color={new Color("#FFFFFF").convertSRGBToLinear()} 
                intensity={3.5}
                position={[10, 20, 10]}
            />
            <directionalLight
                camera={{ near: 0.5, far: 100, position: [-10, -10, 10, 10]}}
                castShadow={true} 
                color={new Color("#77CCFF").convertSRGBToLinear()} 
                intensity={3.5}
                position={[-10, 20, 10]}
            />
            <Globe />
        </Canvas>
    )
}