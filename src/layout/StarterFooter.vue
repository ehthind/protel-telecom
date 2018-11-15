<template>
    <footer class="footer"
            :data-background-color="backgroundColor">
        <div class="container">
            
            <nav>
                <ul>
                    <li>
                        <router-link v-popover:popover1 class="navbar-brand text-center" to="/">
                        Home
                        </router-link>
                    </li>
                    <li>
                        <router-link v-popover:popover1 class="navbar-brand text-center" to="/about">
                        about
                        </router-link>
                    </li>
                    <li>                    
                        <router-link v-popover:popover1 class="navbar-brand text-center" to="/learn">
                        learn
                        </router-link>
                    </li>
                    <li>
                    <router-link v-popover:popover1 class="navbar-brand text-center" to="/quote">
                        quote
                        </router-link>
                    </li>
                    <li>                    
                        <router-link v-popover:popover1 class="navbar-brand text-center" to="/contact">
                        contact
                        </router-link>
                    </li>
                    
                    


                </ul>
            </nav>
        </div>
    </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>
</style>
