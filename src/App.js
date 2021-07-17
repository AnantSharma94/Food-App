import React, { useState, useEffect } from 'react';
import Categories from './Components/Categories';
//import axios from 'axios';
import './App.css';

const App = () =>{

  const [restaurantName, setRestaurantName] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect( ()=>{
    console.log(categories);
}, [restaurantName, categories]);

  useEffect( () => {

    const defaultPage = async () =>{
      const responseApi = await fetch('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099');
      const data = await responseApi.json();
      console.log(data[0]);
      setRestaurantName(data[0].restaurant_name);
      setCategories(data[0].table_menu_list);
    }

    defaultPage();
  }, []);

  return (
    <div>
      <div className='header'>
        <span  className='goBack'><a>&#8592;</a></span>
        <span className='title'>{restaurantName}</span>
        <span>
          <a className='order-tag'>My Orders</a>
          <a className='cart-icon'>&#128722;</a>
        </span>
      </div>
      <Categories categories={categories}/>
    </div>
    
  );
}

export default App;
