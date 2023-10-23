import webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildPaths } from './config/build/types/config'
import path from 'path'

export default (env: BuildEnv) => {
  // переменные окружения для сборки приложения
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }

  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  const PORT = env.port || 3000

  // конфигурация webpack для сборки приложения в зависимости от переменных окружения
  const config: webpack.Configuration = buildWebpackConfig({
    mode: mode,
    path: paths,
    isDev: isDev,
    port: PORT,
  })

  return config
}
