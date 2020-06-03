<template>
  <div class="LoginPage">
    <div class="row marginer">
      <div class="col l12 m12 s12"></div>
    </div>
    <div class="row">
      <div class="col l12 m12 s12">
        <div class="col offset-l4 offset-m3 offset-s2 l4 m6 s8">
          <div class="loginBox card-panel z-depth-1">
            <div class="row">
              <div class="col l12 m12 s12 center">
                <img
                  class="responsive-img circle logoImg center"
                  src="@/assets/footballpitch.png"
                  alt="football pitch"
                />
              </div>
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">person</i>
                    <input id="email" type="text" class="validate white-text" />
                    <label for="email">Email</label>
                  </div>
                  <div class="input-field col s12">
                    <i class="material-icons prefix">blur_on</i>
                    <input
                      v-model="loginForm.password"
                      id="password"
                      type="tel"
                      class="validate white-text"
                    />
                    <label for="password">Pass</label>
                  </div>
                  <div class="input-field col s12 center">
                    <a class="waves-effect waves-light btn-small" @click="login">
                      <i class="material-icons left">bubble_chart</i>Log in
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.loginBox {
  background-color: $bg-box;
  color: white;
}
.logoImg {
  max-height: 250px;
}
.marginer {
  height: 10vh;
}
body {
  background-color: $bg-color;
}
</style>

<script>
import router from "vue-router";
export default {
  data: function() {
    return {
      loginForm: {
        email: "",
        password: ""
      }
    };
  },
  name: "Login",
  methods: {
    login: function() {
      this.$store.commit("setActiveUser", { test: "aa" });
      this.$router.push("/");
    }
  }
};
</script>
