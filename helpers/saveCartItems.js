const saveCartItems = (itemsProd) => {
  localStorage.setItem('cartItems', itemsProd);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
