import React from "react";
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expansify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Go home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Go create expense page</NavLink>
        <NavLink to="/help" activeClassName="is-active">Go help page</NavLink>
    </header>
);

export default Header;