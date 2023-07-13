import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'
import BundleAnalyzerPlugin from 'webpack-bundle-analyzer'

// функция для создания массива с плагинами webpack 
export function buildPlugins({ path }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: path.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin.BundleAnalyzerPlugin(),
  ]
}
