<template>
  <div class='product'>
    <article class='product__content'>
      <img class='product__content--img' :src=imageUrl alt=''>
      <span class='product__content--tag'>{{ subtitle }}</span>
      <a href='#' class='product__content--title'>{{ title }}</a>
      <p class='product__content--review'>
        <span class='margin-left-10'>5 Review(s)</span>
      </p>
      <div class='product__content--price'>{{ price }}</div>
      <a href='#' class='product__content--cart'></a>
    </article>
  </div>
</template>

<script>
import emptyImage from '@/assets/images/empty.svg';

export default {
  name: 'Product',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  props: {
    imageUrl: {
      type: String,
      default: emptyImage,
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    price: {
      type: String,
    },
  },
};
</script>

<style scoped>
.product .product__content {
  background: #fff;
  display: inline-block;
  position: relative;
  width: 100%;
  padding: 9px;
  font-size: 10px;
  border: 1px solid #e6e6e6;
}
.product .product__content .product__content--tag {
  color: #aaaaaa;
  display: inline-block;
  width: 100%;
  margin: 7px 0;
  font-size: 13px;
}
.product .product__content .product__content--title {
  color: #0168b8;
  font-size: 14px;
  display: inline-block;
  min-height: 40px;
}
.product .product__content .product__content--title:hover {
  color: #333;
}
.product .product__content .product__content--review {
  font-size: 12px;
  color: #f73232;
  margin-top: 5px;
}
.product .product__content .product__content--price {
  font-weight: bold;
  color: #333333;
  float: left;
}
.product .product__content .product__content--price span {
  color: #aaaaaa;
  text-decoration: line-through;
  font-weight: normal;
  margin-left: 10px;
}
.product .product__content img {
  width: 100%;
  max-width: 100%;
}
.product .product__content .product__content--cart {
  height: 42px;
  width: 42px;
  border-radius: 50%;
  background: #eeeeee;
  color: #888888 !important;
  float: right;
  text-align: center;
  line-height: 44px;
  margin-top: -15px;
}
.product .product__content .product__content--cart:hover {
  background: #0168b8;
  color: #fff !important;
}
.product .product__content .product__content--review i {
  color: #fecb00;
  font-size: 13px;
}
.section__content--column .product {
  float: left;
  width: 20%;
  margin-bottom: 30px;
  padding: 0 15px;
  position: relative;
  min-height: 341px;
}
@media(min-width:992px) and (max-width:1199px) {
  .section__content--column .product {
    width: 25%;
  }
}
@media(min-width:768px) and (max-width:991px) {
  .section__content--column .product {
    width: 33.333%;
  }
}
@media(max-width:767px) {
  .section__content--column .product {
    width: 43.333%;
  }
}
@media(max-width:540px) {
  .section__content--column .product {
    width: 100%;
  }
}
</style>
