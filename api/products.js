const SLEEP_TIME = 200;
function sleep(fn) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fn());
    }, SLEEP_TIME);
  });
}

const dataService = { // TODO это всё нужно сократить до одного массива products
  getProductsList() {
    let products = [
      {
        id: 'potato',
        title: 'Картошка',
        price: 49.99,
        image: '/products/potato.jpg',
      },
      {
        id: 'carrot',
        title: 'Морковка',
        price: 55.00,
        image: '/products/carrot.jpg',
      },
      {
        id: 'cabbage',
        title: 'Капуста',
        price: 28.50,
        image: '/products/cabbage.jpg',
      }
    ];
    return products;
  },
};

const productsApi = {
  getProductsList() {
    return sleep(dataService.getProductsList);
  },
};
export default productsApi; /* TODO нужно сразу экспортировать функцию getProductsList и избавиться от лишнего*/
/* саму папку с api перенести в src/utils/api и не писать там такую логику)
я бы через localStorage лучше бы сделал
в таких api должно быть что-то такое
export const addGroupKey = async (payload) => {
  await $nuxt.$axios.$post('/v1/translations/keys', payload);
};

export const addLanguage = async ({ language }) => {
  await $nuxt.$axios.$post('/v1/translations/languages', { language });
};

export const addTranslations = async (payload) => {
  await $nuxt.$axios.$post('/v1/translations', payload);
};

export const editTranslations = async (payload) => {
  await $nuxt.$axios.$put('/v1/translations', payload);
};
*/

