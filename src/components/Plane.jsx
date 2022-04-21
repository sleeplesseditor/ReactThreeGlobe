import * as React from 'react';
import { Group, Mesh, TextureLoader } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { EnvMap } from './GlobeHelpers';
import PlaneMesh from '../assets/plane/scene.glb';
import PlaneTrailMask from '../assets/mask.png';

const Plane = ({ moonEnvIntensity, sunEnvIntensity }) => {
    const gltf = useLoader(GLTFLoader, PlaneMesh).scene.children[0]

    const plane = (
        <React.Suspense fallback={null}>
            <primitive object={gltf}></primitive>
        </React.Suspense>
    )


    // const planeMesh = useGLTF(PlaneMesh).scene.children[0];
    // let planeLoad = planeMesh
    // console.log('PLANE MASH', planeLoad)
    // let plane = planeLoad.clone();
    // plane.scale.set(0.001, 0.001, 0.001);
    // plane.position.set(0,0,0);
    // plane.rotation.set(0,0,0);
    // plane.updateMatrix();

    // plane.traverse((object) => {
    //     if(object instanceof Mesh) {
    //         object.material.envMap = EnvMap;
    //         object.sunEnvIntensity = 1;
    //         object.moonEnvIntensity = 0.3;
    //         object.castShadow = true;
    //         object.receiveShadow = true;
    //     }
    // });

    let planeTrail = useLoader(TextureLoader, PlaneTrailMask);

    const trail =  (
        <mesh
            moonEnvIntensity={moonEnvIntensity}
            position={[0, 0, 0]}
            rotateX={Math.PI}
            sunEnvIntensity={sunEnvIntensity}
            translateY={1.1}
        >
            <planeGeometry args={[1, 2]} attach="geometry" />
            <meshPhysicalMaterial
                alphaMap={planeTrail}
                attach="material"
                envMap={EnvMap}
                envMapIntensity={3}
                metalness={0}
                opacity={1}
                roughness={0.4}
                transmission={1}
                transparent={true}
            />
        </mesh>
    )

    const planeGroup = new Group();
    planeGroup.add(plane)
    planeGroup.add(trail)

    return (
        // <React.Suspense fallback={null}>
            <mesh
            moonEnvIntensity={moonEnvIntensity}
            rotateX={Math.PI}
            sunEnvIntensity={sunEnvIntensity}
            translateY={1.1}
        >
            <primitive object={gltf.scene.children[0]}></primitive>
            <planeGeometry args={[1, 2]} attach="geometry" />
            <meshPhysicalMaterial
                alphaMap={planeTrail}
                attach="material"
                envMap={EnvMap}
                envMapIntensity={3}
                metalness={0}
                opacity={1}
                roughness={0.4}
                transmission={1}
                transparent={true}
            />
        </mesh>
        // </React.Suspense>
    )
} 

export default Plane;