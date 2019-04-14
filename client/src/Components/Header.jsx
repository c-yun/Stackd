import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <div className='Header'>
            <Link to='/'>
                <h1>Stackd</h1>
            </Link>
        </div>
    )
}

export default Header;