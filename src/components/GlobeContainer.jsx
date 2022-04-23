import * as React from 'react';
import { View } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Color } from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Controls } from './Controls';
import { Globe } from './Globe';
import Ring from './Ring';
import { EnvMap } from './GlobeHelpers';
import Plane from './Plane';

const RingScene = () => {
    return (
        <>
            <Ring
                coordinates={[15, 13.5, 80, 1, 0]}
                envMap={EnvMap}
                envMapIntensity={1.8}
                moonOpacity={0.03}
                multiplyScalar={true}
                multiplyScalarValue={200}
                name="ring1"
                opacity={0.35}
                sunOpacity={0.35}
            />
            <Ring 
                coordinates={[16.5, 15.75, 80, 1, 0]}
                moonOpacity={0.1}
                name="ring2"
                opacity={0.5}
                sunOpacity={0.35}
            />
            <Ring 
                coordinates={[18, 17.75, 80]}
                moonOpacity={0.03}
                multiplyScalar={true}
                multiplyScalarValue={50}
                name="ring3"
                opacity={0.5}
                sunOpacity={0.35}
            />
        </>
    )
}

export const GlobeContainer = () => {
    const mainRef = React.useRef();
    const divRef = React.useRef()

    return (
        <main ref={mainRef}>
            <div ref={divRef} style={{ height: '100vh'}}>
                <Canvas camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 15, 45] }} style={{
                    background: 'linear-gradient(45deg, rgb(255 219 158), rgb(253 243 220))'
                }}>
                    <Controls />
                    <perspectiveCamera 
                        aspect={window.innerWidth / window.innerHeight} 
                        far={1000} 
                        fov={45} 
                        near={0.1} 
                        position={[0, 0, 50]}
                    />
                    <directionalLight
                        camera={{ near: 0.5, far: 100, position: [-10, -10, 10, 10]}}
                        castShadow={true} 
                        color={new Color("#FFFFFF").convertSRGBToLinear()} 
                        intensity={3.5}
                        position={[10, 20, 10]}
                    />
                    {/* <directionalLight
                        camera={{ near: 0.5, far: 100, position: [-10, -10, 10, 10]}}
                        castShadow={true} 
                        color={new Color("#77CCFF").convertSRGBToLinear()} 
                        intensity={3.5}
                        position={[-10, 20, 10]}
                    /> */}
                    <Globe />
                </Canvas>
            </div>
        </main>
    )
}