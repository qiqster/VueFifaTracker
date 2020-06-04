<template>
  <div class>
    <nav>
      <div class="nav-wrapper green">
        <router-link to="/" class="brand-logo">
          <img
            class="responsive-img circle imgLogo"
            src="@/assets/footballpitch.png"
            alt="football pitch"
          />
          <span style="float:right">FifaTracker</span>
        </router-link>
        <a href="#" data-target="mobile-navbar" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          <li>
            <router-link class="white-text" to="/about2">
              <i class="material-icons left white-text">device_hub</i>My Team
            </router-link>
          </li>
          <li>
            <router-link class="white-text" to="/about2">
              <i class="material-icons left white-text">date_range</i>Weekend League
            </router-link>
          </li>
          <li>
            <router-link class="white-text" to="/about2">
              <i class="material-icons left white-text">show_chart</i>Invests
            </router-link>
          </li>
          <li>
            <router-link class="white-text" to="/about2">
              <i class="material-icons left white-text">insert_chart</i>Stats
            </router-link>
          </li>
          <li>
            <router-link class="white-text" to="/about2">
              <i class="material-icons left white-text">settings</i>Settings
            </router-link>
          </li>
          <li>
            <a @click="logout" class="white-text">
              <i class="material-icons left white-text">exit_to_app</i> Off
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav sidenav-close green darken-3" id="mobile-navbar">
      <div class="centerMenu">
        <li>
          <a>
            <router-link class="white-text" to="/about2">
              <i class="material-icons white-text">device_hub</i>My Team
            </router-link>
          </a>
        </li>
        <li>
          <router-link class="white-text" to="/about2">
            <i class="material-icons white-text">date_range</i>Weekend League
          </router-link>
        </li>
        <li>
          <router-link class="white-text" to="/about2">
            <i class="material-icons white-text">show_chart</i>Invests
          </router-link>
        </li>
        <li>
          <router-link class="white-text" to="/about2">
            <i class="material-icons white-text">insert_chart</i>Stats
          </router-link>
        </li>
        <li>
          <router-link class="white-text" to="/about2">
            <i class="material-icons white-text">settings</i>Settings
          </router-link>
        </li>
        <li>
          <router-link class="white-text" to="/about2">
            <i class="material-icons white-text">exit_to_app</i>Logout
          </router-link>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
});
export default {
  methods: {
    logout: function() {
      this.$store.dispatch("clearUserData");
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss">
.imgLogo {
  max-height: 60px;
}
.loginBox {
  background-color: $bg-box;
  color: white;
}
.centerMenu {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>