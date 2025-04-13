async function loadCardData() {
    const response = await fetch('./assets/data/data.json');
    const data = await response.json();
  
    const cardBoxes = document.querySelectorAll('.card-box');
  
    data.cards.forEach((item, index) => {
      const title = cardBoxes[index].querySelector('.card-text');
      const value = cardBoxes[index].querySelector('.card-title');
  
      title.textContent = item.title;
      value.textContent = item.value;
    });
}
  
  loadCardData();
  