import React from 'react';
import ProductCard from './card/ProductCard';
import Footer from './Footer';
import Banner from './Banner';

const Main = (props) => {
  return (
    <div>
    <Banner/>
    <div  className="d-flex justify-content-center pt-5 pb-3">
    <ProductCard item={props.item}/>
    </div>
    <Footer/>
    </div>
  )
}

export default Main