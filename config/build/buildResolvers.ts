import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";
// функция для создания объекта с настройками для разрешения путей в проекте
export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.path.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  };
}