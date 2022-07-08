require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Deve retornar o nome do personagem ao receber um id valido ', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman');
  });
  it('Deve retorna o erro "You must provide an url" ao executar a função sem parâmetro', async () => {
    const failRequest = await fetchCharacter();
    await expect(failRequest).toEqual((new Error('You must provide an url')))
  });
  it('Deve retornar o erro "Invalid id" ao receber um id invalido', async () => {
    const failRequest = await fetchCharacter('');
    expect(failRequest).toBe('Invalid id');
  })
});
