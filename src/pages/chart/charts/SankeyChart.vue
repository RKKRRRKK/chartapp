<template>
  <div class="container">
    <div class="sankey" id="sankey_chart">
      <GChart
        v-if="
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
  mounted() {
    console.log('Component mounted');
    this.$nextTick(() => {
      if (window.google && window.google.charts) {
        console.log('Google charts exist');
        window.google.charts.load('current', {
          packages: ['sankey'],
        });
        window.google.charts.setOnLoadCallback(() => {
          this.googleChartsLoaded = true;
          console.log('Google charts loaded:', this.googleChartsLoaded);
          this.$nextTick(() => {
            console.log('After nextTick');
          });
        });
      } else {
        console.log('Google charts do not exist');
      }
    });
  },

  computed: {
    activeSheet() {
      const sheet = this.$store.state.sheets.sheets.find(
        (sheet) => sheet.active
      );
      console.log('Active sheet:', sheet);
      return sheet;
    },
    formattedChartData() {
      if (this.activeSheet && this.activeSheet.inputData.length > 0) {
        const header = [['From', 'To', 'Weight']];
        const rows = this.activeSheet.inputData;
        console.log('Formatted chart data:', header.concat(rows));
        return header.concat(rows);
      }
      console.log('No formatted chart data');
      return [];
    },
  },
  data() {
    return {
      chartOptions: {
        width: 1200,
        height: 800,
      },
      googleChartsLoaded: false,
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
