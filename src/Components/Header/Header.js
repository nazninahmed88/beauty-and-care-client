import React from 'react';
import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();

    const getLogout = () => {
        logout();
        window.location.reload(true);
    }
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <div className="container-fluid">
                    {/* <Link to='/home' className="navbar-brand"> <img style={{ width: '60px' }} src="/images/logo.png" alt="" /> </Link> */}
                    <Link to='/home' className="navbar-brand"> <h1> <span className='text-dark fs-1 fst-italic'>Beauty & Care</span></h1> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <Link className="nav-link fs-5" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to='/products'>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to='/carts'>Carts</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <ul className="navbar-nav me-auto mb-lg-0 mx-auto">

                                {user.photoURL &&
                                    <img className='mx-auto' style={{ width: '30px', height: '30px', borderRadius: '30px' }} src={user.photoURL} alt="" />
                                }
                                {
                                    user.displayName &&
                                    <span style={{ marginRight: '10px' }}>{user.displayName}</span>
                                }
                                {
                                    user.email &&
                                    <span style={{ marginRight: '10px' }}>({user.email})</span>
                                }
                                <li className="nav-item">
                                    {user?.email ?
                                        <Link className="nav-link " onClick={getLogout}>Log Out</Link>
                                        :
                                        <Link className="nav-link" to='/login'>Login</Link>
                                    }
                                </li>
                            </ul>
                        </form>
                       
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;