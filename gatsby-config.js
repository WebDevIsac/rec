const path = require('path');

module.exports = {
    siteMetadata: {
        title: 'My Recipes',
    },
    plugins: [
        'gatsby-plugin-styletron',
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                src: path.join(__dirname, 'src'),
                pages: path.join(__dirname, 'src/pages'),
                components: path.join(__dirname, 'src/components'),
            },
        },
    ],
};
