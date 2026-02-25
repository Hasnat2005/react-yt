import React from 'react'
import Card from './components/Card'

const App = () => {
  const hotelsData = [
  {
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    title: "Grand Palace Hotel",
    rating: 5,
    location: "New York",
    price: "$20,000"
  },
  {
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=60",
    title: "Ocean Breeze Resort",
    rating: 4,
    location: "Miami",
    price: "$15,500"
  },
  {
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
    title: "Mountain View Lodge",
    rating: 4,
    location: "Denver",
    price: "$12,000"
  },
  {
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    title: "Urban Stay Suites",
    rating: 3,
    location: "Chicago",
    price: "$9,800"
  },
  {
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60",
    title: "Royal Boutique Inn",
    rating: 5,
    location: "Paris",
    price: "$25,000"
  },
  {
    img: "https://images.unsplash.com/photo-1576675784201-0e142b423952?auto=format&fit=crop&w=800&q=60",
    title: "Desert Pearl Resort",
    rating: 4,
    location: "Dubai",
    price: "$30,000"
  },
  {
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=60",
    title: "Comfort Stay Hotel",
    rating: 3,
    location: "London",
    price: "$11,200"
  },
  {
    img: "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?auto=format&fit=crop&w=800&q=60",
    title: "Skyline Tower Hotel",
    rating: 4,
    location: "Tokyo",
    price: "$18,700"
  },
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    title: "Crystal Pool Resort",
    rating: 5,
    location: "Bali",
    price: "$22,400"
  }
];



  return (
    
    <div className='parent'>
      {hotelsData.map((hotel, index) => (
        <Card
          key={index}
          img={hotel.img}
          title={hotel.title}
          rating={hotel.rating}
          location={hotel.location}
          price={hotel.price}
        />
      ))}
      </div>
  )
}

export default App
