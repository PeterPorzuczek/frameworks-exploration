<template>
  <div class='section padding-top-60 padding-bottom-30'>
      <div class='section__content container'>
        <div class='section__content--heading'>
          <h5>Top Selling of the Week</h5>
        </div>
        <div class='section__content--column'>
          <product v-for='item in items'
                    :key='item.id'
                    :imageUrl='item.imageUrl'
                    :subtitle='item.subtitle'
                    :price='item.price'
                    :title='item.title' />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Product from './Product';

export default {
  name: 'TopSelling',
  data() {
    return {
      items: [],
    };
  },
  created() {
    axios.get('https://api.jsonbin.io/b/5b537f484d5ea95c8ba7cf73')
      .then((response) => {
        this.items = response.data.items;
      }).catch((e) => {
        this.errors.push(e);
      });
  },
  components: {
    Product,
  },
};
</script>

<style scoped>
.section {
  background: #f8f8f8;
  top: 20px;
  position: relative;
  width: 100%;
  overflow: hidden;
}
.section__content--heading {
  margin-bottom: 40px;
}
@media(min-width:768px) and (max-width:991px) {
  .section {
    top: 80px;
  }
}
@media(max-width:767px) {
  .section {
    top: 100px;
  }
}
</style>
