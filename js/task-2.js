const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector("#ingredients");
    
const elem = ingredients.map(ingredients => {
  const elem = document.createElement("li");
  elem.textContent = ingredients;
  ingredientsList.appendChild(elem);
});

console.log(ingredientsList);
