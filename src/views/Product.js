import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import useAxiosGet from '../Hooks/HttpRequests';
function Product() {
    const { id } = useParams()
  
    const url = `https://5f61b3dc07c1770016c52430.mockapi.io/users/${id}`
    let content;
    let product =useAxiosGet(url);
    
        

   
    if(product.error){
        content=<div>Error 404! Not found the requstes element</div>
    }
    if(product.loading){
        content=<Loader />
    }


    if (product.data) {
        content =
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div >
                    <img
                        src={product.data.images[0].imageUrl}
                        alt={product.data.name}
                        height={300}
                        width={300}
                    />

                </div>
                <div className="text-2xl font-bold mb-3">
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>
    }
    return (
        <div>{content}</div>
    )
}
export default Product;