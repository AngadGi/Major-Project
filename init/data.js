const sampleListings = [
  {
    title: "Sleek Urban Condo",
    description: "Modern living with all the amenities in this downtown condo.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 2304,
    location: "Austin",
    country: "Mexico",
  },
  {
    title: "Sleek Urban Condo",
    description: "Modern living with all the amenities in this downtown condo.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 2994,
    location: "Seattle",
    country: "Mexico",
  },
  {
    title: "Minimalist Studio Flat",
    description: "Escape to this charming beachfront cottage for a relaxing getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    price: 880,
    location: "Austin",
    country: "United States",
  },
  {
    title: "Mountain Retreat Lodge",
    description: "Enjoy breathtaking views in this luxurious penthouse suite.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2456,
    location: "San Francisco",
    country: "Mexico",
  },
  {
    title: "Cozy Beachfront Cottage",
    description: "Simplicity and comfort come together in this minimalist flat.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2253,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Charming Countryside B&B",
    description: "Inspire creativity in this bohemian artist's loft.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2019,
    location: "Denver",
    country: "Mexico",
  },
  {
    title: "Bohemian Artist's Loft",
    description: "Simplicity and comfort come together in this minimalist flat.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2827,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Luxury Penthouse Suite",
    description: "Step back in time in this historic home with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2536,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Historic Home with Garden",
    description: "Modern living with all the amenities in this downtown condo.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2813,
    location: "San Francisco",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description: "Simplicity and comfort come together in this minimalist flat.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 1856,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Luxury Penthouse Suite",
    description: "Breathe fresh mountain air in this serene lodge.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 1157,
    location: "Miami",
    country: "Canada",
  },
  {
    title: "Charming Countryside B&B",
    description: "Relax in this quaint B&B with countryside charm.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 1341,
    location: "Aspen",
    country: "Mexico",
  },
  {
    title: "Mountain Retreat Lodge",
    description: "Simplicity and comfort come together in this minimalist flat.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 1011,
    location: "Miami",
    country: "Mexico",
  },
  {
    title: "Historic Home with Garden",
    description: "Relax in this quaint B&B with countryside charm.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 1034,
    location: "Denver",
    country: "Canada",
  },
  {
    title: "Sleek Urban Condo",
    description: "Modern living with all the amenities in this downtown condo.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2668,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Mountain Retreat Lodge",
    description: "Stay in the heart of the city in this stylish loft apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2351,
    location: "Nashville",
    country: "United States",
  },
  {
    title: "Luxury Penthouse Suite",
    description: "Experience peace and quiet in this rustic cabin surrounded by nature.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2548,
    location: "Portland",
    country: "Mexico",
  },
  {
    title: "Bohemian Artist's Loft",
    description: "Enjoy breathtaking views in this luxurious penthouse suite.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 1503,
    location: "Seattle",
    country: "Canada",
  },
  {
    title: "Mountain Retreat Lodge",
    description: "Modern living with all the amenities in this downtown condo.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 1072,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Luxury Penthouse Suite",
    description: "Step back in time in this historic home with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 858,
    location: "Malibu",
    country: "Canada",
  },
  {
    title: "Charming Countryside B&B",
    description: "Simplicity and comfort come together in this minimalist flat.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2932,
    location: "Nashville",
    country: "United States",
  },
  {
    title: "Historic Home with Garden",
    description: "Modern living with all the amenities in this downtown condo.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2125,
    location: "Nashville",
    country: "Mexico",
  },
  {
    title: "Minimalist Studio Flat",
    description: "Enjoy breathtaking views in this luxurious penthouse suite.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2213,
    location: "San Francisco",
    country: "Mexico",
  },
  {
    title: "Cozy Beachfront Cottage",
    description: "Step back in time in this historic home with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 1614,
    location: "New York City",
    country: "Mexico",
  },
  {
    title: "Luxury Penthouse Suite",
    description: "Enjoy breathtaking views in this luxurious penthouse suite.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 1178,
    location: "Malibu",
    country: "Canada",
  },
  {
    title: "Charming Countryside B&B",
    description: "Simplicity and comfort come together in this minimalist flat.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2935,
    location: "Malibu",
    country: "Mexico",
  },
  {
    title: "Minimalist Studio Flat",
    description: "Inspire creativity in this bohemian artist's loft.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 1397,
    location: "San Francisco",
    country: "Canada",
  },
  {
    title: "Luxury Penthouse Suite",
    description: "Breathe fresh mountain air in this serene lodge.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2711,
    location: "Austin",
    country: "United States",
  },
  {
    title: "Bohemian Artist's Loft",
    description: "Step back in time in this historic home with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2120,
    location: "San Francisco",
    country: "Mexico",
  },
  {
    title: "Bohemian Artist's Loft",
    description: "Modern living with all the amenities in this downtown condo.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2641,
    location: "San Francisco",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin in the Woods",
    description: "Step back in time in this historic home with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 983,
    location: "Seattle",
    country: "Canada",
  },
  {
    title: "Historic Home with Garden",
    description: "Relax in this quaint B&B with countryside charm.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 1255,
    location: "New York City",
    country: "Mexico",
  },
  {
    title: "Historic Home with Garden",
    description: "Relax in this quaint B&B with countryside charm.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2889,
    location: "Seattle",
    country: "United States",
  },
  {
    title: "Rustic Cabin in the Woods",
    description: "Enjoy breathtaking views in this luxurious penthouse suite.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2298,
    location: "San Francisco",
    country: "Canada",
  },
  {
    title: "Cozy Beachfront Cottage",
    description: "Step back in time in this historic home with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2265,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Sleek Urban Condo",
    description: "Breathe fresh mountain air in this serene lodge.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2639,
    location: "Portland",
    country: "Mexico",
  },
  {
    title: "Mountain Retreat Lodge",
    description: "Escape to this charming beachfront cottage for a relaxing getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2943,
    location: "Miami",
    country: "Canada",
  },
  {
    title: "Bohemian Artist's Loft",
    description: "Inspire creativity in this bohemian artist's loft.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 1979,
    location: "Austin",
    country: "United States",
  },
  {
    title: "Mountain Retreat Lodge",
    description: "Modern living with all the amenities in this downtown condo.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 1304,
    location: "Portland",
    country: "Canada",
  },
  {
    title: "Sleek Urban Condo",
    description: "Modern living with all the amenities in this downtown condo.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 944,
    location: "Seattle",
    country: "Canada",
  },
  {
    title: "Mountain Retreat Lodge",
    description: "Enjoy breathtaking views in this luxurious penthouse suite.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 1172,
    location: "Seattle",
    country: "Canada",
  },
  {
    title: "Rustic Cabin in the Woods",
    description: "Inspire creativity in this bohemian artist's loft.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 2285,
    location: "Nashville",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin in the Woods",
    description: "Modern living with all the amenities in this downtown condo.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    price: 815,
    location: "Austin",
    country:"Austria",
  } 
]

module.exports = { data : sampleListings };     
