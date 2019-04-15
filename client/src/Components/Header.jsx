import React from 'react';
import Home from "../Home"; 
import {BrowserRouter, Route, Link} from "react-router-dom"

const Header = (props) => {
    return (
        <div className='Header'>
            <BrowserRouter>
                <Link to='/'>
                    <h1 className='brand'>Stackd</h1>
                </Link>
            </BrowserRouter>
        </div>
    )
}

export default Header;