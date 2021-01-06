<template>
  <a-row :gutter="8">
    <a-col :span="6">
      <a-card :bordered="false" hoverable>
        <total-sales></total-sales>
      </a-card>
    </a-col>
    <a-col :span="6">
      <a-card :bordered="false" hoverable>
        <total-orders></total-orders>
      </a-card>
    </a-col>
    <a-col :span="6">
      <a-card :bordered="false" hoverable>
        <today-users></today-users>
      </a-card>
    </a-col>
    <a-col :span="6">
      <a-card :bordered="false" hoverable>
        <total-users></total-users>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import TodayUsers from "./TodayUsers";
import TotalOrders from "./TotalOrders";
import TotalSales from "./TotalSales";
import TotalUsers from "./TotalUsers";
export default {
  components: {
    TodayUsers,
    TotalOrders,
    TotalSales,
    TotalUsers
  },
  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>

<style>
.increase {
  display: inline-block;
  width: 0;
  height: 0;
  border-width: 4px;
  border-color: transparent transparent red transparent;
  border-style: solid;
  transform: translate(100%, -50%);
  margin-right: 1rem;
}

.decrease {
  display: inline-block;
  width: 0;
  height: 0;
  border-width: 4px;
  border-color: rgb(29, 200, 29) transparent transparent transparent;
  border-style: solid;
  transform: translatex(100%);
}
</style>
