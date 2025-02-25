import FoodIcon from '../assets/svg/allFood.svg';
import BreadIcon from '../assets/svg/bread.svg';
import FishIcon from '../assets/svg/fish.svg';
import NoodlesIcon from '../assets/svg/noodles.svg';
import HamburgerIcon from '../assets/svg/hamburger.svg';

const carrotsImagePath = require('../assets/images/carrots.jpg');
const chickenImagePath = require('../assets/images/chicken.jpg');
const perakanImagePath = require('../assets/images/perakan.jpg');
const porkBellyImagePath = require('../assets/images/porkBelly.jpg');
const pizzaImagePath = require('../assets/images/pizza.jpg');

export const categories = [
    { id: 'all', name: 'All Food', icon: FoodIcon },
    { id: 'bakery', name: 'Bakery', icon: BreadIcon },
    { id: 'seafood', name: 'Seafood', icon: FishIcon },
    { id: 'asian', name: 'Asian', icon: NoodlesIcon },
    { id: 'fastfood', name: 'Fast Food', icon: HamburgerIcon },
  ];

export const popularItems = [
    { id: 1, name: 'Chicken katsu', price: 12.99, minutes: 22, rating: 4.8, reviews: 120, image: chickenImagePath },
    { id: 2, name: 'Croissant', price: 8.99, minutes: 27, rating: 4.6, reviews: 85, image: perakanImagePath },
    { id: 3, name: 'Pork Belly', price: 14.99, minutes: 68, rating: 4.7, reviews: 210, image: porkBellyImagePath },
    { id: 4, name: 'Sushi Combo', price: 22.99, minutes: 17, rating: 4.9, reviews: 180, image: carrotsImagePath },
    { id: 5, name: 'Pizza', price: 17.56, minutes: 47, rating: 4.1, reviews: 2246, image: pizzaImagePath },
  ];

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5)
  }

  function uniqueIdList(string) {
    return [
      { id: 1+string, name: 'Chicken katsu', price: 12.99, minutes: 22, rating: 4.8, reviews: 120, image: chickenImagePath },
      { id: 2+string, name: 'Croissant', price: 8.99, minutes: 27, rating: 4.6, reviews: 85, image: perakanImagePath },
      { id: 3+string, name: 'Pork Belly', price: 14.99, minutes: 68, rating: 4.7, reviews: 210, image: porkBellyImagePath },
      { id: 4+string, name: 'Sushi Combo', price: 22.99, minutes: 17, rating: 4.9, reviews: 180, image: carrotsImagePath },
      { id: 5+string, name: 'Pizza', price: 17.56, minutes: 47, rating: 4.1, reviews: 2246, image: pizzaImagePath },
    ];
  }

  export const homeFeedList = [
    { listTitle: "Most Popular", data: shuffleArray(uniqueIdList(90)) },
    { listTitle: "Trending", data: shuffleArray(uniqueIdList(20)) },
    { listTitle: "New In", data: shuffleArray(uniqueIdList(30)) },
  ]