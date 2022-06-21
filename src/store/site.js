import SiteLocalStorageRepository from "@/repositories/SiteLocalStorageRepository";

export default {
  namespaced: true,
  state: {
    siteId: SiteLocalStorageRepository.getSiteId(),
  },
  mutations: {
    setSiteId(state, siteId) {
      state.siteId = siteId;
    },
  },
  getters: {
    getSiteId: (state) => state.siteId,
  },
};
