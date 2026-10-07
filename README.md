# ⚡ Interactive Vim Cheatsheet

A lightning-fast, reactive dark-mode Vim cheatsheet designed for developers. Built following modern frontend architectures, separating data from presentation layer state machines for instantaneous searching.

## 🚀 Tech Stack

- **Framework Core:** [Alpine.js v3](https://alpinejs.dev) (Lightweight, declarative reactivity)
- **Styling Engine:** [Tailwind CSS v4](https://tailwindcss.com) (Native CSS-first theme configuration)
- **Build System:** [Vite v5](https://vitejs.dev) (Lightning-fast HMR and production bundling)

## ✨ Features

- **Instant Filtration:** Real-time character and keyword matching parsing database rows in milliseconds.
- **Power-User Hotkeys:** 
  - Press `/` anywhere on the screen to automatically focus the search box.
  - Press `Esc` inside the search bar to instantly clear inputs and return focus.
- **Dynamic Styling:** Complete responsive mobile-first visual data grid with custom category grouping pill states.

## 📦 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org) (v22+ recommended) installed on your system.

### Local Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd vim-cheatsheet
   ```

2. **Install local dependencies:**
   ```bash
   npm install
   ```

3. **Launch the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the address displayed in your terminal (usually `http://localhost:5173`).

### Production Compilation

To bundle, minimize, and optimize your assets for distribution pipelines:
```bash
npm run build
```
The compiled, production-ready static assets will be output to the `/dist` directory.

## 📂 Project Architecture

```text
├── index.html          # Core single-page layout document container shell
├── vite.config.js      # Vite compiler plugin pipeline rules configuration
├── package.json        # Manifest file listing framework scripts & dependencies
├── src/
│   ├── input.css       # Tailwind v4 core theme styles entry directive
│   └── commands.js     # Isolated JavaScript state engine & datasets payload
```

## 📝 License

MIT
