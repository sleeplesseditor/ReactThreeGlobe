import * as React from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const Controls = () => {
    const { camera, gl } = useThree();
    React.useEffect(
        () => {
            const controls = new OrbitControls(camera, gl.domElement);
            controls.target.set(0,0,0);
            controls.dampingFactor = 0.05;
            controls.enableDamping = true;
            return () => {
                controls.dispose();
            };
        },
        [camera, gl]
    );
    
    return null;
};