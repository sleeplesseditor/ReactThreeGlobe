import { useLoader, useThree } from '@react-three/fiber';
import { FloatType } from 'three';
import { PMREMGenerator } from 'three/src/extras/PMREMGenerator';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import HDR from '../assets/old_room_2k.hdr';

const EnvMap = () => {
    const { gl } = useThree();

    let pmrem = new PMREMGenerator(gl);

    let map;

    let envTexture = useLoader(RGBELoader, HDR);
    envTexture.setDataType(FloatType);

    let rt = pmrem.fromEquirectangular(envTexture);
    map = rt.texture;

    console.log('MAP', map)

    return map;
}

function nr() {
    return Math.random() * 2 - 1;
}
  
export {
    EnvMap,
    nr
}