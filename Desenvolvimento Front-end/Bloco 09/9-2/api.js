const section = document.querySelector('.list-cripto');

const creatListItem = (obj) => {
  const divCard = document.createElement('div');
  const imgCard = document.createElement('img');
  const divBody = document.createElement('div');
  const cardTitle = document.createElement('h5');
  const listGroup = document.createElement('ul');
  const listItem = document.createElement('h5');
  const cardLink = document.createElement('a');
  const listItem1 = document.createElement('li');

  divCard.classList.add("card");
  divBody.classList.add("card-body");
  cardTitle.classList.add("card-title");
  imgCard.classList.add("card-img-top");
  listGroup.classList.add("list-group", "list-group-flush");
  listItem.classList.add("list-group-item");
  listItem1.classList.add("list-group-item");
  cardLink.classList.add("card-link");

  imgCard.src = `img/${obj.id}.png`;
  cardTitle.innerHTML = obj.name;
  listItem.innerHTML = `Rank: ${obj.rank}`;
  listItem1.innerHTML = `Price: ${obj.priceUsd}`
  cardLink.href = `${obj.explorer}`
  cardLink.innerHTML = 'More Information';

  divCard.appendChild(cardTitle);
  divCard.appendChild(imgCard);
  divCard.appendChild(listGroup);
  listGroup.appendChild(listItem);
  listGroup.appendChild(listItem1);
  listGroup.appendChild(cardLink);
  section.appendChild(divCard);


}

const getCripto = async () => {
  const url = `https://api.coincap.io/v2/assets`;
  try {
  const response = await fetch(url);
  const data = await response.json();
  const cripto = data.data
  const list = cripto.filter((e) => e.rank <= 16);
  list.forEach((e) => {
    const { id, name, priceUsd, symbol, explorer, rank  } = e;
    const result = {
      id,
      name,
      priceUsd,
      symbol,
      explorer,
      rank,
    }; creatListItem(result);
  });
  } catch (error) {
    alert(`Algo deu errado :( \n${error}`);
  }
}
window.onload = () => {
  getCripto();
}