import React from 'react';
import styled from 'styled-components';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import 'normalize.css';

export const Layout = ({ children }) => (
    <div>
        <GlobalStyles />
        <Typography />
        <Nav />

        {children}
        <Footer />
    </div>
);
