<template>
  <div class="echart-container " ref="charts"></div>
</template>

<script lang="ts">
import { ref, onMounted, PropType } from "vue";
import echarts, { EChartOption, EChartsResponsiveOption } from "echarts";
import { theme } from "./walden.js";
import "echarts/extension/bmap/bmap";
interface DEchartsProps {
  option: EChartOption | EChartsResponsiveOption;
}

export default {
  props: {
    option: {
      type: Object as PropType<EChartOption | EChartsResponsiveOption>
    }
  },
  setup(props: DEchartsProps) {
    const charts = ref();
    let chart: any = null;

    onMounted(() => {
      echarts.registerTheme("walden", theme);

      chart = echarts.init(charts.value, "walden") as echarts.ECharts;
      chart.setOption(props.option as EChartOption | EChartsResponsiveOption);
      function resize() {
        chart.resize();
      }
      window.addEventListener("resize", resize);
    });

    return { charts };
  }
};
</script>

<style lang="scss" scoped>
.echart-container {
  cursor: pointer;
  height: 100%;
}
</style>
