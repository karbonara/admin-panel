import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config';
// функиця для создания массива с загрузчиками webpack 
export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => Boolean(resourcePath.match('.module.')),
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
          }
        }
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  return [
    typescriptLoader,
    cssLoader,
    svgLoader,
    fileLoader
  ];
}