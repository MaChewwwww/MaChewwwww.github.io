# 🌟 Modern Portfolio - React & Tailwind CSS

A sleek, responsive portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Features a modern dark theme with blue accents, perfect for developers and creative professionals.

## 🚀 Live Demo

Visit the live portfolio: [https://MaChewwwww.github.io/Portfolio](https://MaChewwwww.github.io/Portfolio)

## ✨ Features

- **Modern React Setup**: Built with React 19, TypeScript, and Vite for lightning-fast development
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Responsive Design**: Mobile-first approach that works on all devices
- **Dark Theme**: Professional dark & blue modern theme with elegant gradients
- **GitHub Pages Ready**: Automatic deployment with GitHub Actions
- **Performance Optimized**: Fast loading times and optimized bundle size
- **Accessibility**: Built with accessibility best practices in mind

## 🎨 Design System

### Dark & Blue Modern Theme

A modern, high-contrast design system with **deep blues**, **soft gradients**, and **accent highlights** in cyan and indigo. Suitable for **dashboards**, **developer tools**, and **creative apps** where clarity and style matter.

#### Color Palette

| Role          | Color                         | Usage                                                  |
| ------------- | ----------------------------- | ------------------------------------------------------ |
| Primary       | `#0EA5E9` (Sky Blue)         | Key actions, CTAs, and highlights                      |
| Primary Dark  | `#0284C7` (Sky 600)          | Hover/active state for primary elements               |
| Accent        | `#6366F1` (Indigo 500)       | Secondary emphasis and variety                         |
| Background    | `#06090F` (Navy Black)       | Deep backdrop for main content                         |
| Surface       | `rgba(255,255,255,0.03)`     | Card & panel backgrounds                               |
| Muted Border  | `rgba(255,255,255,0.06)`     | Subtle separators and borders                          |
| Glow Effect   | `rgba(14,165,233,0.12)`      | Shadows/glows for primary elements                     |

#### Typography

- **Font Family**: System fonts (optimized for performance)
- **Font Weights**:
  - Regular (400) for body text
  - Medium (500–600) for headings
  - Bold (700–800) for hero titles
- **Responsive Typography**: Fluid scaling across devices

#### UI Components

##### Buttons
- **Primary**: Gradient backgrounds with glow effects
- **Secondary**: Solid colors with hover transitions
- **Ghost**: Transparent with subtle borders

##### Cards & Surfaces
- Semi-transparent backgrounds
- Subtle borders and shadows
- Rounded corners (8–14px)
- Smooth hover animations

##### Navigation
- Sticky header with backdrop blur
- Smooth scroll navigation
- Active state indicators

## 🛠️ Tech Stack

- **[React 19](https://react.dev/)** - UI framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[ESLint](https://eslint.org/)** - Code linting

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/MaChewwwww/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit `http://localhost:5173/Portfolio/` to see your portfolio in action!

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm run deploy` | Deploy to GitHub Pages |

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

The portfolio automatically deploys to GitHub Pages when you push to the `main` branch. The GitHub Actions workflow is configured in `.github/workflows/deploy.yml`.

### Manual Deployment

```bash
npm run deploy
```

This builds the project and deploys it to the `gh-pages` branch.

## 🎯 Customization

### Update Your Information

1. **Personal Details**: Edit `src/App.tsx` to update your name, bio, and contact information
2. **Projects**: Modify the projects section to showcase your work
3. **Contact Links**: Update social media and contact links
4. **Styling**: Customize colors and styling in `tailwind.config.js`

### Adding New Sections

The portfolio is built with modular sections. To add new sections:

1. Create a new section in `src/App.tsx`
2. Add navigation link in the header
3. Style with Tailwind CSS classes

### Tailwind Configuration

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: '#0EA5E9',
      primaryDark: '#0284C7', 
      accent: '#6366F1',
      surface: 'rgba(255,255,255,0.03)',
      mutedBorder: 'rgba(255,255,255,0.06)',
    },
    boxShadow: {
      glow: '0 6px 24px rgba(14,165,233,0.12)',
    },
    borderRadius: {
      sm: '8px',
      DEFAULT: '14px',
    },
  },
}
```

## 📁 Project Structure

```
Portfolio/
├── public/                 # Static assets
├── src/
│   ├── App.tsx            # Main portfolio component
│   ├── index.css          # Tailwind CSS imports
│   └── main.tsx           # App entry point
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment
├── index.html             # HTML template
├── package.json           # Dependencies & scripts
├── tailwind.config.js     # Tailwind configuration
├── vite.config.ts         # Vite configuration
└── README.md              # This file
```

## 🎨 Design Guidelines

### Interaction & States

- **Hover**: Subtle brightness increase (`filter: brightness(105%)`)
- **Active**: Darker variants of primary colors
- **Focus**: Glow outline in primary color
- **Disabled**: Reduced opacity (40%) with no shadow effects

### Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- **GitHub**: [@MaChewwwww](https://github.com/MaChewwwww)
- **Portfolio**: [https://MaChewwwww.github.io/Portfolio](https://MaChewwwww.github.io/Portfolio)

---

⭐ **Star this repo if you find it helpful!**

Made with ❤️ and ☕ by [Your Name]

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
