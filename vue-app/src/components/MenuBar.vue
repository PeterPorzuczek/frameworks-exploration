<template>
  <div class='bar'>
    <div class='bar__content container clear-fix'>
      <nav class="menu navbar-toggleable-md">

        <button class="navbar-toggler navbar-toggler-right collapsed" type="button"
          data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="navbarNav" >
          <ul class="navbar-nav">
            <li class="menu__content--item nav-item" >
              <router-link to='/main' class="menu__content--link nav-link"> Main </router-link>
            </li>
            <li class="menu__content--item nav-item" >
              <router-link to='/about' class="menu__content--link nav-link"> About </router-link>
            </li>
          </ul>
        </div>

      </nav>
    </div>
</div>
</template>

<script>
export default {
  name: 'MenuBar',
};
</script>

<style scoped>
.bar {
  background-color: #1e2f5a;
}
.navbar-toggleable-md .navbar-nav .nav-link,
.navbar .navbar-nav>li>a {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  padding: 20px;
  margin-right: 1px;
  text-transform: uppercase;
  background-color: #1e2f5a;
}
.navbar-nav li a:hover,
.navbar-nav>li>a:focus,
.navbar-nav>li>a:hover,
.navbar-nav>.active>a,
.navbar-nav>.active>a:focus,
.navbar-nav>.active>a:hover,
.tr-dropdown-menu li.active>a {
  color: #1e2f5a;
  background-color: #fff;
}
ul.navbar-nav>li.nav-item>a.nav-link.active {
  color: #1e2f5a;
  background-color: #fff;
}
.navbar-toggle,
.navbar-toggle:focus,
.navbar-toggle:hover {
  border-color: #fff;
  background-color: transparent;
}
.navbar-toggle .icon-bar {
  background-color: #fff;
}
.navbar-collapse {
  padding: 0;
}
.navbar-toggler-right {
  top: -42px;
  cursor: pointer;
  padding: 3px 6px;
  border: 1px solid #fff;
}
.navbar-toggler-icon {
  position: relative;
  text-align: center;
}
.navbar-toggler-icon:before {
  position: absolute;
  top: 0;
  left: 2px;
  color: #ffffff;
  content: "\2630";
  font-size: 25px;
}
@media (max-width: 575px) {
  .navbar-collapse {
    margin:0;
  }
}
</style>
