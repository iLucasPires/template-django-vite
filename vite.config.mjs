import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    outDir: "static/dir", // Caminho relativo à raiz do projeto
    emptyOutDir: true, // Limpa o diretório de saída antes de construir
    manifest: true,

    rollupOptions: {
      input: "static/input.js",
    },
  },

  server: {
    port: 3000,
    proxy: {
      "/api": "http://127.0.0.1:8000", // Redireciona as requisições API para o backend Django
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      bootstrap: path.resolve(__dirname, "node_modules/bootstrap"), // Resolvendo o caminho para o Bootstrap
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "bootstrap/scss/bootstrap";`, // Importa globalmente o Bootstrap para todos os arquivos SCSS
      },
    },
  },
});
