const p = document.querySelector('h2');
const box = document.querySelector('.x');
const button = document.querySelector('button');

p.addEventListener('click', () => {
  p.innerHTML = 'Have a Good Time!';
});
button.addEventListener('click', () => {
  if(box.style.display == 'none'){
  box.style.display= 'block';
}else{
  box.style.display='none';
}
});
