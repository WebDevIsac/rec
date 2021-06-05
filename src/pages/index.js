import React from 'react';
import { Link } from 'gatsby';
import { Layout } from 'components/Layout';
import { Recipes } from 'components/Recipes';
import { PageWrapper } from 'components/PageWrapper';

// markup
const StartPage = () => {
    return (
        <PageWrapper>
            <h1>Startsida</h1>
            <Recipes recipes={[1, 2, 3, 1, 2, 3, 1, 2, 3, 1]} />
        </PageWrapper>
    );
};

StartPage.Layout = Layout;

export default StartPage;
