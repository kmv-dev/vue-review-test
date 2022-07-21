<template>
  <div class="cart">
    <div
        v-for="item in getCartData"
        :key="item.title"
        class="cart__item"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getCartData: 'getCart'
    })
  }
};
</script>
