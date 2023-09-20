<template>
  <div class="container">
    <div class="sankey" id="sankey_chart">
      <!-- Show spinner while loading -->
      <base-spinner class="spinner" v-if="isLoading"></base-spinner>

      <GChart
        v-if="
          !isLoading &&
          googleChartsLoaded &&
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
  data() {
    return {
      googleChartsLoaded: false,
    };
  },
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
    activeSheet() {
      const sheet = this.$store.state.sheets.sheets.find(
        (sheet) => sheet.active
      );
      //console.log('Active sheet:', sheet);
      return sheet;
    },
    formattedChartData() {
      if (this.activeSheet && this.activeSheet.inputData.length > 0) {
        const header = [['From', 'To', 'Weight']];
        const rows = this.activeSheet.inputData;
        //   console.log('Formatted chart data:', header.concat(rows));
        return header.concat(rows);
      }
      console.log('No formatted chart data');
      return [];
    },
    nodePadding() {
      if (this.activeSheet && this.activeSheet.settings) {
        //  console.log(
        //    'this active sheet node padding: ',
        //    this.activeSheet.settings.nodePadding
        //   );
        return this.activeSheet.settings.nodePadding || 10;
      }
      return 80;
    },

    colors() {
      if (this.activeSheet && this.activeSheet.settings) {
        return this.activeSheet.settings.colors;
      }
      return []; // default value
    },
    nodeWidth() {
      if (this.activeSheet && this.activeSheet.settings) {
        return this.activeSheet.settings.nodeWidth;
      }
      return 0; // default value
    },
    fontSize() {
      if (this.activeSheet && this.activeSheet.settings) {
        return this.activeSheet.settings.fontSize;
      }
      return 0; // default value
    },
    colorMode() {
      if (this.activeSheet && this.activeSheet.settings) {
        return this.activeSheet.settings.colorMode;
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
    data() {
      return {
        googleChartsLoaded: false,
      };
    },
    isLoading() {
      return this.activeSheet.input
    },
    hasInput() {
      if (this.activeSheet && this.activeSheet.settings) {
      return this.activeSheet.inputData}
      return null
    },

  },
  watch: {
    isLoading(newVal) {
      if (newVal === true) {
        console.log("isLoading changed to true")
        return true 
      } 
    },
    hasInput(newVal) {
      if (newVal) {
        // inputData exists, so we can assume loading has finished
        // Update the Vuex state to indicate loading has finished
        this.$store.dispatch('sheets/isLoading', false);
        console.log("hasInput triggered")
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-size: 40px 40px;
  background-image: linear-gradient(
      to right,
      rgb(245, 235, 235) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgb(245, 235, 235) 1px, transparent 1px);
}

.sankey {
  /* Your chart dimensions here; could be fixed or flexible */
  width: 80%; /* Example */
  height: 80%; /* Example */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -25rem;
}

.spinner {
  transform: scale(4)
}


</style>
