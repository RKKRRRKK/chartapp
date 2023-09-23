<template>
  <div class="colorsets">
    <div class="rows">
    <label class="label" for="numberColors">Number of Colors:</label>
    <input
      id="numberColors"
      type="number"
      v-model="numberColors"
      @input="updateNumber"
      class="input"
    />

    <label class="label" for="defaultColor">Base Color:</label>
    <input
      id="defaultColor"
      type="color"
      v-model="defaultColor"
      @input="updateBase"
      class="picker"
    />
    </div>

    <base-button class="padd" @click="gencom()" mode="animate-click"
      >Complementary pallete</base-button
    >
    <base-button @click="genanal()" mode="animate-click"
      >Analogous pallete</base-button
    >
  </div>
</template>

<script>
export default {

    data() {
    return {
        numberColors: this.getInitialNumberColors()
    };},

    watch: {
    'state.settings.numberColors': function(newVal) {
      this.numberColors = newVal || null;
    },
  },
  created() {
    // Initialize numberColors when component is created
    this.numberColors = this.getInitialNumberColors();
  },

  computed: {

    state() {
      return this.$store.getters['sheets/getActiveSheet'];
    },
  },

  methods: {
    hslToHex(h, s, l) {
      s /= 100;
      l /= 100;
      let c = (1 - Math.abs(2 * l - 1)) * s;
      let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
      let m = l - c / 2;
      let r = 0;
      let g = 0;
      let b = 0;

      if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
      } else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
      } else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
      } else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
      } else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
      } else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
      }

      r = Math.round((r + m) * 255).toString(16);
      g = Math.round((g + m) * 255).toString(16);
      b = Math.round((b + m) * 255).toString(16);

      if (r.length === 1) r = '0' + r;
      if (g.length === 1) g = '0' + g;
      if (b.length === 1) b = '0' + b;

      return '#' + r + g + b;
    },

    hexToHSL(hex) {
      hex = hex.replace('#', '');

      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);

      const rNormalized = r / 255;
      const gNormalized = g / 255;
      const bNormalized = b / 255;

      const min = Math.min(rNormalized, gNormalized, bNormalized);
      const max = Math.max(rNormalized, gNormalized, bNormalized);
      const delta = max - min;

      let h, s, l;
      l = (max + min) / 2;
      if (delta === 0) {
        s = 0;
        h = 0;
      } else {
        s = delta / (1 - Math.abs(2 * l - 1));

        if (max === rNormalized) {
          h = 60 * (((gNormalized - bNormalized) / delta) % 6);
        } else if (max === gNormalized) {
          h = 60 * ((bNormalized - rNormalized) / delta + 2);
        } else {
          h = 60 * ((rNormalized - gNormalized) / delta + 4);
        }
      }

      if (h < 0) {
        h += 360;
      }

      h = Math.round(h);
      s = Math.round(s * 100);
      l = Math.round(l * 100);

      return [h, s, l];
    },

    gencom() {
      console.log('genrand triggered');
      let baseColor = this.state.settings.baseColor;
      let quantity = this.state.settings.numberColors;
      let complementaryColors = [];

      for (let i = 0; i < quantity; i++) {
        let hue = (baseColor[0] + (i * 360) / quantity) % 360;
        let saturation = baseColor[1];
        let lightness = baseColor[2];
        let hsl = this.hslToHex(hue, saturation, lightness);

        complementaryColors.push(hsl);
      }
      this.$store.dispatch('sheets/updateColors', complementaryColors);
      console.log('log com colors', complementaryColors);
    },
    genanal() {
      let baseColor = this.state.settings.baseColor;
      let quantity = this.state.settings.numberColors;
      let analogousColors = [];

      let [baseHue, baseSat, baseLight] = baseColor;

      let step;
      if (quantity <= 4) {
        step = 30;
      } else if (quantity > 4 && quantity <= 7) {
        step = 20;
      } else {
        step = 15;
      }

      for (let i = 0; i < quantity; i++) {
        let newHue = (baseHue + i * step) % 360;
        let newColor = this.hslToHex(newHue, baseSat, baseLight);
        analogousColors.push(newColor);
      }
      this.$store.dispatch('sheets/updateColors', analogousColors);
      console.log('log anal colors', analogousColors);
    },

    updateNumber() {
      console.log('number before: ', this.state.settings.numberColors);
      this.$store.dispatch('sheets/updateNumberColors', this.numberColors);
      console.log('number after: ', this.state.settings.numberColors);
    },

    updateBase() {
      let converted = this.hexToHSL(this.defaultColor);
      this.$store.dispatch('sheets/updateBase', converted);
    },
    getInitialNumberColors() {
      return this.state?.settings?.numberColors || null;
    },
  },
};
</script>

<style scoped>

.colorsets{
    display: flex;
    flex-direction: column;
}

.padd{
    margin-top:1rem;
    margin-bottom:0.5rem;
}

.input {
  border-radius: 0.5rem;
  border-color: #f7ddd4;
  border-width: 0;
  background-color: #f7ddd4;
  padding: 0rem;
  width: 3rem;
  text-align: center;
  
}

.picker {
    border-radius: 0.5rem;
    border-color: #fefbfa;
    background-color: #fefbfa;
    cursor: pointer;
}

.rows {
    display: flex;
    flex-direction: row;
    margin-left: -1rem;
}

.label {
    font-size: 0.7rem;
    padding-right: 0.2rem;
    padding-left: 1rem;
}
</style>
