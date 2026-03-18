# Bright Future Academy - Netlify Deployment Guide

This project is a React Single Page Application (SPA) built with Vite and Tailwind CSS. It features an AI Chatbot powered by Google's Gemini API.

## Deployment Steps

### 1. Connect to Netlify
- Push your code to a GitHub, GitLab, or Bitbucket repository.
- Log in to [Netlify](https://www.netlify.com/) and click **"Add new site"** > **"Import an existing project"**.
- Select your repository.

### 2. Configure Build Settings
Netlify should automatically detect the settings from `netlify.toml`, but if not, use:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

### 3. Set Environment Variables
The AI Chatbot requires a Gemini API Key.
- Go to **Site Configuration** > **Environment variables**.
- Add a new variable:
  - **Key:** `VITE_GEMINI_API_KEY` (or `GEMINI_API_KEY`)
  - **Value:** Your Google Gemini API Key (Get one at [aistudio.google.com](https://aistudio.google.com/)).

### 4. Deploy
- Click **"Deploy site"**. Netlify will build and host your application.

## Why these files were added?
- `netlify.toml`: Configures the build process and handles client-side routing (redirecting all paths to `index.html`).
- `public/_redirects`: A fallback for Netlify's routing if `netlify.toml` is not used.
- `vite.config.ts`: Configured to bake the `VITE_GEMINI_API_KEY` or `GEMINI_API_KEY` into the client-side code during the build process.
