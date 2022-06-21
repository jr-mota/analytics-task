<template>
  <main class="container mt-0 mb-0 ml-auto mr-auto">
    <header
      class="flex items-center p-6 shadow-lg shadow-gray-500/10 border-blue-400/20 border-b-4"
    >
      <h1 class="flex items-center text-2xl">Аналитика</h1>
    </header>

    <section
      class="mt-4 shadow-lg shadow-gray-500/10 border-blue-400/20 border-b-4"
    >
      <h3 class="text-center pt-6 opacity-70">Аналитика по визитам</h3>

      <the-visit-analytics :visit-data="visitData" />
    </section>
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
      return this.$store.getters["visits/getVisitData"];
    },
  },
};
</script>
