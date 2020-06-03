<template>
  <div class>
    <Navbar />

    <div class="home row">
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";
export default {
  name: "Home",
  components: {
    Navbar
  },
  methods: {
    // logout: function() {
    //   this.$store.dispatch("clearUserData");
    //   this.$router.push("/login");
    // }
  }
};
</script>
<style lang="scss">
.home {
  padding: 10px;
}
</style>
