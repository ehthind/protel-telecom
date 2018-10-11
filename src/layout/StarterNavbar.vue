<template>
    <navbar position="fixed"
            type="primary"
            menu-classes="ml-auto"
            id = "navbar">
        <template slot-scope="{toggle, isToggled}">
            <div class="navbar-translate">
                <a href="#">Protel</a>
                <navbar-toggle-button @click.native="toggle"></navbar-toggle-button>
            </div>
        </template>
        <template slot="navbar-menu">
            <router-link v-popover:popover1 class="navbar-brand" to="/">
                Home
            </router-link>
             <router-link v-popover:popover1 class="navbar-brand" to="/about">
                about
            </router-link>
             <router-link v-popover:popover1 class="navbar-brand" to="/learn">
                learn
            </router-link>
             <router-link v-popover:popover1 class="navbar-brand" to="/quote">
                quote
            </router-link>
             <router-link v-popover:popover1 class="navbar-brand" to="/contact">
                contact
            </router-link>
            <drop-down tag="li" title="Sample Dropdown">
                <nav-link class="dropdown-item">
                    <i class="now-ui-icons shopping_box"></i> Headers
                </nav-link>
            </drop-down>

        </template>
    </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";

export default {
  name: "main-navbar",
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped>
#navbar {
  font-size: 20px;
}
</style>
