import { BufferGeometry, BufferAttribute, Mesh, MeshToonMaterial } from 'three'

const positions = new Float32Array([
  // front
  -10, 10, 10, // 0
  -10, -10, 10, // 1
  10, 10, 10, // 2
  10, -10, 10, // 3
  // right
  10, 10, 10, // 4
  10, -10, 10, // 5
  10, 10, -10, // 6
  10, -10, -10, // 7
  // back
  10, 10, -10, // 8
  10, -10, -10, // 9
  -10, 10, -10, // 10
  -10, -10, -10, // 11
  // left
  -10, 10, -10, // 12
  -10, -10, -10, // 13
  -10, 10, 10, // 14
  -10, -10, 10, // 15
  // top
  -10, 10, -10, // 16
  -10, 10, 10, // 17
  10, 10, -10, // 18
  10, 10, 10, // 19
  // bottom
  -10, -10, 10, // 20
  -10, -10, -10, // 21
  10, -10, 10, // 22
  10, -10, -10 // 23
])

const normals = new Float32Array([
  // front
  0, 0, 1, // 0
  0, 0, 1, // 1
  0, 0, 1, // 2
  0, 0, 1, // 3
  // right
  1, 0, 0, // 4
  1, 0, 0, // 5
  1, 0, 0, // 6
  1, 0, 0, // 7
  // back
  0, 0, -1, // 8
  0, 0, -1, // 9
  0, 0, -1, // 10
  0, 0, -1, // 11
  // left
  -1, 0, 0, // 12
  -1, 0, 0, // 13
  -1, 0, 0, // 14
  -1, 0, 0, // 15
  // top
  0, 1, 0, // 16
  0, 1, 0, // 17
  0, 1, 0, // 18
  0, 1, 0, // 19
  // bottom
  0, -1, 0, // 20
  0, -1, 0, // 21
  0, -1, 0, // 22
  0, -1, 0 // 23
])

const indices = new Uint32Array([
  // front 0
  0, 1, 2,
  3, 2, 1,
  // right 6
  4, 5, 6,
  7, 6, 5,
  // back 12
  8, 9, 10,
  11, 10, 9,
  // left 18
  12, 13, 14,
  15, 14, 13,
  // top 24
  16, 17, 18,
  19, 18, 17,
  // bottom 30
  20, 21, 22,
  23, 22, 21
])

const colors = [
  0x00ff00,
  0xff6600,
  0x0000ff,
  0xff0000,
  0xffff00,
  0xffffff,
]

const defaultColor = 0x000000

export class ToonCube {
  constructor (colorMap, gradientMap) {
    const geometry = new BufferGeometry()
    geometry.setAttribute('position', new BufferAttribute(positions, 3))
    geometry.setAttribute('normal', new BufferAttribute(normals, 3))
    geometry.setIndex(new BufferAttribute(indices, 1))
    geometry.clearGroups()
    // start, count, material index
    geometry.addGroup(0, 6, 0)
    geometry.addGroup(6, 6, 1)
    geometry.addGroup(12, 6, 2)
    geometry.addGroup(18, 6, 3)
    geometry.addGroup(24, 6, 4)
    geometry.addGroup(30, 6, 5)
    const materials = colorMap.map((flag, index) => {
      const color = flag ? colors[index] : defaultColor
      console.log(color)
      return new MeshToonMaterial({ color, gradientMap })
    })
    return new Mesh(geometry, materials)
  }
}
