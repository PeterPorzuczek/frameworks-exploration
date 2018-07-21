<template>
  <div class='bar'>
    <div class='bar__content container clear-fix row'>
      <div class='bar__content--left col row'>
        <div class='logo'>
          <a class='logo__full' href='#'>
            <img  class='img-fluid'
                  src='../assets/images/logo.svg'
                  alt='Logo'>
          </a>
          <a class='logo__mobile' href='#'>
            <img  class='img-responsive'
                  src='../assets/images/logo.svg'
                  alt='Logo'>
          </a>
        </div>
      </div>
      <div class='bar__content--center col row'>
        <search />
      </div>
      <div class='bar__content--right col row'>
        <cart :items='items' />
      </div>
    </div>
  </div>
</template>

<script>
import Search from './Search';
import Cart from './Cart';

export default {
  name: 'MainBar',
  data() {
    return {
      items: [
        { id: 1, title: 'Zigzag Watch', color: 'Blue' },
        { id: 2, title: 'Zigzag Phone', color: 'Red' },
        { id: 3, title: 'Zigzag Watch', color: 'Green' },
      ],
    };
  },
  components: {
    Cart,
    Search,
  },
};
</script>

<style scoped>
.bar {
  background-color: #ffffff;
  padding: 25px 0;
}
.logo {
  float: left;
  height: 50px;
  padding: 5px 0;
  margin-right: 75px;
  width: 200px;
}
.logo .logo__full {
  visibility: visible;
}
.logo .logo__mobile {
  visibility: hidden;
}
@media (max-width: 767px) {
  .logo img {
    width: 50%;
  }
  .logo .logo__full {
    visibility: hidden;
  }
  .logo .logo__mobile {
    visibility: visible;
  }
}
</style>
