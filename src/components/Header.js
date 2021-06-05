import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledHeader = styled('header')`
    height: 100px;
`;

const Navbar = styled('nav')`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Item = styled('div')`
    display: inline-block;
`;

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: 24px;
    padding: 0 12px;
`;

const Header = props => {
    return (
        <StyledHeader>
            <Navbar>
                <Item>
                    <StyledLink to="/">Hem</StyledLink>
                </Item>
                <Item>
                    <StyledLink to="/contact">Kontakt</StyledLink>
                </Item>
                <Item>
                    <StyledLink to="/about">Om oss</StyledLink>
                </Item>
            </Navbar>
        </StyledHeader>
    );
};

Header.propTypes = {};

export { Header };
