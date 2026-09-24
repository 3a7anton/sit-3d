# School of Integrated Thoughts (SIT) - 3D Interactive Web Portal

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/schoolofintegratedthoughtsbd/deploy-status)](https://schoolofintegratedthoughtsbd.netlify.app)

> Official institutional portal for **School of Integrated Thoughts (SIT)** — an Islamic educational institution integrating knowledge across curriculum development, advanced research, publications, and consultancy.

---

## 🌐 Live Demo

Visit the live website at:  
👉 **[https://schoolofintegratedthoughtsbd.netlify.app](https://schoolofintegratedthoughtsbd.netlify.app)**

---

## ✨ Features

- 🌌 **Immersive 3D Interactive Experience**: Rendered with **OGL** and fluid animations powered by **GSAP** and **Motion**.
- ⚡ **Modern Architecture**: Built on **Next.js 15** (App Router) and **React 19** for blazing-fast performance.
- 🎨 **Sleek Aesthetic Design**: Responsive, modern dark/light styling with **Tailwind CSS v4**.
- 🤖 **AI Integration**: Powered by Google Gemini via `@google/genai` for intelligent institutional features.
- 📱 **Fully Responsive**: Seamless user experience across mobile, tablet, and desktop devices.
- 🚀 **Continuous Deployment**: Ready for seamless hosting and deployment on **Netlify**.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), [PostCSS](https://postcss.org/)
- **3D & Graphics**: [OGL](https://github.com/oframe/ogl)
- **Animations**: [GSAP](https://greensock.com/gsap/), [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI SDK**: [Google Gen AI SDK (`@google/genai`)](https://www.npmjs.com/package/@google/genai)
- **Deployment**: [Netlify](https://www.netlify.com/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.x or v20.x recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/3a7anton/sit-3d.git
   cd sit-3d
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy the example environment file and add your credentials:
   ```bash
   cp .env.example .env.local
   ```
   Add your Google Gemini API key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

5. **Build for Production:**
   ```bash
   npm run build
   npm run start
   ```

---

## 👤 Author

- **Abu Ahad Anton**
  - GitHub: [@3a7anton](https://github.com/3a7anton) (Git ID: `37anton` / `3a7anton`)

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).  
Copyright (c) 2026 Abu Ahad Anton.
