import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = 'https://young-sierra-19007.herokuapp.com/products'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleCart = cart => {
        axios.post('https://young-sierra-19007.herokuapp.com/cart', cart)
            .then(res => {
                alert('Added Successfully');
            })
    }

    return (
        <div className='bg'>
          
            <div className='container'>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <Product key={product.id} product={product} handleCart={handleCart} ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;