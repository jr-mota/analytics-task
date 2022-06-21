import { createStore } from "vuex";

import site from "./site";
import visits from "./visits";

export default createStore({
  modules: { site, visits },
});
