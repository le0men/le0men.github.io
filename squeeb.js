import * as THREE from 'three';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';

const scene = new THREE.Scene();
const pivot = new THREE.Group();
scene.add(pivot)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const loader = new GLTFLoader();
let squeeb;

loader.load('squeeb/scene.gltf', function (gltf) {

  squeeb = gltf.scene;
  pivot.add(squeeb)
  //miku.position.set(-150, -200, 100);
  squeeb.position.set(0, -6, 0);

}, undefined, function (error) {

  console.error(error);

});

const pointLight1 = new THREE.PointLight(0xffffff, 3, 0, 0);
pointLight1.position.set(500, 500, 500);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0);
pointLight2.position.set(- 500, - 500, - 500);
scene.add(pointLight2);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshPhongMaterial({ flatShading: true })
// const cube = new THREE.Mesh(geometry, material);
// //scene.add(cube);

camera.position.z = 13;
pivot.translateX(5)

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);

const effect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: true });
effect.setSize(window.innerWidth, window.innerHeight);
effect.domElement.style.color = 'white';
effect.domElement.style.backgroundColor = 'black';

document.body.appendChild(effect.domElement);
//const controls = new TrackballControls(camera, effect.domElement);
const axis = new THREE.Vector3(0, 1, 0);
let rad = 0.01;

function animate() {
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  pivot.rotateOnAxis(axis, rad);

  //controls.update();
  effect.render(scene, camera);
}