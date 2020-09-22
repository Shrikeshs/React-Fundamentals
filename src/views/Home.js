import React,{useState,useEffect} from 'react';
//import {useParams} from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import Product from './Product';
import useAxiosGet from '../Hooks/HttpRequests';
//import HelloWorld from '../components/HelloWorld';
function Home(){
    let content =  null;
    
    const url = `https://5f61b3dc07c1770016c52430.mockapi.io/users?page=1&limit=10`
    let products = useAxiosGet(url)
    
       if(products.error){
        content=<div>Error 404! Not found the requstes element</div>
    }
    if(products.loading){
        content=<Loader />
    }
    if (products.data) {
        content =
            products.data.map((product,key) => 
                <div key={key}>
                   <ProductCard product= {product}/>
                </div>
            )
    }


    
    
    
    return(
        <div>
             <h1 className="font-bold text-2xl mb-3 text-center">
                 Best Sellers
                 </h1>
                {content}
        </div>
    )
}
export default Home;