<template>
    <div class="tres-container">
      <TresCanvas clear-color="#82DBC5">
        <TresPerspectiveCamera :position="[3, 3, 3]" :look-at="[0, 0, 0]" />
        <TresMesh>
          <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
          <TresMeshBasicMaterial color="orange" />
        </TresMesh>
        <TresAmbientLight :intensity="1" />
      </TresCanvas>
    </div>
  </template>
  
  <script>
  import { TresCanvas } from '@tresjs/core'
  
  export default {
    components: {
      TresCanvas
      // ... other TresJS components
    }
  }
  </script>
  
 <style scoped>
.tres-container {
  width: 100%;
  height: 100%;
}
</style>