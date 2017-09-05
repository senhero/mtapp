var path = require('path')
var webpack = require('webpack')

const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!postcss-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!postcss-loader!sass-loader?indentedSyntax'
                    },
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                loader: "style-loader!css-loader!postcss-loader!sass-loader"
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 8089,
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                },{
                    loader: 'expose-loader',
                    options: '$'
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.css', '.vue', '.scss'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            "@": path.resolve(__dirname, 'src/')
        }
    },
    devServer: {
        // host:'http://172.160.0.132',
        host: "0.0.0.0",
        historyApiFallback: true,
        noInfo: false,
        port: 8081,
        hot: true,
        inline: true,
        proxy: {
          '/api': {
            target: '',
            secure: false
          }
        }
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
    plugins: [
        // require('autoprefixer')({ /* ...options */ }),
        // new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            file: 'index.html',
            template: "index.html",
            inject:"body"
        }),
        // 
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function() {
                    return [
                        require("autoprefixer")({
                            browsers: ['ie>=8', '>1% in CN']
                        })
                    ]
                }
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery':'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}