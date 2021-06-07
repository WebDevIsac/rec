const path = require('path');

module.exports = {
    siteMetadata: {
        title: 'My Recipes',
        description: 'Save your favorite recipes for easy access',
    },
    plugins: [
        'gatsby-plugin-styled-components',
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
