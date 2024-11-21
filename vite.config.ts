import { resolve } from 'path';
import preserveDirectives from 'rollup-preserve-directives';
import { defineConfig, Plugin } from 'vite';
import { copyFileSync } from 'node:fs';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    preserveDirectives() as Plugin,
    dts({
      include: 'src',
      exclude: ['**/*.stories.tsx'],
      insertTypesEntry: true,
      rollupTypes: true,
      afterBuild: () => {
        copyFileSync('dist/index.d.cts', 'dist/index.d.mts');
      },
    }),
    tsconfigPaths(),
  ],
  build: {
    copyPublicDir: false,
    minify: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'mjs' : format}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: {
        preserveModules: true,
      },
    },
  },
});
