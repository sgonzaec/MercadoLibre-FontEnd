const Format = {
  Price: (price: number, currency_id: string) => {
    return price?.toLocaleString("es-AR", {
      style: "currency",
      currency: currency_id,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  },
};

export default Format;