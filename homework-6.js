//3 task
const personCartography = {
  name : 'Sanzhar',
  surname : 'Irgebay',
  email : 'theoneeetheonlyyy@gmail.com',
  work : 'programmer',
  position : 'frontend developer',
  age : 21,
  country : 'Kazakhstan',
  city : 'Astana',
  relationship : 'single',
  hobby : 'gym'
}
console.log(personCartography);

//4 task
const car = {
  brand : 'Mercedes',
  model : 'cls 400',
  release : 2014,
  color : 'black',
  transmission : 'AT'
}
car.owner = personCartography;
console.log(car);

//5 task
const determineProperties = (car) => {
  if (car.maximumSpeed) {
    return;
  }
  else {
    car.maximumSpeed = 250;
  }
}
determineProperties(car);

//6 task
const bringModel = (car, model) => {
  console.log(car[model]);
}
bringModel(car,"model");

//7 task
const groceryCards = ['mousse', 'mask', 'faceWashGel', 'giftSet-1', 'giftSet-5'];

//8 task
const Books = [
  {
    name : "1984", 
    autor: "George Orwell",
    year : 1949,
    coverColor : "gray",
    genre : "dystopian fiction"
  },
  {
    name : "To Kill a Mockingbird",
    autor: "Harper Lee",
    year : 1960,
    coverColor : "blue",
    genre : "classic literature"
  },
  {
    name : "The Hobbit",
    autor: "J.R.R. Tolkien",
    year : 1937,
    coverColor : "green",
    genre : "fantasy"
  }
]
Books.push(
  {
    name : "The Da Vinci Code",
    autor: "Dan Brown",
    year : 2003,
    coverColor : "red",
    genre : "mystery thriller"
  }
);
console.log(Books);

//9 task
const dcBooks = [
  {
    name: "Crisis on Infinite Earths",
    autor: "Marv Wolfman",
    year: 1985,
    coverColor: "red",
    genre: "superhero, crossover",
    universe: "DC Multiverse"
  },
  {
    name: "Batman: Year One",
    autor: "Frank Miller",
    year: 1987,
    coverColor: "dark gray",
    genre: "superhero, noir",
    universe: "DC Universe"
  },
  {
    name: "Superman: Red Son",
    autor: "Mark Millar",
    year: 2003,
    coverColor: "red",
    genre: "alternate history, superhero",
    universe: "Elseworlds Universe"
  }
]

const combinedBooks = [...Books, ...dcBooks];
console.log(combinedBooks);

//10 task
const checkRarity = (Books) => {
  if(Books.year < 2000) {
    Books.isRare = true;
  }
  else {
    Books.isRare = false;
  }
}

Books.forEach(checkRarity);
console.log(Books);
