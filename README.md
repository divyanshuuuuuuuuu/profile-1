# Modern Portfolio Website

A stunning, interactive portfolio website built with React, featuring 3D animations, smooth transitions, and a modern dark-themed design.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite)
![Three.js](https://img.shields.io/badge/Three.js-0.160.0-black?style=for-the-badge&logo=three.js)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern Dark Theme** - Sleek, professional design with vibrant accents
- 🎭 **3D Animations** - Interactive Three.js scenes powered by React Three Fiber
- 💫 **Shatter Text Effect** - Eye-catching text animations with custom ShatterText component
- 🎬 **Smooth Transitions** - Fluid animations using Framer Motion
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎯 **Interactive UI** - Engaging user experience with hover effects and micro-animations

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.2.0
- **Build Tool:** Vite 5.0.8
- **3D Graphics:** Three.js 0.160.0 with React Three Fiber & Drei
- **Animations:** Framer Motion 10.16.16
- **Styling:** Tailwind CSS 3.4.0
- **Icons:** Lucide React 0.303.0

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/divyanshuuuuuuuuu/profile.git
   cd profile
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🚀 Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` folder.

## 📂 Project Structure

```
anti/
├── src/
│   ├── components/
│   │   ├── About.jsx          # About section component
│   │   ├── Contact.jsx        # Contact form component
│   │   ├── Hero.jsx           # Hero section with animations
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Projects.jsx       # Projects showcase
│   │   ├── ShatterText.jsx    # Custom text shatter animation
│   │   ├── ThreeScene.jsx     # 3D scene component
│   │   └── ThemeToggle.css    # Theme toggle styles
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles
├── public/                    # Static assets
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── package.json               # Project dependencies

```

## 🎨 Components Overview

### ShatterText
A custom component that creates a stunning text shatter animation effect, breaking text into individual letters that scatter and reassemble.

### ThreeScene
Interactive 3D scene built with Three.js and React Three Fiber, adding depth and visual interest to the portfolio.

### Hero Section
Eye-catching landing section with animated text and smooth transitions.

### Projects Showcase
Display your work with beautiful cards and hover effects.

## 🌐 Deployment

This project can be easily deployed to:

- **Netlify:** Connect your GitHub repo and deploy automatically
- **Vercel:** Import your GitHub repository for instant deployment
- **GitHub Pages:** Use `gh-pages` branch for hosting

### Deploy to Netlify (Recommended)

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

## 📝 Customization

1. **Update Content:** Modify the component files in `src/components/` to add your own information
2. **Change Colors:** Edit `tailwind.config.js` to customize the color scheme
3. **Add Projects:** Update `Projects.jsx` with your own work
4. **Modify 3D Scene:** Customize `ThreeScene.jsx` to create unique 3D experiences

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Divyanshu**

- GitHub: [@divyanshuuuuuuuuu](https://github.com/divyanshuuuuuuuuu)

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Built with ❤️ using React, Three.js, and modern web technologies
