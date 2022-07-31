import {animated, config, useTransition} from 'react-spring'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import NavigationMenu from "./NavigationMenu";

function Navigation() {
    const [showMenu, setShowMenu] = useState(false)

    const maskTransitions = useTransition(showMenu, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        reverse: showMenu,
        delay: 100,
        config: config.molasses,
        // eslint-disable-next-line no-undef
        onRest: () => set(!showMenu),
    })

    const menuTransitions = useTransition(showMenu, {
        from: {opacity: 0, transform: 'translate(-100%)'},
        enter: {opacity: 1, transform: 'translate(0%)'},
        leave: {opacity: 0, transform: 'translate(-100%)'},
        reverse: showMenu,
        delay: 100,
        config: config.molasses,
        // eslint-disable-next-line no-undef
        onRest: () => set(!showMenu),
    })

    return (
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />

            </span>

            {
                maskTransitions(
                    (styles, item) => item &&
                        <animated.div
                            style={styles}
                            className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                            onClick={() => setShowMenu(false)}
                        >
                            This is the menu
                            ️</animated.div>
                )
            }

            {
                menuTransitions(
                    (styles, item) => item &&
                        <animated.div
                            style={styles}
                            className="p-3 fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
                        >

                            <NavigationMenu
                                closeMenu={() => setShowMenu(false)}
                            />

                            ️</animated.div>
                )
            }
        </nav>
    )
}

export default Navigation