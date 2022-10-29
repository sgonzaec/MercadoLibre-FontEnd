const MercadoLibre = {
  getProductList: (query: string) => {
    return fetch(`http://localhost:8080/search/${query}`, {
      method: "GET",
    }).then((e) => e.json());
  },
  getProductDetail: (id: string) => {
    return fetch(`http://localhost:8080/items/${id}`, {
      method: "GET",
    }).then((e) => e.json());
  },
  getProductDescription: (id: string) => {
    return fetch(`http://localhost:8080/items/${id}/description`, {
      method: "GET",
    }).then((e) => e.json());
  }
};

export default MercadoLibre;
