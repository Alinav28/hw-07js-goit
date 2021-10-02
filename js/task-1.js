//количество категорий в списке
const categoriesRef = document.querySelectorAll("li.item");
console.log (`В списке ${categoriesRef.length} категорий`);
//имена катeгорий и количество элементов в категориии

const categoriElement = document.querySelectorAll('h2');
categoriElement.forEach((el) => 
    console.log(`Категория:, ${el.textContent}, Kоличество элементов: ${document.querySelector(".item").lastChild.length}`)
    //console.log(`Категория:, ${el.textContent}, Kоличество элементов: ${categoriesRef.children.length}`)
);
