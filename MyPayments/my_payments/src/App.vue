<template>
  <div id="app">
    <header class="header">
      <h1>My Personal Costs</h1>
    </header>

    <nav class="navigation">
      <a class="navigation__link" href="#" @click="goToPage('dashboard')"
        >Dashboard</a
      >
      <a class="navigation__link" href="#" @click="goToPage('about')">About</a>
    </nav>
    <main><router-view /></main>
    <transition name="fade">
      <ModalWindow
        v-if="modalWindowName"
        :settings="settings"
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    ModalWindow: () => import("./components/ModalWindow.vue"),
  },
  data() {
    return {
      page: 1,
      itemsOnPage: 5,
      pageName: "",
      modalWindowName: "",
      settings: {},
      contextActive: false,
    };
  },
  methods: {
    goToPage(page) {
      this.$router.push({
        name: page,
      });
    },
    onShown(settings) {
      this.modalWindowName = settings.name;
      this.settings = settings.settings;
    },
    onHide() {
      this.modalWindowName = "";
      this.settings = {};
    },
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShown);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap");
* {
  font-family: "Oxygen", sans-serif;
  margin: 0;
}
body {
  margin: 0;
}
#app {
  margin: 0;
}
.header {
  font-size: 26px;
  padding: 50px 0 50px 50px;
}
.navigation {
  margin-left: 50px;
  margin-bottom: 50px;
  &__link {
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    padding: 20px;
    color: rgb(77, 77, 77);
    border-bottom: 3px solid rgb(77, 77, 77);
    &:not(:last-child) {
      margin-right: 50px;
    }
    &:hover {
      cursor: pointer;
      color: rgb(110, 196, 39);
      border-color: rgb(110, 196, 39);
    }
  }
}
</style>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>