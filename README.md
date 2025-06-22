# 🏢 HR Tasks Hub

> A modern, intuitive task management system designed specifically for Human Resources teams to streamline workflows and boost productivity.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=netlify)](https://cosmic-naiad-705379.netlify.app/)
[![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Vue.js** | Frontend Framework | Latest |
| **Vite** | Build Tool & Dev Server | Latest |
| **Tailwind CSS** | Utility-First CSS Framework | v3.x |
| **JavaScript** | Programming Language | ES6+ |

## 📁 Project Structure

```
hr-tasks-hub/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, and other assets
│   ├── components/        # Reusable Vue components
│   │   ├── layout/       # Layout-related components
│   │   └── tasks/        # Task-specific components
│   ├── data/             # Mock data and API configurations
│   │   └── mockData.js   # Sample HR task data
│   ├── router/           # Vue Router configuration
│   │   └── index.js      # Route definitions
│   ├── views/            # Page-level Vue components
│   │   └── HRTasksHub.vue # Main HR dashboard view
│   ├── App.vue           # Root Vue component
│   ├── main.js           # Application entry point
│   └── style.css         # Global styles and Tailwind imports
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
└── README.md            # Project documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd hr-tasks-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🎨 Customization

### Tailwind CSS Configuration
The project uses Tailwind CSS v3 for styling. Customize the design system by modifying:
- `tailwind.config.js` - Theme configuration, colors, spacing
- `src/style.css` - Global styles and custom CSS classes

### Adding New Features
1. Create new Vue components in `src/components/`
2. Add new routes in `src/router/index.js`
3. Create new views in `src/views/`
4. Update mock data in `src/data/mockData.js`

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured dashboard experience
- **Tablet**: Touch-friendly interface with optimized layouts
- **Mobile**: Streamlined mobile experience for on-the-go access

## 🔧 Configuration Files

- **`vite.config.js`**: Vite build tool configuration
- **`tailwind.config.js`**: Tailwind CSS framework configuration
- **`package.json`**: Project dependencies and scripts
- **`postcss.config.js`**: PostCSS configuration for Tailwind

## 🌐 Deployment

The application is deployed on Netlify and automatically builds from the main branch.

**Live Demo**: [https://cosmic-naiad-705379.netlify.app/](https://cosmic-naiad-705379.netlify.app/)
