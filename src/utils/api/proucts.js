export const addProductsToLocalStorage = (localStorageKey, payload) => {
    const newValue = JSON.stringify(payload);
    localStorage.setItem(localStorageKey, newValue);
}

export const getCurrentProductsList = (localStorageKey) => {
    const productsList = localStorage.getItem(localStorageKey);
    return JSON.parse(productsList);
}
