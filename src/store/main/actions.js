export default {
 addProductsToCart({ commit }, payload) {
     commit('setCartData', payload)
 }
};
