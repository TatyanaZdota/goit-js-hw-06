const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');

/*const itemEl = ingredients.map(ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.classList.add('item');
  ingredientEl.textContent=ingredient;
  return ingredientEl;
}); 
console.log (itemEl)
ingredientsEl.append(...itemEl);*/


const addIngredients = (products) =>  products.map(ingredient => {
    const ingredientEl = document.createElement('li');
    ingredientEl.classList.add('item');
    ingredientEl.textContent=ingredient;
    return ingredientEl;
});
;
const itemEl = addIngredients(ingredients);
ingredientsEl.append(...itemEl);