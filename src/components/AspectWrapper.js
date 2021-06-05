import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled('div')`
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: 100%;

    &:after {
        content: '';
        display: block;
        width: 100%;
        padding-bottom: ${({ ratio }) => `calc(100% / ${ratio})`};
    }
`;

const Div = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const AspectWrapper = ({ children, ratio }) => {
    console.log(ratio);
    return (
        <Wrapper ratio={ratio}>
            <Div>{children}</Div>
        </Wrapper>
    );
};

AspectWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    ratio: PropTypes.number,
};

AspectWrapper.defaultProps = {
    ratio: 1,
};

export { AspectWrapper };
