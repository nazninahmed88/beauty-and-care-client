import React, { useEffect, useState } from 'react';
import Header from '../../Header/Header';
import Cart from '../Cart/Cart';

const Carts = () => {
    const [purchases, setPurchases] = useState([]);
    useEffect(() => {
        const url = 'https://young-sierra-19007.herokuapp.com/cart'
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchases(data))
    }, [])
    const handleDelete = id => {
        // console.log(id);

        const url = `https://young-sierra-19007.herokuapp.com/cart/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    alert('Are you sure to delete');
                    const remaining = purchases.filter(service => service._id !== id);
                    setPurchases(remaining);
                }

            })
    }
    return (
        <div>
            <Header></Header>
            <div className='container'>
                <div className="row row-cols-1 row-cols-md-1 g-4">
                    {
                        purchases.map(purchase => <Cart key={purchase._id} purchase={purchase} handleDelete={handleDelete}></Cart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Carts;