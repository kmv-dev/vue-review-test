import api from '../../api/products.js';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({ //TODO разбить стор на модули типа user, admin, auth
  state: {
  },
  mutations: {
  },
  actions: {
    getProductsList(ctx, data) { // TODO удалить аргументы которые не принимает функция
      return api.getProductsList();
    },
  },
  modules: {
  }
})
