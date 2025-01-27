import * as THREE from 'three';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
//document.body.appendChild(renderer.domElement);

const pointLight1 = new THREE.PointLight(0xffffff, 3, 0, 0);
pointLight1.position.set(500, 500, 500);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0);
pointLight2.position.set(- 500, - 500, - 500);
scene.add(pointLight2);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ flatShading: true })
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

renderer.setAnimationLoop(animate);

const effect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: true });
effect.setSize(window.innerWidth, window.innerHeight);
effect.domElement.style.color = 'white';
effect.domElement.style.backgroundColor = 'black';

document.body.appendChild(effect.domElement);

function animate() {
  //renderer.render(scene, camera);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  effect.render(scene, camera);
}