<template>
  <div class="product-list"> <!-- TODO card нужно вынести в отдельный компонент, классы по БЭМ card__title card__image -->
    <div class="card" v-for="product in products" :style="{width: cardsWidth + '%'}"> <!-- TODO писать инлайн стили плохо. Это все лишнее ниже оставил коммент в методе cardWidth -->
      <p class="card-title">{{ product.title }}</p>
      <img class="card-image" :src="product.image" alt="">
      <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>

      <div>
        <input type="number" ref="amount" :id="product.id"> <!-- TODO тут нужно использовать v-model и задать переменную amount в data -->
        <span>кг</span> <!-- TODO хорошей практикой считается писать классы под каждый тег -->
      </div>

      <button @click="addToCart(product)"> В корзину </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currency: String,
  },
  data() {
    return {
      products: [],
      width: window.innerWidth,
    };
  },
  computed: {
    cardsWidth() {
      let count = 1;
      if (this.width > 840) {
        count = 3;
      } else if ((this.width > 420 && this.width < 840)) {
        count = 2;
      }
      return 100 / count;
    }, /* TODO зачем нужно писать скрипт когда это реализуется средсвами css.
    такая реализация считается плохой практикой. Тут достаточно grid css и пару брейкпоинтов.
    */
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
    startPricesMonitoring() {
      setInterval(this.getList, 2000);
    },
    async getList() {
      this.products = await this.$store.dispatch('getProductsList'); // ...mapActions
      console.log('сделан запрос');
    },
    addToCart(product) {
      let amount = this.$refs.amount.find((input) => input.id === product.id).value;

      let data = {
        amount,
        price: product.price,
        title: product.title,
      };
      if(amount !== '') {
        this.$parent.cart.unshift(data); // добавлять данные в корзину нужно через store
        this.$refs.amount.find((input) => input.id === product.id).value = '';
      }
    },
  },
  created() {
    this.startPricesMonitoring();
    window.addEventListener('resize', this.updateWidth);
  }, // TODO created нужно переместить выше methods
};
</script>

<style> /* TODO lang="scss" scoped*/
  .product-list {
    padding: 10px;
  }

  .card {
    display: inline-block;
    width: 100%;
    border: 1px solid #908888;
    border-radius: 5px;
    text-align: center;
    padding: 10px;
  }
  .card-image {
    width: 100%;
  }
  button { /* TODO для селекторов хорошей практикой считается использовать класс*/
    padding: 5px;
    margin: 5px;
  }

</style>
