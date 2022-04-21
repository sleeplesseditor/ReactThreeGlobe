import React, { useRef, useState, useLayoutEffect } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';

import { Controls } from './Controls';
import { Globe } from './Globe';
import Ring from './Ring';
import { EnvMap } from './GlobeHelpers';

import { Color, Clock, sRGBEncoding, TextureLoader } from 'three';
import Bump from '../assets/earthbump.jpg';
import Map from '../assets/earthmap.jpg';
import Spec from '../assets/earthspec.jpg';

function Content() {
  const camera = useThree((state) => state.camera)
  const scene = useRef();
  useFrame(({ gl }) => void ((gl.autoClear = true),gl.clearDepth(), gl.render(scene.current, camera)), 100)
  return (
    <scene ref={scene}>
       <Globe />
    </scene>
  )
}

function HeadsUpDisplay() {
  const camera = useThree((state) => state.camera)
  const scene = useRef()
  useFrame(({ gl }) => void ((gl.autoClear = false), gl.clearDepth(), gl.render(scene.current, camera)), 100)
  return (
    <scene ref={scene}>
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
    </scene>
  )
}

function WorldContent() {
  const { size, set } = useThree()
  const [ref, setRef] = useState()

  // #15929 (https://github.com/mrdoob/three.js/issues/15929)
  // The camera needs to be updated every frame
  // We give this frame a priority so that automatic rendering will be switched off right away
  useFrame(() => ref.updateMatrixWorld())
  useLayoutEffect(() => void set({ camera: ref }), [ref, set])

  return (
    <>
        <perspectiveCamera 
            aspect={size.width / size.height} 
            far={1000} 
            fov={45} 
            near={0.1} 
            position={[0, 0, 50]}
            ref={setRef}
            onUpdate={(self) => self.updateProjectionMatrix()}
        />
        <Content />
        <HeadsUpDisplay />
    </>
  )
}

export default function WorldContainer() {
    return (
        <Canvas 
            camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 15, 50] }}
            style={{
                background: 'linear-gradient(45deg, rgb(255 219 158), rgb(253 243 220))'
            }} 
            // frameloop="demand"
        >
            {/* <Controls /> */}
            <WorldContent />

        </Canvas>
    )
  }