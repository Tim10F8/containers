import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        react({
            include: ['**/*.jsx', '**/*.svg']
        })
    ],
    cacheDir: process.env.TMPDIR || '/tmp/.vite',
    server: {
        host: '0.0.0.0', // Allow external access
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://backend:5000',
                changeOrigin: true
            }
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@constants': path.resolve(__dirname, './src/constants'),
            '@ui': path.resolve(__dirname, './src/components/ui'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@logo': path.resolve(__dirname, './src/assets/logo'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@api': path.resolve(__dirname, './src/api')
        }
    }
});