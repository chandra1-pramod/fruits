import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FruitsSection from './FruitsSection';
import VegetablesSection from './VegetablesSection';
import NavbarComponent from './NavbarComponent';

const vegetables = [
  { id: 1, name: 'Tomato', img: 'https://www.gardeningknowhow.com/wp-content/uploads/2021/07/tomatoes-1-1536x1152.jpg', description: 'Organic Tomato', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
  { id: 2, name: 'Bottle Gourd', img: 'https://cdn.mos.cms.futurecdn.net/vRnnGC9KT4BRWpLhPDE9pN.jpg', description: 'Fresh Bottle Gourd', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
  { id: 3, name: 'Potato', img: 'https://tse2.mm.bing.net/th?id=OIP.87KPkdg4s-wZPW6_jje_IQHaE8&pid=Api&P=0&h=180', description: 'Organic Potato', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
  { id: 4, name: 'Spinach', img: 'https://i1.wp.com/www.extrachai.com/wp-content/uploads/2018/05/Spinach-All-Green.jpg?fit=1600%2C1250&ssl=1', description: 'Fresh Spinach', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
  { id: 5, name: 'Bitter Gourd', img: 'https://tse2.mm.bing.net/th?id=OIP.-8YhLpv5hsLFmEtH4EZy4gAAAA&pid=Api&P=0&h=180', description: 'Fresh Bitter Gourd', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
  { id: 6, name: 'Pumpkin', img: 'https://parade.com/.image/t_share/MTkxNzU3NDM0NjYwODU3NTA3/different-pumpkin-colors.jpg', description: 'Different Pumpkins', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
  { id: 7, name: 'Cabbage', img: 'https://tse1.mm.bing.net/th?id=OIP.5nzXsxYo6k6ae19uR3LkrAHaE7&pid=Api&P=0&h=180', description: 'Fresh Cabbage', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
  { id: 8, name: 'Garlic', img: 'https://www.mashed.com/img/gallery/what-is-a-garlic-clove-really-and-how-do-you-use-it/l-intro-1628012061.jpg', description: 'Fresh Garlic', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` }
];

const fruits = [
  { id: 1, name: 'Apple', img: 'https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?cs=srgb&dl=red-apples-2487443.jpg&fm=jpg', description: 'A sweet, crisp fruit that is high in fiber and vitamins.', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
  { id: 2, name: 'Banana', img: 'https://www.nipponexpress.com/press/report/img/06-Nov-20-ogp.jpeg', description: 'A potassium-rich fruit that is great for energy.', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
  { id: 3, name: 'Pineapple', img: 'https://www.oahufresh.com/wp-content/uploads/2012/05/pineapple.jpg', description: 'A fruit that is high in fiber and vitamins.', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
  { id: 4, name: 'Orange', img: 'https://tse4.mm.bing.net/th?id=OIP.VbKz6SeSX9CQifygrVttcwHaE7&pid=Api&P=0&h=180', description: 'A citrus fruit known for its high vitamin C content.', price: `₹${(Math.random() * 100 + 10).toFixed(2)}` },
  { id: 5, name: 'Pomegranate', img: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/09/30/61638.jpg', description: 'A fruit known for its high vitamin C content.', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
  { id: 6, name: 'Guava', img: 'https://post.greatist.com/wp-content/uploads/2020/05/guava-1200x628-facebook-1200x628.jpg', description: 'A fruit rich in vitamin C.', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
  { id: 7, name: 'Strawberry', img: 'https://tse3.mm.bing.net/th?id=OIP.ESvtsBnYxWO40A061MtJoAHaEo&pid=Api&P=0&h=180', description: 'Fresh Strawberry', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
  { id: 8, name: 'Watermelon', img: 'https://www.thespruce.com/thmb/pjDqYUU4EG1y_fNU4x23WCbqLXA=/4238x2827/filters:fill(auto,1)/when-to-harvest-watermelon-2539591-04-f7f99d3a73d846cb9d453f8a6f0cc7ee.jpg', description: 'Organic Watermelon', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` }
];


const App = () => {
  return (
    <>
      {/* Navbar */}
      <NavbarComponent />

      {/* Home Section */}
      <Container fluid id="home-section" className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center mt-5 pt-5">
        <h1 className="my-4">Welcome to Hellth-Wellth</h1>
        <p>Discover the freshest fruits and vegetables with detailed descriptions.</p>
      </Container>

      {/* Fruits Section */}
      <FruitsSection fruits={fruits} />

      {/* Vegetables Section */}
      <VegetablesSection vegetables={vegetables} />

      {/* Footer */}
      <footer className="text-center mt-5">
        <p>&copy; 2024 Fresh Produce. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;
