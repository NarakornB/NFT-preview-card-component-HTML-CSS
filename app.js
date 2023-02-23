const myCards = document.querySelectorAll('.card-img, .card-topic, .card-name');

const myView = document.createElement('div');
const myViewImg = document.createElement('img');
myViewImg.className = 'overlay'
myViewImg.setAttribute('src', 'images/icon-view.svg');

myView.appendChild(myViewImg);
console.log(myView);

const myCardimg = document.querySelector('.card-img');
console.log(myCardimg);



myCards.forEach((card) => {
  const myImg = card.querySelector('img');
  const myText = card.querySelector('.card-topic p');
  const myCardName = card.querySelector('.card-name p');

//   console.log(myImg);
  
  card.addEventListener('mouseover', () => {
    myImg.style.filter = 'hue-rotate(-20deg) brightness(2)';
    myCardimg.appendChild(myViewImg);
    
  });
  card.addEventListener('mouseout', () => {
    myImg.style.filter = 'hue-rotate(0deg) ';
    myCardimg.removeChild(myCardimg.lastChild);
    
  });
  card.addEventListener('mouseover', () => {
    card.style.cursor = 'pointer';
  });
  card.addEventListener('mouseover', () => {
    myText.style.color ='#2CF7F3';
  })
  card.addEventListener('mouseover', () => {
    myCardName.style.color ='#2CF7F3';
  })
  card.addEventListener('mouseout', () => {
    myText.style.color ='';
  })
  card.addEventListener('mouseout', () => {
    myCardName.style.color ='';
  })
});
