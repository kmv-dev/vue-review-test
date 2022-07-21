<template>
  <div class="header">
    <h3>Товаров в корзине на: {{ cartPrice.toFixed(2) }} {{ currency }}</h3>
  </div>
</template>

<script>
import { CURRENCIES } from "@/utils/constants/currencies";
import {mapGetters} from "vuex";
export default {
  name: 'Header',
  data() {
    return {
      currency: CURRENCIES.default,
    };
  },
  computed: {
    ...mapGetters({
      getCartData: 'getCart'
    }),
    cartPrice(){
      return this.getCartData.reduce(function (acc, item) {
        return acc + (item.price * (item.amount));
      }, 0);
    },
  },
}
</script>

<style scoped>
.header {
  padding: 10px;
  background: #e5e5e5;
}
</style>

