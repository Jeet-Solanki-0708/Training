import { mapGetters } from "vuex";
import Stock from "../stock/Stock.vue";

export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    }),
    getEmail() {
      return localStorage.getItem("email");
    }
  },
  components: {
    appStock: Stock
  }
};
