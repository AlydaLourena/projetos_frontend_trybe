require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testa se fetchItem é uma função', () =>{
    expect(typeof(fetchItem)).toBe('function');
  });
  it('testa se se fetch foi chamana na função fetchItem com o argumento indicado', async () => {
   await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled();
  });
  it('testa se,  ao chamar a função fetchItem com o argumento indicado,a função fetch utiliza o endpoint', () => {
    fetchItem('MLB1615760527');
    const endPoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toBeCalledWith(endPoint);
  });
  it('testa se fetchItem com o argumento do item indicado é igual ao objeto já importado no arquivo', () => {
    const objectItem = fetchItem('MLB1615760527');
    expect(typeof objectItem).toEqual(typeof item);
  });
  it('testa se fetchItem sem argumento, retorna uma mensagem de erro', (
    async () => {
      const fetchError = await fetchItem();
      expect(fetchError).toEqual(new Error('You must provide an url'));
  }));
});
