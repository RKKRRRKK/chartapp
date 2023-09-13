<template>
  <div class="container">
    <div class="sankey" id="sankey_chart">
      <GChart
      v-if="formattedChartData && formattedChartData.length > 1"
        type="Sankey"
        :data="formattedChartData"
        :options="chartOptions"
      />
    </div>
  </div>
</template>

<script>

export default {

  computed: {
    // Get the active sheet from the Vuex store
    activeSheet() {
      return this.$store.state.sheets.sheets.find((sheet) => sheet.active);
    },
    // Format the chart data based on the active sheet
    formattedChartData() {
      if (this.activeSheet && this.activeSheet.inputData.length > 0) {
        const header = [['From', 'To', 'Weight']];
        const rows = this.activeSheet.inputData;
        return header.concat(rows);
      }
      return [];
    },
  },
  data() {
    return {
      chartOptions: {
        // Set chart options here
        width: 1200,
        height: 800,
      },
    };
  },
};
</script>

<style scoped>
.container {
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
  width: 80%;
  height: 80%;
}
</style>
