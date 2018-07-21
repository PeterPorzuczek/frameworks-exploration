<template>
  <div class='cart ml-auto'>
    <ul class='cart__header'>
      <li class='cart__header--title'><h5>Cart</h5></li>
      <li class='menu__dropdown'>
        <span class='cart__header--number'>5</span>
        <div class='cart__content menu__dropdown--list'>
          <ul>
            <li class='item'  v-for='item in items' :key='item.id'>
              <div class='item__content'>
                <span class='item__content--image'>
                  <img  src='../assets/images/none.svg'
                      alt='Image'
                      class='img-fluid'>
                </span>
                <span class='item__content--title'>{{item.title}}</span>
                <span class='item__content--color'>{{item.color}}</span>
                <span class='item__content--price'><del>$560</del>$299</span>
              </div>
            </li>
          </ul>
          <div class='cart__content--total-price'>
              <span><strong>Total Price: </strong>$598.00</span>
          </div>
          <div class='cart__content--action text-center p-1 row'>
              <a class='btn btn-primary col' href='#'>View Cart</a>
              <a class='btn btn-primary col' href='#'>Checkout</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    items: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.cart .cart__header .cart__header--title {
  float: left;
  margin-right: 20px;
  position: relative;
}
.cart .cart__header--number {
  position: absolute;
  top: -10px;
  right: -10px;
  color: #fff;
  display: inline-block;
  padding: 7px;
  font-size: 12px;
  border-radius: 100%;
  line-height: 8px;
  background-color: #ea2e49;
}
.item {
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid #ddd;
  line-height: 25px;
}
.item__content {
  margin-bottom: 0;
  padding: 0;
}

.item .item__content  .item__content--image {
  float: left;
  width: 100px;
  border-radius: 4px;
  padding: 5px;
}
.item .item__content  .item__content--title {
  margin-top: 20px;
}
.cart__content {
  min-width: 270px;
}
.cart__content .cart__content--total-price {
  margin: 25px 0 10px;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
}
.btn.btn-primary {
  font-size: 12px;
  padding: 10px 15px;
  margin: 10px;
}
</style>
