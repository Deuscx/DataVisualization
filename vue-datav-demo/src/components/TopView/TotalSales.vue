<template>
  <common-card title="累计销售额" value="$12,039,234">
    <div class="compare-wrapper">
      <div class="compare">
        <span>日同比</span>
        <span class="emphasize">7.33%</span>
        <div class="increase"></div>
      </div>
      <div class="compare">
        <span>月同比</span>
        <span class="emphasize">6.33%</span>
        <div class="decrease"></div>
      </div>
    </div>
    <template v-slot:footer>
      <div class="des">
        <span>昨日销售额</span>
        <span class="emphasize"> $200</span>
      </div>
    </template>
  </common-card>
</template>

<script>
import CommonCard from "./CommonCard";
export default {
  components: { CommonCard }
};
</script>

<style lang="scss" scoped>
.compare-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .compare {
    font-size: 1.2rem;
    white-space: nowrap;
    display: flex;
    align-items: center;
  }
}
.des {
  white-space: nowrap;
  .emphasize {
    margin-left: 1rem;
    color: rgb(0, 0, 0);
  }
}
</style>
