import React from 'react';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
    return (
        <>
            <header>
                <h1>This is a Header</h1>
            </header>
            {children}
            <footer>
                <h3>This is a Footer</h3>
            </footer>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
