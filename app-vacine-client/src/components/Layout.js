import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";


const Layout = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div id="forDashboard">
            <div className="border-bottom">
                <nav className="navbar navbar-expand-md container navbar-light my-2">
                    <Link to={{ pathname: "/dashboard", state: { nizom: "nizom" } }} target="_blank" className="navbar-brand font-weight-bold text-primary">Covid-19</Link>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item nav-item-dropdown">
                            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle caret>
                                    <img src="/user.png" alt="" className="mr-3"/> Covid Admin
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        <Link to="/" className="text-decoration-none text-dark"> Выход </Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="border-bottom link-row">
                <nav className="navbar navbar-expand-md container navbar-light my-1">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <Link to="/dashboard" className={`nav-link ${props.location === "/dashboard" ? "text-primary" : "text-dark"} d-flex align-items-center`}>
                                <svg viewBox="64 64 896 896" focusable="false" className="mr-2" data-icon="appstore"
                                     width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"/>
                                </svg>
                                Пользователи</Link>
                        </li>

                        {/*<li className="nav-item">*/}
                        {/*    <Link to="/laboratory" className={`nav-link ${props.location === "/laboratory" ? "text-primary" : "text-dark"} d-flex align-items-center px-md-5`}>*/}
                        {/*        <svg viewBox="64 64 896 896" focusable="false" className="mr-2" data-icon="appstore"*/}
                        {/*             width="1em" height="1em" fill="currentColor" aria-hidden="true">*/}
                        {/*            <path*/}
                        {/*                d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"/>*/}
                        {/*        </svg>*/}
                        {/*        Лаборатория (название)</Link>*/}
                        {/*</li>*/}

                        {/*<li className="nav-item">*/}
                        {/*    <Link to="/sampling" className={`nav-link ${props.location === "/sampling" ? "text-primary" : "text-dark"} d-flex align-items-center`}>*/}
                        {/*        <svg viewBox="64 64 896 896" focusable="false" className="mr-2" data-icon="appstore"*/}
                        {/*             width="1em" height="1em" fill="currentColor" aria-hidden="true">*/}
                        {/*            <path*/}
                        {/*                d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"/>*/}
                        {/*        </svg>*/}
                        {/*        Место*/}
                        {/*        забора анализа</Link>*/}
                        {/*</li>*/}
                    </ul>
                </nav>
            </div>

            {props.children}

        </div>
    );
};

export default Layout;