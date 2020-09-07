import axios from "../../component/axios/axios";

const state = {
  users: []
};

export default {
  created() {
    axios
      .get("/list")
      .then(res => {
        state.users = [];
        state.users = state.users.concat(res.data.data);
      })
      .catch(err => {});
  },
  computed: {
    users() {
      return state.users;
    }
  }
};
