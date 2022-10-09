const itemsEl = document.querySelectorAll (".item");
console.log('Number of categories:', itemsEl.length);
itemsEl.forEach (function(category) {
    console.log ('Category: ',category.firstElementChild.textContent);
    console.log ('Elements:' ,category.lastElementChild.childElementCount)
});


