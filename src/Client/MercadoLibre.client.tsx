export default {
  getProductList: (query: string) => {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`, {
      method: "GET",
    }).then((e) => e.json());
  },
  getProductDetail: (id: string) => {
    return fetch(`https://api.mercadolibre.com/items/${id}`, {
      method: "GET",
    }).then((e) => e.json());
  },
  getProductDescription: (id: string) => {
    return fetch(`https://api.mercadolibre.com/items/${id}/description`, {
      method: "GET",
    }).then((e) => e.json());
  }
};
