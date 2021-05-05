import React from 'react';
import { Link } from 'gatsby';

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

export default StartPage;
