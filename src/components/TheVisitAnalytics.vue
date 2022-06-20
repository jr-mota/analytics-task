<template>
  <div ref="visit-chart-root" class="h-60 pr-4"></div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

export default {
  props: {
    visitData: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    visitChart: undefined,
  }),

  mounted() {
    if (!this.visitData.length) return;

    // Hide Am logo
    am4core.addLicense("ch-custom-attribution");

    // Create XY chart
    const visitChart = am4core.create(
      this.$refs["visit-chart-root"],
      am4charts.XYChart
    );

    // Set information about visits
    visitChart.data = this.visitData;

    // Add X axis
    const categoryAxis = visitChart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "date";
    categoryAxis.cursorTooltipEnabled = false;

    // Add Y axis
    const valueAxis = visitChart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.cursorTooltipEnabled = false;

    // Add series
    const series = visitChart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "date";
    series.bullets.push(new am4charts.CircleBullet());
    series.tooltipText = "{categoryX}: [bold]{valueY}[/]";

    // Add scrollbar
    visitChart.scrollbarX = new am4core.Scrollbar();

    // Change cursor
    visitChart.cursor = new am4charts.XYCursor();
    visitChart.cursor.lineX.strokeWidth = 0;
    visitChart.cursor.lineY.strokeWidth = 0;

    // Save chart in data
    this.visitChart = visitChart;
  },

  beforeUnmount() {
    if (this.visitChart) this.visitChart.dispose();
  },
};
</script>
