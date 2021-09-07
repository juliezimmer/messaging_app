"use strict"

// destructuring hash from window.location //
const { hash } = window.location;
// unencodes secret message and removes hash from URL //
const message = atob(hash.replace('#', ''));
// toggle visibility
if (message){
   // add 'hide'class //
   document.querySelector('#message-form').classList.add('hide');
   // remove 'hide' class to show message //
   document.querySelector('#message-show').classList.remove('hide');

   // select div to show message //
   document.querySelector('h1').innerHTML = message;
}

// event handler for form submission //
document.querySelector('form').addEventListener('submit', (event) => {
   event.preventDefault();
   
   // toggling card-panel visibility //
   document.querySelector('#message-form').classList.add('hide');
   document.querySelector('#link-form').classList.remove('hide');

   // select text input with a querySelector //
   const input = document.querySelector('#message-input');
   const encrypted = btoa(input.value);

   // selector for 2nd input with value set to encrypted version // 
   const linkInput = document.querySelector('#link-input');
   linkInput.value = `${window.location}#${encrypted}`;
   linkInput.select(); // selects linkInput and all its text //

});
