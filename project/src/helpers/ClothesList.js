import Dress from "../assets/Dress.jpeg";
import Jeans from "../assets/Jeans.jpg";
import hoodie from "../assets/hoodie.jpg";
import Shoes from "../assets/Shoes.jpeg";
import TShirt from "../assets/T-shirt.jpeg";
import Bag from "../assets/Bag.jpeg";

export const ClothesList = [
  {
    id: 1,
    name: "Pants",
    type: "Jeans",
    Age: "2",
    Gender: "Male",
    Season: "Summer",
    Material: "jeans",
    Quantity: 3,
    picture: Jeans,
    xyz: "Clothes",
    imageClass: "popup-image", // Add the CSS class here
  },
  {
    id: 2,
    name: "Dress",
    type: "Short Cotton",
    Age: "5",
    Gender: "Female",
    Season: "Spring",
    Material: "Cotton",
    Quantity: 3,
    picture: Dress,
    xyz: "Clothes",
    imageClass: "popup-image", // Add the CSS class here
  },
  {
    id: 3,
    name: "T-shirts",
    type: "Oversized",
    Age: "10",
    Gender: "Female",
    Season: "Fall",
    Material: "Cotton",
    Quantity: 3,
    picture: TShirt,
    xyz: "Clothes",
    imageClass: "popup-image", // Add the CSS class here
  },
  {
    id: 4,
    name: "Bag",
    type: "Backpack",
    Age: "7",
    Gender: "Female",
    Season: null,
    Material: "Fabric",
    Quantity: 3,
    picture: Bag,
    xyz: "Clothes",
    imageClass: "popup-image", // Add the CSS class here
  },
  {
    id: 5,
    name: "Shoes",
    type: "sneakers",
    Age: "3",
    Gender: "Unisex",
    Season: null,
    Material: "Rubber",
    Quantity: 3,
    picture: Shoes,
    xyz: "Clothes",
    imageClass: "popup-image", // Add the CSS class here
  },
  {
    id: 6,
    name: "Hoodie",
    type: "pullover hoodies",
    Age: "3",
    Gender: "Unisex",
    Season: "Winter",
    Material: "Cotton",
    Quantity: 3,
    picture: hoodie,
    xyz: "Clothes",
    imageClass: "popup-image", // Add the CSS class here
  },
];

export default ClothesList;
