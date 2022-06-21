<template>
  <main class="flex justify-center items-center flex-col h-screen">
    <h1 class="flex items-center text-2xl">
      LeadHit <span class="ml-2 text-xl"> ❤</span>
    </h1>

    <section
      class="flex items-center w-full max-w-lg h-full max-h-64 pl-4 pr-4 shadow-lg shadow-gray-500/10 border-blue-400/40 border-b-4"
    >
      <the-auth-enter-form @enter="enter" />
    </section>
  </main>
</template>

<script>
import TheAuthEnterForm from "@/components/TheAuthEnterForm.vue";

import AuthFetchClient from "@/api/AuthFetchClient";
import SiteLocalStorageRepository from "@/repositories/SiteLocalStorageRepository";

// .env добавлю  в репозиторий
const authFetchClient = new AuthFetchClient(
  process.env.VUE_APP_LEADHIT_API_KEY
);

export default {
  name: "Authorization",

  components: {
    TheAuthEnterForm,
  },

  methods: {
    async enter(siteId) {
      siteId = "5f8475902b0be670555f1bb3";

      const authSiteId = await authFetchClient.auth(siteId);

      if (authSiteId) {
        SiteLocalStorageRepository.saveSiteId(authSiteId);

        this.$store.commit("site/setSiteId", authSiteId);

        this.$router.push("/analytics");
      }
    },
  },
};
</script>
