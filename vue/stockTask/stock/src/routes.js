import Home from "./component/home/Home.vue";
import Portfolio from "./component/portfolio/portfolio/Portfolio.vue";
import Stocks from "./component/stocks/stocks/Stocks.vue";
import Signup from "./component/auth/signup/Signup.vue";

import store from "./store/modules/portfolio";

import UserList from "./component/userList/UserList.vue";
import Signin from "./component/auth/signin/Signin.vue";
import VueJwtDecode from "vue-jwt-decode";
import axios from "./component/axios/axios";

export const routes = [
  { path: "/", component: Home },
  {
    path: "/list",
    component: UserList,
    beforeEnter(to, from, next) {
      const token = localStorage.getItem("token");
      const decode = VueJwtDecode.decode(token);
      if (decode.role === "admin") {
        next();
      } else {
        next("/signin");
      }
    }
  },
  {
    path: "/portfolio",
    component: Portfolio,
    beforeEnter(to, from, next) {
      if (store.state.token) {
        next();
      } else {
        next("/signin");
      }
    }
  },
  { path: "/signup", component: Signup },
  { path: "/signin", component: Signin },
  { path: "/stocks", component: Stocks }
  
];
