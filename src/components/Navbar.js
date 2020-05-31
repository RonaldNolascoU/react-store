import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../App.css'

function Navbar() {
    return (
        <NavbarMenu>
            <NavbarTitle />
            <NavItem icon="✚" />
            <NavItem icon="🔔" />
            <NavItem icon="💭" />
            <NavItem icon="⬇" >
                <DropdownMenu></DropdownMenu>

            </NavItem>
        </NavbarMenu>
    );
}

function NavbarMenu(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                {props.children}
            </ul>
        </nav>
    );
}

function NavbarTitle() {
    return (
        <a className="nav-title">
            React Facebook Dropdown
      </a>
    )
}

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a className="icon-button" onClick={() => setOpen(props.children ? !open : open)}>
                {!open ? props.icon : '⬆'}
            </a>

            {open && props.children}
        </li>
    );
}

function DropdownMenu() {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }
    return (
        <div className="dropdown" style={{ height: menuHeight }} rel={dropdownRef}>
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                onEnter={calcHeight}
                classNames="menu-primary">
                <div className="menu">
                    <DropdownItem leftIcon="🤔">My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon="🔩"
                        rightIcon="→"
                        goToMenu="settings"
                    >
                        Settings
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                unmountOnExit
                timeout={500}
                onEnter={calcHeight}
                classNames="menu-secondary">
                <div className="menu">
                    <DropdownItem leftIcon="←" goToMenu="main"></DropdownItem>
                    <DropdownItem leftIcon="🗂">General</DropdownItem>
                    <DropdownItem leftIcon="🔐">Security</DropdownItem>
                    <DropdownItem leftIcon="⏳">Activity</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Navbar;
