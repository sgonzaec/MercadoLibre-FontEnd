export default {
  getProductList: (query: string) => {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`, {
      method: "GET",
    }).then((e) => e.json());
  },
};
