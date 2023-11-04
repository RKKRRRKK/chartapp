<template>
    <div class="container">
      <div class="sankey" id="sankey_chart">
        <GChart
          v-if="
            formattedChartData &&
            formattedChartData.length > 1
          "
          type="Sankey"
          :data="formattedChartData"
          :options="chartOptions"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {

    mounted() {
      this.$nextTick(() => {
        if (window.google && window.google.charts) {
          window.google.charts.load('current', {
            packages: ['sankey'],
          });
          window.google.charts.setOnLoadCallback(() => {
            this.googleChartsLoaded = true;
            this.$nextTick(() => {});
          });
        }
      });
    },
  
    computed: {

      currentFrame() {
        const frame = this.$store.state.iframes.iframes.find(
          (frame) => frame.id == 1)
          return frame 
      },

      formattedChartData() {
        if (this.currentFrame.data.length > 0) {
          const header = [['From', 'To', 'Weight']];
          const rows = this.currentFrame.data;
          return header.concat(rows);
        }
        return [];
      },
      nodePadding() {
        if (this.currentFrame.settings) {
          return this.currentFrame.settings.nodePadding || 10;
        }
        return 80;
      },
  
      colors() {
        if (this.currentFrame.settings) {
          return this.currentFrame.settings.colors;
        }
        return []; // default value
      },
      nodeWidth() {
        if (this.currentFrame.settings) {
          return this.currentFrame.settings.nodeWidth;
        }
        return 0; // default value
      },
      fontSize() {
        if (this.currentFrame.settings) {
          return this.currentFrame.settings.fontSize;
        }
        return 0; // default value
      },
      colorMode() {
        if (this.currentFrame.settings) {
          return this.currentFrame.settings.colorMode;
        }
        return 'none'; // default value
      },
      chartOptions() {
        return {
          width: 1200,
          height: 800,
          sankey: {
            node: {
              nodePadding: this.nodePadding,
              colors: this.colors,
              nodeWidth: this.nodeWidth,
              label: { fontSize: this.fontSize },
            },
            link: {
              colorMode: this.colorMode,
              colors: this.colors,
            },
          },
        };
      },
    },
  }
  
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: white;
  }
  
  .sankey {
    width: 100%; 
    height: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .spinner {
    transform: scale(4);
  }


  
  </style>
  