import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./index.tsx", "./index.ts"],
  sourcemap: true,
  clean: true,
  dts: true,
  format: ["cjs"],
});
