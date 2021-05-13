import * as React from 'react';
import { Link } from 'gatsby';
import { Layout } from 'components/Layout';

const NotFoundPage = () => {
    return (
        <div>
            <p>Kunde inte hitta sidan</p>
            <Link to="/">Gå till startsidan</Link>
        </div>
    );
};

NotFoundPage.Layout = Layout;

export default NotFoundPage;
