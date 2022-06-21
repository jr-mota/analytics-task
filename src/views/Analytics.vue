<template>
  <main class="container max-w-3xl mt-0 mb-0 ml-auto mr-auto">
    <header
      class="flex items-center p-6 shadow-lg shadow-gray-500/10 border-blue-400/40 border-b-4"
    >
      <h1 class="flex items-center text-2xl">Аналитика</h1>
    </header>

    <section
      class="mt-4 shadow-lg shadow-gray-500/10 border-blue-400/40 border-b-4"
    >
      <h3 class="text-center pt-6 opacity-70">Аналитика по визитам</h3>

      <the-visit-chart :data-for-chart="visitData" />
    </section>
  </main>
</template>

<script>
import TheVisitChart from "@/components/TheVisitChart.vue";

export default {
  name: "Analytics",

  components: {
    TheVisitChart,
  },

  computed: {
    visitData() {
      return this.$store.getters["visits/getVisitData"];
    },
  },
};
</script>
