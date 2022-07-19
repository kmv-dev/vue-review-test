<template>
  <div class="cart-list">
    <div v-for="item in spisok_dlya_rendera"><!-- TODO имена методов функций переменных должны быть в кемелКейс spisokDlyaRendera + на английском языке renderList
    в связке v-for нужно использовать уникальный :key для предотвращения непредсказуймого поведения
    -->
      {{ item }}
    </div> <!-- TODO добавить class card__item-->
  </div>
</template>

<script>
export default {
  props: {
    cart: Array,
  },
  computed: {
      spisok_dlya_rendera() { // TODO лишнее вычисляемое свойство. Можно просто использовать cart
          return this.cart;
      },
  },
};
</script>

<style>

</style>
