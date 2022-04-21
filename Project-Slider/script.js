var models = [
  {
    name: "Bmw 418d",
    image: "img/bmw.jpg",
    link: "https://www.arabalar.com",
  },
  {
    name: "Mazda CX-3",
    image: "img/mazda.jpg",
    link: "https://www.arabalar.com",
  },
  {
    name: "Volvo s60",
    image: "img/volvo.jpg",
    link: "https://www.arabalar.com",
  },
  {
    name: "Skoda Superb",
    image: "img/skoda.jpg",
    link: "https://www.arabalar.com",
  },
  {
    name: "Honda Civic",
    image: "img/honda.jpg",
    link: "https://www.arabalar.com",
  },
];
var index = 1;
document.querySelector(".card-title").textContent = models[index].name;
document
  .querySelector(".card-img-top")
  .setAttribute("src", models[index].image);

document.querySelector(".card-link").setAttribute("href", models[index].link);
