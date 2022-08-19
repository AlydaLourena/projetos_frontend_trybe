const itemProduct = document.querySelector('.items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const cartItemClickListener = (event) => {
  // Req. 5
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addCarItems = document.querySelector('.cart__items');
async function createItemsCart(item) {
  const itemsCart = await fetchItem(item);
  const carAddItem = createCartItemElement(itemsCart);
  addCarItems.appendChild(carAddItem);
}

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

section.appendChild(createCustomElement('span', 'item__sku', sku));
section.appendChild(createCustomElement('span', 'item__title', name));
section.appendChild(createProductImageElement(image));
const botaoAdd = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
botaoAdd.addEventListener('click', () => createItemsCart(sku));
section.appendChild(botaoAdd);
return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const itemReturn = async () => {
  const products = await fetchProducts('computador');
  const productsData = products.results;
  productsData.forEach((element) => {
    const { id: sku, title: name, thumbnail: image } = element;
    const createItem = createProductItemElement({ sku, name, image });
    itemProduct.appendChild(createItem);
  });
};

// Função Carregando do Req. 11
const loading = () => {
  const spanLoading = document.createElement('p');
  spanLoading.className = 'loading';
  spanLoading.innerHTML = 'loading...';
  itemProduct.appendChild(spanLoading);
};

  const emptyItems = document.getElementsByClassName('empty-cart')[0];
  emptyItems.addEventListener('click', () => {
    const carrinho = document.getElementsByClassName('cart__items')[0];
    carrinho.innerHTML = '';
  });

window.onload = async () => {
 loading();
 await itemReturn();
 const removeLoading = document.querySelector('.loading');
  itemProduct.removeChild(removeLoading);
};
