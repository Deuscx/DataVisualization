<template>
  <common-card title="今日交易用户数" value="81,104">
    <d-echarts :option="chartProps.option"></d-echarts>
    <template v-slot:footer>
      <span>昨日订单量</span>
      <span class="emphasize"> 2,000,000</span>
    </template>
  </common-card>
</template>

<script>
import { reactive } from "vue";
import CommonCard from "./CommonCard";
import DEcharts from "@components/DEcharts/index";
export default {
  components: { CommonCard, DEcharts },
  setup() {
    const option = {
      color: ["#3398DB"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "10%"
      },
      xAxis: [
        {
          type: "category",
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
          show: false
        }
      ],
      yAxis: [
        {
          type: "value",
          show: false
        }
      ],
      series: [
        {
          type: "bar",
          barWidth: "50%",
          data: new Array(12)
            .fill(null)
            .map(() => Math.floor(Math.random() * 300 + 100))
        }
      ]
    };

    const chartProps = reactive({
      option
    });

    return { chartProps };
  }
};
</script>

<style lang="scss" scoped></style>
