import React from 'react';
import { Link } from 'gatsby';
import { Layout } from 'components/layout';

// markup
const StartPage = () => {
    return (
        <div>
            <h1>Hello world</h1>
            <Link to="/contact/">Contact</Link>
            <Link to="/about/">About</Link>
        </div>
    );
};

StartPage.Layout = Layout;

export default StartPage;
