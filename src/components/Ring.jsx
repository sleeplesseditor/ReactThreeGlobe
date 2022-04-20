import * as React from 'react';
import { Color, DoubleSide } from 'three';

const Ring = ({
    coordinates, 
    envMap, 
    envMapIntensity, 
    moonOpacity, 
    multiplyScalar, 
    multiplyScalarValue, 
    opacity, 
    ringName, 
    roughNess, 
    sunOpacity
}) => {
    return (
        <mesh
            name={ringName}
            moonOpacity={moonOpacity}
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