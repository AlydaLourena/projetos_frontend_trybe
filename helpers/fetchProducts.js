const fetchProducts = (computador) => {
  const apiUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
