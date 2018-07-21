<template>
  <div class='bar'>
    <div class='bar__content container clear-fix row'>
      <div class='bar__content--left col row'>
      <div class='language'>
        <div class='menu__dropdown'>
          <a data-toggle='dropdown' href='#'>{{ languages[1] }}</a>
          <span class='dropdown-toggle'></span>
          <ul class='menu__dropdown--list'>
            <li v-for='language in languages' :key='language'>{{ language }}</li>
          </ul>
        </div>
      </div>
      </div>
      <div class='bar__content--right row'>
        <div class='options ml-auto row'>
          <div class='options__container col' v-for='option in options' :key='option'>
            <a href='#'>{{ option }}</a>
          </div>
        </div>
        <div class='currency ml-auto'>
          <select class='currency__select'>
            <option v-for='currency in currencies' :key='currency'>{{ currency }}</option>
          </select>
          <span class='currency__span--toggle'></span>
        </div>
        <div class='help ml-auto'>
          <button class='help__button'>Customer Center</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SupportBar',
  data() {
    return {
      options: ['+0123 45 67 89', 'support@cart.com', 'Live Chat'],
      languages: ['FIN', 'ENG'],
      currencies: ['USD', 'AUD', 'GBP', 'EUR'],
    };
  },
};
</script>

<style scoped>
.bar {
  background-color: #f1f1f1;
}
@media (max-width: 767px) {
  .bar {
      display: none;
  }
}
.options {
  min-width: 400px;
}
.options__container {
  padding-right: 5px;
}
.help {
  position: relative;
}
.help .help__button {
  color: #ffffff;
  border-color: #1e2f5a;
  background-color: #1e2f5a;
  padding: 10px 30px;
}
.help .help__button:hover {
  color: #1e2f5a;
  background-color: #ffffff;
}
.currency {
  position: relative;
  display: inline-block;
}
.currency .currency__select {
  color: #858585;
  position: relative;
  padding: 0px 5px;
}
.currency__span--toggle {
  position: absolute;
  top: 8px;
  right: 25px;
  vertical-align: middle;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #858585;
}
</style>
