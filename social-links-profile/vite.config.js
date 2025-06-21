import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        host: '0.0.0.0', // Allows access from any device on the network
        port: 5173, // Ensure the port matches the one you're trying to access
    }
})