import * as React from 'react';
import { Color, DoubleSide, Vector2 } from 'three';
import { useFrame } from '@react-three/fiber';

const Ring = ({
    coordinates, 
    envMap, 
    envMapIntensity, 
    moonOpacity, 
    multiplyScalar, 
    multiplyScalarValue,
    name,
    opacity, 
    ringName, 
    roughNess, 
    sunOpacity
}) => {
    const ringRef = React.useRef();
    let mousePos = new Vector2(0,0);

    const ringRotationAnimation = () => {
        switch(name) {
            case 'ring1':
                ringRef.current.rotation.x = ringRef.current.rotation.x * 0.95 + mousePos.y * 0.05 * 1.2;
                ringRef.current.rotation.y = ringRef.current.rotation.y * 0.95 + mousePos.x * 0.05 * 1.2;
                break;
            case 'ring2':
                ringRef.current.rotation.x = ringRef.current.rotation.x * 0.95 + mousePos.y * 0.05 * 0.375;
                ringRef.current.rotation.y = ringRef.current.rotation.y * 0.95 + mousePos.x * 0.05 * 0.375;
                break;
            case 'ring3':
                ringRef.current.rotation.x = ringRef.current.rotation.x * 0.95 + mousePos.y * 0.05 * 0.275;
                ringRef.current.rotation.y = ringRef.current.rotation.y * 0.95 + mousePos.x * 0.05 * 0.275;
                break;
            default:
                return;
        }
    }

    useFrame(() => {
        ringRotationAnimation()
    });

    return (
        <mesh
            name={ringName}
            moonOpacity={moonOpacity}
            ref={ringRef}
            sunOpacity={sunOpacity}
        >
            <ringGeometry 
                args={coordinates}
            />
            <meshPhysicalMaterial 
                color={
                    multiplyScalar ? 
                    new Color("#FFCB8E").convertSRGBToLinear().multiplyScalar(multiplyScalarValue) : 
                    new Color("#FFCB8E").convertSRGBToLinear()
                }
                envMap={envMap ? envMap : null}
                envMapIntensity={envMap ? envMapIntensity : null}
                opacity={opacity}
                roughness={roughNess ? roughNess : null}
                side={DoubleSide}
                transparent={true}
            />
        </mesh>
    )
}

export default Ring;