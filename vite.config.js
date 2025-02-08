import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [laravel({
        input: ['resources/css/app.css', 'resources/js/app.js'],
        refresh: true,
    })],
    server: {
        hmr: {
            host: 'laravel-app-deploy-64zki8pnk-christophers-projects-92ace75d.vercel.app',
            protocol: 'wss',
        },
    },
});