import * as React from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Color, Clock, sRGBEncoding, TextureLoader } from 'three';
import Bump from '../assets/earthbump.jpg';
import Map from '../assets/earthmap.jpg';
import Spec from '../assets/earthspec.jpg';
import { EnvMap } from './GlobeHelpers';


export const Globe = () => {
    const mapClock = new Clock();
    const mapRef = React.useRef();
    let mapTexture = useLoader(TextureLoader, Map);
    mapTexture.encoding = sRGBEncoding;

    useFrame(() => {
        let delta = mapClock.getDelta();
        mapRef.current.rotation.y += delta * 0.05
    });

    return (
        <mesh
            ref={mapRef}
            rotateY={Math.PI * 1.25} 
            receiveShadow={true}
        >
            <sphereGeometry 
                args={[10, 70, 70]}
                sheen={1}
                sheenColor={new Color("#ff8a00").convertSRGBToLinear()}
                sheenRoughness={0.75}
            />
            <meshStandardMaterial
                attach="material"
                bumpMap={useLoader(TextureLoader, Bump)}
                bumpScale={0.05}
                clearcoat={0.5}
                envMap={EnvMap}
                envMapIntensity={0.4}
                map={mapTexture}
                roughnessMap={useLoader(TextureLoader, Spec)}
            />
        </mesh>
    )
}