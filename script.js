async function init() {
  const cards = await fetch("cards.json").then(r => r.json());
  const yesno = await fetch("yesno.json").then(r => r.json());

  const card = cards[0]; // 仮に1枚目
  const result = yesno[card.yesnoType];

  console.log(card.name);
  console.log(result.meaning);
}

init();