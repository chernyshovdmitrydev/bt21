<script>
export default {
  data() {
    return {
      links: [
        { text: "Один", url: "/" },
        { text: "Два", url: "/second" },
      ],
      //   использую динамические классы завязанные на переменных (вместо удобного active-class)
      activeLink: "",
    };
  },
  watch: {
    $route(to) {
      this.activeLink = to.path;
    },
  },
  mounted() {
    this.activeLink = this.$route.path;
  },
};
</script>

<template>
  <header class="header">
    <nav>
      <!-- отрисовываю список с помощью v-for -->
      <ul class="header__links">
        <li v-for="(link, index) in links" :key="index">
          <router-link
            :to="link.url"
            :class="{ active: link.url === activeLink }"
            >{{ link.text }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: antiquewhite;
}
.header__links {
  display: flex;
  gap: 20px;
}

.active {
  color: red;
}
</style>
