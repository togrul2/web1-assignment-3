import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: "",
  resolve: {
    alias: [
      {
        find: "@",
        replacement : path.resolve(__dirname, './src')
      }
    ]
  },
  plugins: [react()],
});
