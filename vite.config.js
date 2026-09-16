import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import chatHandler from './api/chat.js'

// https://vite.dev/config/
function localApiPlugin(apiKey) {
  return {
    name: 'local-api',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (request, response, next) => {
        if (request.method !== 'POST') {
          next()
          return
        }

        let body = ''
        for await (const chunk of request) body += chunk

        const apiResponse = {
          statusCode: 200,
          status(code) {
            this.statusCode = code
            return this
          },
          json(payload) {
            response.statusCode = this.statusCode
            response.setHeader('Content-Type', 'application/json')
            response.end(JSON.stringify(payload))
          },
        }

        try {
          await chatHandler(
            { method: request.method, body: body ? JSON.parse(body) : {}, apiKey },
            apiResponse,
          )
        } catch (error) {
          console.error('Local chat API error:', error)
          if (!response.writableEnded) {
            response.statusCode = 500
            response.setHeader('Content-Type', 'application/json')
            response.end(JSON.stringify({ error: 'Unable to process chat request' }))
          }
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  process.env.GEMINI_API_KEY = env.GEMINI_API_KEY || process.env.GEMINI_API_KEY

  return {
    plugins: [react(), tailwindcss(), localApiPlugin(env.GEMINI_API_KEY || process.env.GEMINI_API_KEY)],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  }
})
