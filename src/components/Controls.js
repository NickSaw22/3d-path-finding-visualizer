import { OrbitControls } from 'drei';
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
import React, {useEffect, useState} from 'react';
import { useThree, useFrame } from 'react-three-fiber';
import TWEEN, { Tween } from '@tweenjs/tween.js';
import * as THREE from 'three';


function Controls(props) {
    const [lockPan, setLockPan] = useState(false);
    const x = props.resetStatus;
    const {
        camera,
        gl,
        scene,
      } = useThree();

    useEffect(() => {
        if(props.resetStatus == true){
            resetCamera();
            setLockPan(true);
        }
        else{
            setLockPan(false);
        }
    }, [x]);

    //const controls = new PointerLockControls(camera,gl.domElement); 
    
    function resetCamera() {
        new TWEEN.Tween(camera.position)
            .to({ x: 0, y: 350, z: 0 }, 200)
            .easing(TWEEN.Easing.Exponential.Out)
            .onUpdate(() => {
                camera.lookAt(scene.position);
            })
            .onComplete(() => {
                let lookDirection = new THREE.Vector3();
                camera.getWorldDirection(lookDirection);
                //controls.target
                   //     .copy(camera.position)
                     //   .add(lookDirection.multiplyScalar(350));
            })
            .start();
        new TWEEN.Tween(camera.rotation)
            .to({ x: -Math.PI / 2, y: 0, z: 0 }, 2000)
            .easing(TWEEN.Easing.Exponential.Out)
            .start();
    } 

    function checkLock(){
        if(lockPan == true)
        {
            return false;
        }
        else {
            return true;
        }
    }

    return (
        <OrbitControls enabled = {checkLock()}/>
    )
}

export default Controls
