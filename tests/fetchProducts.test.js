require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('testa se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toEqual('function');
  })
  it('testa se fetch foi chamada em fetchProducts com o argumento computador', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  })
  it('testa se fetch utiliza o endpoint indicado', async () => {
    await fetchProducts('computador')
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })
  it('testa se fetchProducts com o argumento computador, retornada uma estrutura de dados igual ao objeto computadorSearch',
    async () => {
    const fetchResponse = await fetchProducts('computador');
    expect(fetchResponse).toEqual(computadorSearch);
  })
  it('testa se, ao chamar a função fetchProducts sem argumento, retorna uma mensagem de erro ', 
    async () => {
    const fetchError = await fetchProducts();
    expect(fetchError).toEqual(new Error('You must provide an url'));
  })
});
