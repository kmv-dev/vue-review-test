<template>
  <div>
    <TheHeader />
    <ProductList />
    <TheCart />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import ProductList from './components/ProductList';
import TheCart from './components/TheCart';
import { addProductsToLocalStorage } from './utils/api/proucts'
import '@/assets/scss/main.scss'

export default {
  name: 'App',
  data() {
    return {
      products: [
        {
          id: 'potato',
          title: 'Картошка',
          price: 49.99,
          image: '/products/potato.jpg',
          amount: '',
        },
        {
          id: 'carrot',
          title: 'Морковка',
          price: 55.00,
          image: '/products/carrot.jpg',
          amount: '',
        },
        {
          id: 'cabbage',
          title: 'Капуста',
          price: 28.50,
          image: '/products/cabbage.jpg',
          amount: '',
        }
      ],
    };
  },
  components: {
    TheHeader,
    ProductList,
    TheCart,
  },
  mounted() {
    this.addProductList();
  },
  methods: {
    addProductList() {
      addProductsToLocalStorage('productsList', this.products)
    },
  }
}
</script>
