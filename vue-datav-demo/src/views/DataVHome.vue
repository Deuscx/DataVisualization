<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import TopView from "@components/TopView/index";
import BottomView from "@components/BottomView/index";
import SalesView from "@components/SalesView/index";
import MapView from "@components/MapView/index";
export default {
  components: {
    TopView,
    BottomView,
    SalesView,
    MapView
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #fafafa;
  z-index: 100;
  padding: 2rem;
}
</style>
