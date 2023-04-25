import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheet.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import {Routes, Route} from 'react-router-dom';
import ProductCard from './components/card/ProductCard';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

const [products, setProducts] = useState([]);

useEffect( ()=>{
  async function axiosData(){
    const productData = await axios.get('https://6444e5a4914c816083c19995.mockapi.io/products')
    setProducts(productData.data)
  }
  axiosData()
},[])


  return (
        <div>
          <Header/>
            <Routes>
              <Route path="/" element={<Main item={products}/>}/>
              <Route path="/about" element={<ProductCard item={products}/>}/>
              <Route path="/description" element={<Footer/>}/>
              <Route path="/form" element={<Form/>}/>
            </Routes>
            

        </div>
  );
}

export default App;
