<template>
  <div class="home">
    <button @click="logout">logout</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
    logout: function() {
      this.$store.dispatch("clearUserData");
      this.$router.push("/login");
    }
  }
};
</script>
