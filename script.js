// let elInput = document.querySelector('.input');
// let elButton = document.querySelector('.button');
// let elResult = document.querySelector('.result');

// elButton.addEventListener('click', function(evt){
//   if (elInput.value === '') return;
//   createDeleteElement(elInput.value);
//   elInput.value = '';
// })

// function createDeleteElement(value) {
//   const li = document.createElement('li');
//   const button = document.createElement('button');

//   li.textContent = value;
//   button.className = 'btn btn-primary';
//   li.className = 'd-flex justify-content-between';
//   button.textContent = 'remove'
  
//   btn.addEventListener('click', function(event){
//     elResult.removeChild(li)
//   })

// li.addEventListener('click', function(evt){
//   li.classList.toggle('li-active')
// })

//   elResult.appendChild(li);
//   li.appendChild(btn);

// }













const elInput = document.querySelector('.input')
const elButton = document.querySelector('.button')
const elResult = document.querySelector('.result')

elButton.addEventListener('click', function(evt){
  if (elInput.value === '') return;
  createDeleteElement(elInput.value);
  elInput.value = '';
})

function createDeleteElement(value) {
  const li = document.createElement('li');
  const btn = document.createElement('button');
  
  li.textContent = value;
  btn.className = 'btn btn-primary';
  li.className = 'd-flex justify-content-between bg-danger form-control h3 flex-wrap';

  btn.textContent = 'Remove'

  btn.addEventListener('click', function(event){
    elResult.removeChild(li)
  })

  li.appendChild(btn)
  elResult.appendChild(li);

}