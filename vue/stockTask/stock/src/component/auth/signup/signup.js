import {
  email,
  required,
  numeric,
  minValue,
  minLength
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: "",
      age: null,
      password: "",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLen: minLength(4),
    },
    age: {
      required,
      numeric,
      minVal: minValue(18),
    },
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        age: this.age,
        password: this.password
      };
      this.$store.dispatch('signup',formData)
      this.$router.push("/stocks")
    }
  }
};
