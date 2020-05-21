const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'production',
    entry: {
    webpack: './src/javascripts/entry.js'
    },
    output: {
        path: '/Users/tu/Prac/APL/app/assets/javascripts',
        filename: '[name].js'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
            presets: [
                "@babel/preset-env"
            ]
            }
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader']
        },
        {
            test: /\.scss$/,
            use: [
            'vue-style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
            },
            ],
        }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
        },
    },
    plugins: [
        new VueLoaderPlugin()
    ],
}