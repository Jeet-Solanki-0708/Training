import { mapActions } from "vuex";

export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    auth() {
      return this.$store.getters.isAuthenticated;
    },
    role() {
      return this.$store.getters.isRole;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks"
    }),
    endDay() {
      this.randomizeStocks();
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/signin");
    }
  }
};
