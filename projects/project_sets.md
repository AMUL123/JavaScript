#Project related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

```javascript
const buttons=document.querySelectorAll(".button");
const body=document.querySelector("body");

buttons.forEach(function (button){
  console.log(button)
  button.addEventListener('click',function(e){
    if(e.target.id==='grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id=== "blue"){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id=== "yellow"){
      body.style.backgroundColor=e.target.id;
    }
  })
})
```

## Project 2 (BMI)

```javascript
const form=document.querySelector('form');

form.addEventListener('submit', function(e){
e.preventDefault();

const height=parseInt(document.querySelector('#height').value);
const weight=parseInt(document.querySelector('#weight').value);
const results=document.querySelector('#results');

if(height === '' || height < 0 || isNaN(height)){
  results.innerHTML='Please give your height';
}else if(weight === '' || weight < 0 || isNaN(weight)){
  results.innerHTML='Please give your weight';
}else {
  const bmi= (weight/((height *height) / 10000).toFixed(2));

   let category= '';
if(bmi <18.5){
  category = 'Under Weight';
}else if(bmi >=18.5 && bmi <=24.9){
  category = 'Normal Weight';
}else if(bmi >=25 && 29.9){
  category='OverWeight';
}else {
  category='Obese'
}
  results.innerHTML= `<span>${bmi} - ${category}</span>`
}
}

})
```
## Project (Digital clock)

```javaScript
const clock=document.getElementById('clock');
//const clock=document.querySelector('#clock');

setInterval(function(){
  let date= new Date();
  clock.innerHTML= date.toLocaleTimeString();
},1000)
```

## Project (Unlimited Color Changer)

```JavaScript
const randomColor = function(){
  const hex = '0123456789ABCDEF';
  let color = '#'
  for(let i=0;i<6;i++){
   color += Math.floor(Math.random()*16);
  }
  return color;
}
let interval;
const startChange= function(){

if(!interval){interval=setInterval(changeBgColor,1000);
}

function changeBgColor(){
  document.body.style.backgroundColor=randomColor();
}
};

const stopChange= function(){
  clearInterval(interval)
  interval=null;
}

document.querySelector('#start').addEventListener('click', startChange);
document.querySelector('#stop').addEventListener('click', stopChange);
```