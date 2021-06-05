import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Column = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const PageWrapper = ({ children }) => {
    return <Column>{children}</Column>;
};

PageWrapper.propTypes = {};

export { PageWrapper };
