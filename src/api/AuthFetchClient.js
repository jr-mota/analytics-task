export default class AuthFetchClient {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
  }

  async auth(siteId) {
    const res = await fetch("https://track-api.leadhit.io/client/test_auth", {
      headers: {
        "Api-Key": this.API_KEY,
        "Leadhit-Site-Id": siteId,
      },
    });

    const data = await res.json();

    if (data.message === "ok") return siteId;

    return false;
  }
}
