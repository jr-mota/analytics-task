const SiteLocalStorageRepository = {
  saveSiteId(siteId) {
    localStorage.setItem("leadhit-site-id", JSON.stringify(siteId));
  },

  getSiteId() {
    return localStorage.getItem("leadhit-site-id");
  },
};

export default SiteLocalStorageRepository;
