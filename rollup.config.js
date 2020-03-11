import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

function createConfig(format) {
  const dir = format === "module" ? "esm" : format;
  return {
    input: {
      moment: 'src/moment',
    },
    output: {
      dir,
      entryFileNames: `[name].min.js`,
      sourcemap: true,
      format
    },
    plugins: [commonjs(), terser()]
  };
}

export default [createConfig("module"), createConfig("system")];
