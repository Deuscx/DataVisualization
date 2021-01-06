<template>
  <common-card title="累计订单量" value="$21,73,123">
    <d-echarts :option="chartProps.option"></d-echarts>
    <template v-slot:footer>
      <span>昨日订单量</span>
      <span class="emphasize"> 2,000,000</span>
    </template>
  </common-card>
</template>

<script>
import { reactive } from "vue";
import DEcharts from "@components/DEcharts/index";
import CommonCard from "./CommonCard";
export default {
  components: { CommonCard, DEcharts },
  setup() {
    const option = {
      xAxis: {
        type: "category",
        boundaryGap: false,
        show: false
      },
      yAxis: {
        type: "value",
        show: false
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          areaStyle: {
            color: "purple"
          },
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true
        }
      ],
      grid: {
        left: "3%",
        right: "4%"
      }
    };

    const chartProps = reactive({
      option
    });
    return { chartProps };
  }
};
</script>

<style lang="scss" scoped></style>
