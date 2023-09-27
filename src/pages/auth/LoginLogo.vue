<template>
    <div class="tres-container">
      <Suspense>
        <TresCanvas clear-color="#82DBC5">
          <TresPerspectiveCamera :position="[3, 3, 3]" :look-at="[0, 0, 0]" />
          <TresMesh v-if="foxObject" :geometry="foxObject.geometry" :material="myMaterial" />
          <TresAmbientLight :intensity="1" />
        </TresCanvas>
      </Suspense>
    </div>
</template>
  
<script>
import { TresCanvas, useLoader } from '@tresjs/core';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MeshStandardMaterial } from 'three';


export default {
    data() {
      return {
        foxObject: null,
        myMaterial: new MeshStandardMaterial({ color: 0xffaa00 })

      };
    },
    components: {
      TresCanvas
    },
    async mounted() {
      this.foxObject = await useLoader(OBJLoader, '/3d/fox.obj');

    }
}
</script>
  
<style scoped>
.tres-container {
    width: 100%;
    height: 100%;
}
</style>
