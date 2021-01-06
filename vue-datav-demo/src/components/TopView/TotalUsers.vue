<template>
  <common-card title="累计用户数" value="1,81,104">
    <d-echarts :option="chartProps.option" class="chart-container"></d-echarts>
    <template v-slot:footer>
      <div class="total-users">
        <span>日同比</span>
        <span class="emphasize"> 8.73%</span>
        <div class="increase"></div>
        <span>月同比</span>
        <span class="emphasize"> 8.73%</span>
        <div class="decrease"></div>
      </div>
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
      xAxis: {
        type: "value",
        show: false
      },
      yAxis: {
        type: "category",
        data: ["周一"],
        show: false
      },
      series: [
        {
          name: "直接访问",
          type: "bar",
          stack: "总量",
          data: [320],
          barWidth: 10
        },
        {
          name: "邮件营销",
          type: "bar",
          stack: "总量",
          data: [120]
        },
        {
          name: "联盟广告",
          type: "bar",
          stack: "总量",
          data: [220]
        },
        {
          name: "视频广告",
          type: "bar",
          stack: "总量",
          data: [150]
        },
        {
          name: "搜索引擎",
          type: "bar",
          stack: "总量",
          data: [820]
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

<style lang="scss" scoped>
.total-users {
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
}
.chart-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
