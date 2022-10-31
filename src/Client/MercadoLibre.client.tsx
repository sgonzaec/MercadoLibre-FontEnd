const MercadoLibre = {
  getProductList: async (query: string, callback: any) => {
    try {
      await fetch(`http://localhost:8080/search/${query}`, {
        method: "GET",
      })
        .then((response: any) => {
          if (response.status >= 200 || response.status < 300) {
            return response.json();
          } else {
            throw new Error("Error al consultar la lista de productos");
          }
        })
        .then((data: any) => {
          callback(data);
        });
    } catch (error) {
      console.error(error);
    }
  },
  getProductDetail: async (id: string, callback: any) => {
    try {
      await fetch(`http://localhost:8080/items/${id}`, {
        method: "GET",
      })
        .then((response: any) => {
          if (response.status >= 200 || response.status < 300) {
            return response.json();
          } else {
            throw new Error("Error al consultar el detalle del producto");
          }
        })
        .then((data: any) => {
          callback(data);
        });
    } catch (error) {
      console.error(error);
    }
  },
  getProductDescription: async (id: string, callback: any) => {
    try {
      await fetch(`http://localhost:8080/items/${id}/description`, {
        method: "GET",
      })
        .then((response: any) => {
          if (response.status >= 200 || response.status < 300) {
            return response.json();
          } else {
            throw new Error("Error al consultar la descripción del producto");
          }
        })
        .then((data: any) => {
          callback(data);
        });
    } catch (error) {
      console.error(error);
    }
  },
};

export default MercadoLibre;
