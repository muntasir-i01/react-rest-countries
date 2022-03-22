import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Welcome to my react website</h2>
            <nav>
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">About us</a>
            </nav>
        </div>
    );
};

export default Header;