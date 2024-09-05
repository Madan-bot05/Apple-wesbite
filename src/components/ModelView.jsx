import { PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import Lights from './Lights'
import Iphone from './Iphone'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const ModelView = ({index,groupRef,gsapType,controlRef,setRotationSize,size,item}) => {
  return (
    <View
    index={index}
    id={gsapType}
    className={`border-2 border-red-400 w-full h-full
      ${index===2} ? 'right-[100%]:''`}
    >
      <ambientLight intensity={0.3}/>
      <PerspectiveCamera makeDefault position={[0,0,4]}/>
      <Lights/>
      <Suspense fallback={<div>Loading</div>}>
      <Iphone/>
      </Suspense>
    </View>
  )
}

export default ModelView