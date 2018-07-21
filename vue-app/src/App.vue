<template>
  <div class="main">
    <support-bar></support-bar>
    <main-bar></main-bar>
    <menu-bar></menu-bar>
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
import SupportBar from './components/SupportBar';
import MainBar from './components/MainBar';
import MenuBar from './components/MenuBar';
import TopSelling from './components/TopSelling';
import Foot from './components/Foot';

export default {
  name: 'App',
  components: {
    SupportBar,
    MainBar,
    MenuBar,
    TopSelling,
    Foot,
  },
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap";
@import "./assets/fonts/open-sans";
@import "./css/main";
</style>
