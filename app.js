let products = {
  data: [
    {
      productName: "Buttermilk Pancakes",
      category: "Breakfast",
      price: "15.99",
      image: "./image/item-1.jpeg",
      desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
      productName: "Diner Double",
      category: "Lunch",
      price: "13.99",
      image: "./image/item-2.jpeg",
      desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    },
    {
      productName: "Godzilla Milkshake",
      category: "Shakes",
      price: "6.99",
      image: "./image/item-3.jpeg",
      desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    },
    {
      productName: "Country Delight",
      category: "Breakfast",
      price: "20.99",
      image: "./image/item-4.jpeg",
      desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    },
    {
      productName: "Egg Attack",
      category: "Lunch",
      price: "22.99",
      image: "./image/item-5.jpeg",
      desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    },
    {
      productName: "Oreo Dream",
      category: "Shakes",
      price: "18.99",
      image: "./image/item-6.jpeg",
      desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    },
    {
      productName: "Bacon Overflow",
      category: "Breakfast",
      price: "8.99",
      image: "./image/item-7.jpeg",
      desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    },
    {
      productName: "American Classic",
      category: "Lunch",
      price: "12.99",
      image: "./image/item-8.jpeg",
      desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    },
    {
      productName: "Quarantine Buddy",
      category: "Shakes",
      price: "16.99",
      image: "./image/item-9.jpeg",
      desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    },
    {
      productName: "Steak Dinner",
      category: "Dinner",
      price: "39.99",
      image: "./image/item-10.jpeg",
      desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    },
  ],
};

for (let i of products.data) {
  //create card
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");
  // image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container

  let container = document.createElement("div");
  container.classList.add("container");
  //product Name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);
  //desc
  let desc = document.createElement("p");
  desc.classList.add("description");
  desc.innerText = i.desc;
  container.appendChild(desc);
  //apppendchild
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}
//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

window.onload = () => {
  filterProduct("all");
};
