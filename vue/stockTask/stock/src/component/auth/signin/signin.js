import { email, required, numeric } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("signin", formData);
      this.$router.push("/stocks");
    }
  }
};
