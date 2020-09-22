import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring'
import {Link} from 'react-router-dom';
import NavigationMenu from './NavigationMenu';
function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    const masktransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    const menutransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translate(0%)' },
        leave: { opacity: 0, transform: 'translate(-100%)' },
    })

    return (

        <nav>
            <span className="text-xl">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                    style={{ marginRight: 10 }}
                />
            </span>
            {
                masktransitions.map(({ item, key, props }) =>
                    item && <animated.div
                        key={key}
                        style={props}
                        className="fixed bg-gray-100 top-0 left-0 w-full h-full z-50"
                        onClick={() => setShowMenu(false)}
                    >This is the menu!</animated.div>
                )
            }

            {
                menutransitions.map(({ item, key, props }) =>
                    item && <animated.div
                        key={key}
                        style={props}
                        className=" shadow fixed p-3 bg-white top-0 left-0 w-2/5 h-full z-50"
                    >
                        <NavigationMenu closeMenu={() => setShowMenu(false)} />

                    </animated.div>
                )
            }


        </nav >


    );
}

export default Navigation;