const images = [
  {
    url: `https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
    alt: `White and Black Long Fur Cat`,
  },
  {
    url: `https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
    alt: `Orange and White Koi Fish Near Yellow Koi Fish`,
  },
  {
    url: `https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
    alt: `Group of Horses Running`,
  },
];
 
const ul = document.createElement('ul');
images.forEach(image => {
  const li = document.createElement('li');
  const imageTag = document.createElement('img');

  imageTag.src = image.url,
    imageTag.alt = image.alt;
  
  li.appendChild(imageTag);
  ul.appendChild(li);
  
});
document.body.appendChild(ul);
//document.querySelector('#gallery').insertAdjacentHTML('beforeend', ul);






console.log(ul);










//const ingredientsList = document.querySelector("#ingredients");   
//const elem = ingredients.map(ingredients => {
//    const elem = document.createElement("li");
//  ingredientsList.appendChild(elem);
//});

//const gallereryUl = document.querySelector('#gallery');
//function gallereryImg(images) {
//    const markUpString = images.reduce((String, image) =>
//    (String + `<li>
//        <img
//            src='${image.url}'
//            alt = '${image.alt}'
//        width = "400">
//    </li>,`));
//  gallereryUl.insertAdjacentHTML("beforeend", markUpString);
//};
//  console.log(images);

  
  
  
//document.querySelectorAll('li').forEach(el => {
//  const image = document.createElement('img');
//  image.setAttribute("src='${images.url}', alt = '${images.alt}'");
//  el.innerHTML = "";
//  el.appendChild(image);


//});
