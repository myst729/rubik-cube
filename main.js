import './style.styl'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { ToonCube } from './ToonCube.js'

(() => {
  // loading
  const loadingManager = new THREE.LoadingManager(() => {
    const loadingScreen = document.getElementById('loading')
    loadingScreen.addEventListener('transitionend', (e) => {
      loadingScreen.remove()
    })
    loadingScreen.className = 'fade'
  })

  // scene
  const sceneOptions = { autoRotate: true }
  const { innerWidth: screenW, innerHeight: screenH, devicePixelRatio: scaler } = window
  const center = new THREE.Vector3(0, 0, 0)
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x333333)

  // camera
  const camera = new THREE.PerspectiveCamera(100, screenW / screenH, 0.25, 1000)
  camera.position.y = 60
  camera.position.z = 160
  camera.lookAt(center)

  // textures
  const threeToneTextureLoader = new THREE.TextureLoader(loadingManager)
  const threeTone = threeToneTextureLoader.load('threeTone.jpg')
  threeTone.minFilter = THREE.NearestFilter
  threeTone.magFilter = THREE.NearestFilter

  const fiveToneTextureLoader = new THREE.TextureLoader(loadingManager)
  const fiveTone = fiveToneTextureLoader.load('fiveTone.jpg')
  fiveTone.minFilter = THREE.NearestFilter
  fiveTone.magFilter = THREE.NearestFilter

  // cube
  const cubes = [
    // bottom slice
    { colorMap: [1, 0, 0, 1, 0, 1], position: [-21, -21, 21] },
    { colorMap: [1, 0, 0, 0, 0, 1], position: [0, -21, 21] },
    { colorMap: [1, 1, 0, 0, 0, 1], position: [21, -21, 21] },
    { colorMap: [0, 0, 0, 1, 0, 1], position: [-21, -21, 0] },
    { colorMap: [0, 0, 0, 0, 0, 1], position: [0, -21, 0] },
    { colorMap: [0, 1, 0, 0, 0, 1], position: [21, -21, 0] },
    { colorMap: [0, 0, 1, 1, 0, 1], position: [-21, -21, -21] },
    { colorMap: [0, 0, 1, 0, 0, 1], position: [0, -21, -21] },
    { colorMap: [0, 1, 1, 0, 0, 1], position: [21, -21, -21] },
    // middle slice
    { colorMap: [1, 0, 0, 1, 0, 0], position: [-21, 0, 21] },
    { colorMap: [1, 0, 0, 0, 0, 0], position: [0, 0, 21] },
    { colorMap: [1, 1, 0, 0, 0, 0], position: [21, 0, 21] },
    { colorMap: [0, 0, 0, 1, 0, 0], position: [-21, 0, 0] },
    { colorMap: [0, 0, 0, 0, 0, 0], position: [0, 0, 0] },
    { colorMap: [0, 1, 0, 0, 0, 0], position: [21, 0, 0] },
    { colorMap: [0, 0, 1, 1, 0, 0], position: [-21, 0, -21] },
    { colorMap: [0, 0, 1, 0, 0, 0], position: [0, 0, -21] },
    { colorMap: [0, 1, 1, 0, 0, 0], position: [21, 0, -21] },
    // top slice
    { colorMap: [1, 0, 0, 1, 1, 0], position: [-21, 21, 21] },
    { colorMap: [1, 0, 0, 0, 1, 0], position: [0, 21, 21] },
    { colorMap: [1, 1, 0, 0, 1, 0], position: [21, 21, 21] },
    { colorMap: [0, 0, 0, 1, 1, 0], position: [-21, 21, 0] },
    { colorMap: [0, 0, 0, 0, 1, 0], position: [0, 21, 0] },
    { colorMap: [0, 1, 0, 0, 1, 0], position: [21, 21, 0] },
    { colorMap: [0, 0, 1, 1, 1, 0], position: [-21, 21, -21] },
    { colorMap: [0, 0, 1, 0, 1, 0], position: [0, 21, -21] },
    { colorMap: [0, 1, 1, 0, 1, 0], position: [21, 21, -21] },
  ]

  cubes.map((option) => {
    const cube = new ToonCube(option.colorMap, fiveTone)
    scene.add(cube)
    cube.position.set(...option.position)
  })

  // lights
  const ambientLight = new THREE.AmbientLight(0xdddddd)
  scene.add(ambientLight)

  // renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(scaler)
  renderer.setSize(screenW, screenH)
  renderer.shadowMap.enabled = true
  document.body.appendChild(renderer.domElement)
  renderer.setAnimationLoop((time) => {
    controls.update()
    renderer.render(scene, camera)
  })

  // controls
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.autoRotate = true
  controls.enablePan = false
  controls.enableZoom = false
  controls.target = center

  window.addEventListener('resize', (e) => {
    const reziedW = window.innerWidth
    const reziedH = window.innerHeight
    camera.aspect = reziedW / reziedH
    camera.updateProjectionMatrix()
    renderer.setSize(reziedW, reziedH)
  }, false)
})()
