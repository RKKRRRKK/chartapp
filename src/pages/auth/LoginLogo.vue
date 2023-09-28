<template>
    <TresCanvas clear-color="#82DBC5" shadows alpha>
      <TresPerspectiveCamera :position="[11, 11, 11]" />
      <OrbitControls />
      <Suspense>
        <GLTFModel :path="modelPath" draco />
      </Suspense>
      <TresDirectionalLight :position="lightPosition" :intensity="lightIntensity" cast-shadow />
    </TresCanvas>
  </template>
  
  <script>
  import { OrbitControls, GLTFModel } from '@tresjs/cientos';
  
  export default {
    components: {
      OrbitControls,
      GLTFModel
    },
    data() {
      return {
        modelPath: "/models/AkuAku.gltf",
        lightPosition: [-4, 8, 4],
        lightIntensity: 1.5
      };
    }
  }
  </script>
  
<style scoped>
.tres-container {
    width: 100%;
    height: 100%;
}
</style>
