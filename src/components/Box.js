import React, { useState, useRef, useEffect, useMemo } from 'react'
import * as THREE from 'three'
import Grid from './Grid'
//import shop from './assets/shop.gltf'
import { tweenToColor, getNodesInShortestPathOrder } from './algorithms/helpers'
import TWEEN from '@tweenjs/tween.js';

import { red } from '@material-ui/core/colors';
/*
export function Box() {
  let box = new THREE.Mesh(new THREE.BoxBufferGeometry(),
    new THREE.MeshPhongMaterial({ color: red }));

  box.position.set(0, 6, 0);
  box.scale.set(6, 6, 6);
  box.castShadow = true;
  box.receiveShadow = true;
  scene.add(box);
}

export function animate() {
  TWEEN.update();
  renderer.render(scene);
  requestAnimationFrame(animate);
}
animate()
export default Box*/