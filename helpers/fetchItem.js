const fetchItem = ($ItemID) => {
  const fetchUrl = `https://api.mercadolibre.com/items/${$ItemID}`;

  const response = fetch(fetchUrl)
    .then((result) => result.json())
    .then((data) => data);

  return response;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
