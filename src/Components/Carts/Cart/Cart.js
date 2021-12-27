import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const { name, photo, _id, price } = props.purchase;
    const { handleDelete } = props;
    return (
        <div className="col shadow p-3 mb-5 bg-body rounded mt-2">
            <div className="row">
                <div className="col-md-4">
                    <img src={photo} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title">{name}</h1>
                        <h3>
                            {price} Taka

                        </h3>
                        <br />
                        <button onClick={() => handleDelete(_id)} className='button btn btn-danger mt-3'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;