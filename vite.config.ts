import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import FullReload from 'vite-plugin-full-reload';
import RubyPlugin from 'vite-plugin-ruby';
import dotenv from 'dotenv';

dotenv.config();
const removeSlashes = (str) => str.split('/')[1];

export default defineConfig({
  base: './',
  plugins: [vue(), RubyPlugin(), FullReload(['config/routes.rb', 'app/views/**/*'], { delay: 250 })],
  resolve: {
    alias: [
      {
        find: '@/lib',
        replacement: path.resolve(__dirname, './app/frontend/components/lib/')
      },
      {
        find: '@/components',
        replacement: path.resolve(__dirname, './app/frontend/components/')
      },
      {
        find: '@/resources',
        replacement: path.resolve(__dirname, './app/frontend/resources/')
      },
      {
        find: '@/entrypoints',
        replacement: path.resolve(__dirname, './app/frontend/entrypoints')
      }
    ]
  },
  define: {
    'process.env': {
      RAILS_RELATIVE_URL_ROOT: removeSlashes(process.env.RAILS_RELATIVE_URL_ROOT || '')
    }
  }
});
