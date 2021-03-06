import React from 'react';
import { Link } from 'react-router-dom';
function NavigationMenu(props) {
    return (
        <div>
            <span className="font-bold py-3">
                Menu
                        <ol className="p-3 ">

                    <ul>
                        <li>
                            <Link
                                to="/"
                                className="text-blue-500 py-3 border-t block"
                                onClick={props.closeMenu}
                            >Home</Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="text-blue-500 py-3 border-b block"
                                onClick={props.closeMenu}
                            >About</Link>

                        </li>
                        <li>
                            <Link
                                to="/users"
                                className="text-blue-500 py-3 border-b block"
                                onClick={props.closeMenu}
                            >Product</Link>
                            
                        </li>
                    </ul>

                </ol>
            </span>

        </div>
    );
}
export default NavigationMenu;