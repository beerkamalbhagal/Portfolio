import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

let process;
export default defineConfig(({ command }) => ({
    plugins: [react(), tailwindcss()],
    base: process.env.VITE_BASE_PATH || "/Portfolio/",
}))
