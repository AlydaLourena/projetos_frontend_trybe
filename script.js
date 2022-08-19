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

const addCarItems = document.querySelector('.cart__items');
const sectionItems = document.querySelector('.items');
const itensCart = await fetchItem('$ItemID');

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

async function createItemsCart() {
  const carAddItem = createCartItemElement(itensCart);
  addCarItems.appendChild(carAddItem);
}


const itemReturn = async () => {
  const products = await fetchProducts('computador');
  const productsData = products.results;
  productsData.forEach((element) => {
    const items = document.querySelector('.items');
    const item = createProductItemElement(
      { sku: element.id, name: element.title, image: element.thumbnail },
    );
    items.appendChild(item);
  });
};

window.onload = async () => {
 await itemReturn();
};
