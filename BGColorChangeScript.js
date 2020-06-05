const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

colorBtn.addEventListener('click',changeColor);

function changeColor (){
   // bodyBcg.style.backgroundColor = colors[1];
   let random = Math.floor(Math.random()*colors.length)
   bodyBcg.style.backgroundColor = colors[random];
}