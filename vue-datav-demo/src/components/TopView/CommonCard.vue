<template>
  <div class="common-card">
    <div class="title">{{ title }}</div>
    <div class="value">{{ value }}</div>
    <div class="chart">
      <slot></slot>
    </div>

    <div class="line"></div>
    <div class="total">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import PROPS from "../../ts/propValidators";
export default {
  name: "CommonCard",
  props: Object.assign({}, PROPS.COMMON_CARD)
};
</script>

<style lang="scss" scoped>
.common-card {
  text-align: start;

  .title {
    font-size: 1rem;
    color: #999;
  }
  .value {
    font-size: 1.5rem;
    color: rgb(0, 0, 0);

    overflow: hidden;
    text-overflow: ellipsis;
  }
  .chart {
    position: relative;
    padding-top: 40%;
    cursor: pointer;
    & > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .line {
    border-bottom: 1px solid #eee;
    border-width: 100%;
  }

  .total {
    font-size: 1rem;
    color: #666;
  }
}
</style>
