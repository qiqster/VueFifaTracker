<template>
  <div class="home">
    <Navbar />
    <button @click="logout">logout</button>
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
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
    logout: function() {
      this.$store.dispatch("clearUserData");
      this.$router.push("/login");
    }
  }
};
</script>
