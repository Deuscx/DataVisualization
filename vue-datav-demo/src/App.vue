<template>
  <div id="app">
    <router-link
      v-for="(link, key) in links"
      :key="key"
      :to="{ name: link.name }"
      >{{ link.title }}</router-link
    >
    <router-view></router-view>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "App",
  setup() {
    const router = useRouter();
    const routes = router.getRoutes();
    const links = [];
    routes.forEach(router => {
      links.push({
        name: router.name,
        title: router.meta.title || router.name
      });
    });
    return { links };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
