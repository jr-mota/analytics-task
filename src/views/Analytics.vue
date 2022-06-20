<template>
  <main class="container mt-0 mb-0 ml-auto mr-auto">
    <h1 class="text-2xl mt-2 p-2">Аналитика</h1>
    <h3 class="text-center mt-5">Аналитика по визитам</h3>

    <the-visit-analytics :visit-data="visitData" />
  </main>
</template>

<script>
import TheVisitAnalytics from "@/components/TheVisitAnalytics.vue";

export default {
  name: "Analytics",

  components: {
    TheVisitAnalytics,
  },

  computed: {
    visitData() {
      return this.$store.getters["visits/getVisits"];
    },
  },
};
</script>
