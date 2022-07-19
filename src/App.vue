<template>
  <div id="app">
    <Header :cart="cart" :currency="currency"></Header> <!-- TODO два и более атрибута нужно переносить на новую троку для лучшей читаймости-->
    <List :currency="currency"/>
    <Cart :cart="cart"/> <!-- TODO Имена компонентов нужно называть мимимум из 2х слов. TheHeader ProductList ProductCart-->
  </div>
</template>

<script>
import Header from './components/Header.vue';
import List from './components/List.vue';
import Cart from './components/Cart.vue';

export default {
  name: 'App',
  data() {
    return {
      cart: [],
      currency: 'VGTB', // TODO такие вещи нужно выносить в utils/constants/currencies.js и оттуда уже импортировать где нужно
    };
  },
  components: {
    Header,
    List,
    Cart,
  },
}
</script>

<style>
* { /* TODO вынести в отдельный  файл reset.scss */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app { /* TODO вынести в отдельный  файл base.scss */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
