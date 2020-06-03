<template>
  <div class>
    <nav>
      <div class="nav-wrapper green">
        <a href="#!" class="brand-logo">Logo</a>
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
        </ul>
      </div>
    </nav>

    <ul class="sidenav green darken-3" id="mobile-navbar">
      <div class="centerMenu">
        <li>
          <router-link class="white-text" to="/about2">
            <i class="material-icons white-text">device_hub</i>My Team
          </router-link>
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
      </div>
    </ul>
  </div>
</template>

<script>
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
});
export default {};
</script>

<style lang="scss">
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