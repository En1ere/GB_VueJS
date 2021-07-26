<template >
  <v-app>
    <v-app-bar app flat class="grey darken-3" dark>
      <v-btn to="/dashboard" plain :ripple="false">Dashboard</v-btn>
      <v-btn to="/about" plain :ripple="false">About</v-btn>
    </v-app-bar>

    <v-main>
      <ModalWindow v-if="modalWindowName" :settings="settings" />
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
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