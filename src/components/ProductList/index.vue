<template>
  <div class="products card">
    <div class="card"
         v-for="(item,index) in products"
         :key="item.title"
    >
      <h6 class="card__title">{{ item.title }}</h6>
      <img
          class="card__image"
          :src="item.image"
          alt="image"
      >
      <p class="card__price">Цена: {{ item.price }} {{ currency }}</p>
      <input
          class="card__input"
          :name="item.id"
          v-model="amount[index]"
          placeholder="Кг"
      >
      <button
          class="card__btn"
          @click="addToCart(item, index)"
      >
        В корзину
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { getCurrentProductsList } from '@/utils/api/proucts'
import { CURRENCIES } from "@/utils/constants/currencies";
export default {
  data() {
    return {
      products: [],
      amount: [],
      currency: CURRENCIES.default,
    };
  },
  async mounted() {
    await this.getProducts();
    this.updateProducts();
  },
  methods: {
    ...mapActions({
      addToCartData: 'addProductsToCart'
    }),
    getProducts() {
      this.products = getCurrentProductsList('productsList');
    },
    updateProducts() {
      setInterval(() => {
        this.getProducts();
      }, 2000)
    },
    addToCart(item, index) {
      const payload = {
        amount: this.amount[index],
        price: item.price,
        title: item.title,
      }
      if(this.amount[index] > 0) {
        this.addToCartData(payload);
      }
      this.amount[index] = '';
    },
  }
};
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 10px;
  .card {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid gray;
    &__price {
      margin-bottom: 10px;
    }
    &__input {
      width: 100%;
      margin-bottom: 10px;
    }
    &__image {
      width: 100%;
    }
    &__btn {
      padding: 2px 10px;
      background: #64b5f6;
      box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
    }
  }
}
@media (max-width: 840px) {
  .products {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 420px) {
  .products {
    grid-template-columns: 1fr;
  }
}
</style>
