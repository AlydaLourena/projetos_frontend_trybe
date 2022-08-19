const fetchProducts = async (computador) => {
   try {
  const apiUrl = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${computador}`);
  const result = await apiUrl.json();
    return result;
   } catch (error) {
     return error;
   }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
