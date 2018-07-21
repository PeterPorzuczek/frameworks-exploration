<template>
  <div class='hello'>
    <img src='../assets/logo.png'>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li v-for='link in essentialLinks' :key='link.id'>
        <a href=link.href target='_blank'>{{ link.name }}</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li v-for='link in ecosystemLinks' :key='link.id'>
        <a href=link.href target='_blank'>{{ link.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      essentialLinks: [
        { id: 1, name: 'Core Docs', href: 'https://vuejs.org' },
        { id: 2, name: 'Forum', href: 'https://forum.vuejs.org' },
        { id: 3, name: 'Community Chat', href: 'https://chat.vuejs.org' },
        { id: 4, name: 'Twitter', href: 'https://twitter.com/vuejs' },
        { id: 5, name: 'Docs for This Template', href: 'http://vuejs-templates.github.io/webpack/' },
      ],
      ecosystemLinks: [
        { id: 6, name: 'vue-router', href: 'http://router.vuejs.org/' },
        { id: 7, name: 'vuex', href: 'http://vuex.vuejs.org/' },
        { id: 8, name: 'vue-loader', href: 'http://vue-loader.vuejs.org/' },
        { id: 9, name: 'awesome-vue', href: 'https://github.com/vuejs/awesome-vue' },
      ],
    };
  },
};
</script>

<style scoped>
.hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 50px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
