import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AspectWrapper } from './AspectWrapper';

const Wrapper = styled('div')`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    height: 100%;
    width: 100%;
`;

const Card = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Recipes = ({ recipes }) => {
    if (!recipes.length) {
        return null;
    }

    return (
        <Wrapper>
            {recipes.map(recipe => (
                <AspectWrapper>
                    <Card>
                        <h3>Hej</h3>
                        <span>Testkort {recipe}</span>
                    </Card>
                </AspectWrapper>
            ))}
        </Wrapper>
    );
};

Recipes.propTypes = {};

export { Recipes };
