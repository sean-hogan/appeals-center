<template>
<navbar @scrollFix="scrollFix"></navbar>
  <router-view></router-view>
<Footer></Footer>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "ContactUs",
  components: {
    Navbar,
    Footer,
  },
  
  methods: {
    scrollFix: function(hashbang) {
      window.location.hash = hashbang;
    }
  },

  mounted() {
      setTimeout(() => this.scrollFix(this.$route.hash), 1);
    },
};
</script>

<style lang="scss">

</style>
