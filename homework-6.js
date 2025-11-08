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
const isProperties = (car) => {
  if (car.maximumSpeed) {
    return;
  }
  else {
    car.maximumSpeed = 250;
  }
}
isProperties(car);

//6 task
const bringOut = (car, model) => {
  console.log(car[model]);
}
bringOut(car,"model");

//7 task
const groceryCards = ['mousse', 'mask', 'faceWashGel', 'giftSet-1', 'giftSet-5'];

//8 task
const greatBook = [
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
greatBook.push(
  {
    name : "The Da Vinci Code",
    autor: "Dan Brown",
    year : 2003,
    coverColor : "red",
    genre : "mystery thriller"
  }
);
console.log(greatBook);

//9 task
const addingBook = [
  {
    name : "1984",
    autor: "George Orwell",
    year : 1949,
    coverColor : "gray",
    genre : "dystopian fiction",
    universe: "Orwell Universe"
  },
  {
    name : "To Kill a Mockingbird",
    autor: "Harper Lee",
    year : 1960,
    coverColor : "blue",
    genre : "classic literature",
    universe: "Southern Gothic"
  },
  {
    name : "The Hobbit",
    autor: "J.R.R. Tolkien",
    year : 1937,
    coverColor : "green",
    genre : "fantasy",
    universe: "Middle-earth"
  }
]
greatBook.push(
  {
    name : "The Da Vinci Code",
    autor: "Dan Brown",
    year : 2003,
    coverColor : "red",
    genre : "mystery thriller",
    universe: "Robert Langdon Universe"
  }
);

const combinedBooks = [...greatBook, ...addingBook];
console.log(combinedBooks);

//10 task
const checkRarity = (greatBook) => {
  if(greatBook.year < 2000) {
    greatBook.isRare = true;
  }
  else {
    greatBook.isRare = false;
  }
}

greatBook.forEach(checkRarity);
console.log(greatBook);
