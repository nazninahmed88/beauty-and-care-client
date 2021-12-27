import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/products'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleCart = cart => {
        axios.post('http://localhost:5000/cart', cart)
            .then(res => {
                alert('Added Successfully');
            })
    }

    return (
        <div>
          
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