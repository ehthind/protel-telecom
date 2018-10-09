import Vue from "vue";
import Router from "vue-router";
import StarterPage from "./pages/starter/StarterPage.vue";
import StarterNavbar from "./layout/StarterNavbar.vue";
import StarterFooter from "./layout/StarterFooter.vue";

import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import LearnMore from "./pages/LearnMore"
import GetQuote from "./pages/GetQuote"
import Contact from "./pages/Contact"
import { start } from "pretty-error";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      components: { default: Home, header: StarterNavbar, footer: StarterFooter },
      props: {}
    },
    {
      path: "/about",
      name: "about",
      components: { default: AboutUs, header: StarterNavbar, footer: StarterFooter },
      props: {}
    },
    {
      path: "/learn",
      name: "learn",
      components: { default: LearnMore, header: StarterNavbar, footer: StarterFooter },
      props: {}
    },
    {
      path: "/quote",
      name: "quote",
      components: { default: GetQuote, header: StarterNavbar, footer: StarterFooter },
      props: {}
    },
    {
      path: "/contact",
      name: "contact",
      components: { default: Contact, header: StarterNavbar, footer: StarterFooter },
      props: {}
    }
  ],
  //test push
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  },
});
