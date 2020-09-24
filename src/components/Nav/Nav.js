import React from 'react';
import { Link } from 'gatsby';

export const Nav = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link href="/pizzas">Pizza Menu</Link>
            </li>
            <li>
                <Link to="/">LOGO</Link>
            </li>

            <li>
                <Link href="/slicemasters">Slice Masters</Link>
            </li>
            <li>
                <Link href="/order">Order</Link>
            </li>
        </ul>
    </nav>
);
