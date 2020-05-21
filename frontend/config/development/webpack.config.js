const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    devtool: 'inline-source-map',
    mode: 'development',
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
            loader: 'babel-loader'
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
    ]
}