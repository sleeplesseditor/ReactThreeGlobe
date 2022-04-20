import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { Color } from 'three';
import { Controls } from './Controls';
import { Globe } from './Globe';
import Ring from './Ring';
import { EnvMap } from './GlobeHelpers';

export const GlobeContainer = () => {
    return (
        <Canvas shadows camera={{ near: 0.5, far: 100, position: [10, 10, -10] }}>
            <Controls />
            <color attach="background" args={["#ffdb9e"]} />
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
            <Ring
                coordinates={[15, 13.5, 80, 1, 0]}
                envMap={EnvMap}
                envMapIntensity={1.8}
                moonOpacity={0.03}
                multiplyScalar={true}
                multiplyScalarValue={200}
                name="ring"
                opacity={0.35}
                sunOpacity={0.35}
            />
            <Ring 
                coordinates={[16.5, 15.75, 80, 1, 0]}
                moonOpacity={0.1}
                name="ring"
                opacity={0.5}
                sunOpacity={0.35}
            />
            <Ring 
                coordinates={[18, 17.75, 80]}
                moonOpacity={0.03}
                multiplyScalar={true}
                multiplyScalarValue={50}
                name="ring"
                opacity={0.5}
                sunOpacity={0.35}
            />
            <Globe />
        </Canvas>
    )
}