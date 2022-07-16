

// add items to the cart

const all_items_button = Array.from(document.querySelectorAll(".cart"));

all_items_button.forEach(elt => elt.addEventListener('click', () => {
    addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
    showItems()
  }))

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');


if(bar){
    bar.addEventListener('click', function(){
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',function(){
        nav.classList.remove('active');
    })
}