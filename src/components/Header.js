import React from 'react';
import Navigation from './Navigation';
function Header () {
    return(
        <header className="border-b p3 flex justify-between items-center">
            <span className="font-bold">
            App Header!
            </span>
            <Navigation />
        </header>
    );
}

export default Header;