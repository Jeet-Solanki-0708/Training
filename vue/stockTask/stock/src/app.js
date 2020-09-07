import Header from "./component/header/Header.vue";
export default {
  components: {
    appHeader: Header,
  },
  created() {
    this.$store.dispatch("initStocks");
  },
};
