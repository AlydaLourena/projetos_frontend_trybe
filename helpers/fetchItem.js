const fetchItem = ($ItemID) => {
  const fetchUrl = `https://api.mercadolibre.com/items/${$ItemID}`;

  const response = await fetch(fetchUrl)
    .then((result) => result.json())
    .then((data) => data);

  return response;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
