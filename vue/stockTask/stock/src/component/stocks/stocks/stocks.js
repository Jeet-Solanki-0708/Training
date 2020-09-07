import Stock from "../stock/Stock.vue";

export default {
  components: {
    appStock: Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
