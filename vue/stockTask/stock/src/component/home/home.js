export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  }
};
