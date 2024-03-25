import { app, database } from './firebaseConfig'

class House {
    constructor(image, title, description, price) {
        this.image = image;
        this.description = description;
        this.price = price;
        this.title = title;
    }
}

class Checkout {
    constructor() {
        this.houses = [];
    }
    addHouse(house) {
        this.houses.push(house); // Adds a house
    }
}



//Create a new checkout
var checkout = new Checkout();
// Function to handle the onclick event

function purchaseHouse(id) {
    // fetch product details
    var image = document.getElementById('houseImage' + id).src;
    var title = document.getElementById('houseTitle' + id).textContent;
    var description = document.getElementById('houseDescription' + id).textContent;
    var price = document.getElementById('housePrice' + id).textContent;
  
    var house = new House(image, title, description, price);
  
    // Add product to checkout
    checkout.addHouse(house);
  
    try {
      // Create a reference to the houses collection
      const housesRef = collection(database, 'houses');
      // Push the house data to the collection
      push(housesRef, house);
      console.log("House purchased successfully!");
      console.log("House data:", house);
      alert("Your house has been added to checkout! You can now proceed to check out.");
    } catch (error) {
      console.error("Error storing house data:", error);
      alert("There was an error adding the house to checkout. Please try again.");
    }
  };
  