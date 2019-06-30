import Images from '../images/images'

const restaurants = [
  {
    restaurantName: "Main Street Diner",
    thumbnail: Images.pizzaInBox,
    price: "$$",
    style: "Diner",
    hours: {
      open: "10:00 AM",
      close: "12:00 AM"
    }
  },
  {
    restaurantName: "Burgermeister",
    thumbnail: Images.burger,
    price: "$$$$",
    style: "Gastropub",
    hours: {
      open: "5:00 PM",
      close: "2:00 AM"
    }
  },
  {
    restaurantName: "Rocking 50s Diner",
    thumbnail: Images.diner,
    price: "$",
    style: "Diner",
    hours: {
      open: "6:00 AM",
      close: "10:00 PM"
    }
  }  
]

export default restaurants;