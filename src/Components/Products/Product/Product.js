import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { name, photo, _id, price } = props.product;
    const { handleCart } = props;
    return (
        <div class="col mt-5SS">
            <div class="card shadow p-3 mb-5 bg-body rounded product-card ">
                <div>
                <img src={photo} style={{ 'width': '300px','height':'300px' }} class="card-img-top mx-auto mt-5" alt="..." />
                <div class="card-body">
                    <h1 class="card-title">{name}</h1>
                    <hr />
                    <p class="card-text">{price} Taka</p>
                    <Link>
                        <button onClick={() => handleCart(props.product)} className="button btn btn-warning">Buy Now</button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Product;