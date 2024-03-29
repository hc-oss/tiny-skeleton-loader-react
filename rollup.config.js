import commonjs from "@rollup/plugin-node-resolve";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import url from "rollup-plugin-url";

import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    postcss({
      modules: true,
      minimize: true
    }),
    url(),
    resolve(),
    typescript({
      clean: true,
    }),
    commonjs(),
  ],
};
