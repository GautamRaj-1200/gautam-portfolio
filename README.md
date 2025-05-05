# 🚀 React + Vite Portfolio Template

A modern, responsive portfolio template built with React, Vite, and TailwindCSS to showcase your projects, skills, and experience.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)

## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/salehkhatri/portfolio_template.git
cd portfolio_template
```

### 2. Install dependencies

Using npm:

```bash
npm install
```

Or, using yarn:

```bash
yarn
```

Or, using pnpm:

```bash
pnpm install
```

### 3. Start development server

```bash
npm run dev
```

This will start the development server at `http://localhost:5173` (or another port if 5173 is already in use).

## 📝 Configuration

### Customizing Your Portfolio

All your personal information and portfolio content is managed through a single configuration file located at `src/config/portfolio.json`.

Edit this file to add your personal details, project information, skills, and work experience.

Here's a full example of the `portfolio.json` file:

```json
{
  "personal": {
    "name": "John Doe",
    "role": "Full Stack Developer",
    "description": "I build exceptional and accessible digital experiences for the web.",
    "avatar": "/avatar.jpg",
    "location": "New York, USA",
    "email": "john@example.com",
    "socials": [
      {
        "platform": "GitHub",
        "url": "https://github.com/johndoe"
      },
      {
        "platform": "LinkedIn",
        "url": "https://linkedin.com/in/johndoe"
      },
      {
        "platform": "Twitter",
        "url": "https://twitter.com/johndoe"
      }
    ]
  },
  "about": {
    "title": "About Me",
    "description": "With a passion for both technology and design, I develop scalable, high-performance applications that captivate users and drive success.",
    "resume": "/resume.pdf"
  },
  "projects": [
    {
      "title": "Project One",
      "description": "A brief description of your project. This project demonstrates how to build a simple web application using React and TypeScript.",
      "tags": ["React", "TypeScript", "TailwindCSS"],
      "image": "https://placehold.co/600x400?text=Project+One",
      "url": "https://project1.com",
      "github": "https://github.com/username/project1"
    }
  ],
  "skills": [
    { "name": "React" },
    { "name": "Node.js" },
    { "name": "Python" },
    { "name": "Java" },
    { "name": "JavaScript" },
    { "name": "HTML" },
    { "name": "CSS" },
    { "name": "Git" },
    { "name": "Figma" },
    { "name": "Sketch" },
    { "name": "Adobe XD" }
  ],
  "experience": [
    {
      "company": "Health Pulse Connect",
      "role": "Frontend Developer Intern",
      "startDate": "May 2024",
      "endDate": "June 2024",
      "responsibilities": [
        "Developed and maintained a health sector startup, implementing real-time chat and video call features with WebSockets.",
        "Used Redux for state management and API integration, improving application performance.",
        "Enhanced the web app's UI for a better user experience."
      ]
    },
    {
      "company": "Tech Innovations Inc.",
      "role": "Software Engineer Intern",
      "startDate": "June 2023",
      "endDate": "August 2023",
      "responsibilities": [
        "Collaborated with the backend team to integrate APIs into the frontend using React.",
        "Improved the scalability of the product by optimizing React component rendering.",
        "Implemented automated unit tests using Jest to ensure the robustness of the application."
      ]
    },
    {
      "company": "Creative Solutions Ltd.",
      "role": "UI/UX Designer Intern",
      "startDate": "January 2023",
      "endDate": "April 2023",
      "responsibilities": [
        "Designed user-friendly interfaces for mobile and web applications using Figma.",
        "Collaborated with the development team to ensure smooth handoff and implementation of designs.",
        "Conducted user research and usability testing to improve the overall user experience."
      ]
    }
  ]
}
```

### Adding Your Assets

Place your avatar image, resume PDF, and other assets in the `public` folder and reference them in your configuration file.

## 🏗️ Building for Production

When you're ready to build your portfolio for production, run:

```bash
npm run build
```

This will generate optimized production files in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🚀 Deployment

### Netlify

1. Create a new site in Netlify
2. Connect to your GitHub repository
3. Set the build command to `npm run build`
4. Set the publish directory to `dist`

### Vercel

1. Install Vercel CLI (optional):

   ```bash
   npm install -g vercel
   ```

2. Deploy using Vercel CLI:

   ```bash
   vercel
   ```

   Or, simply connect your GitHub repository through the Vercel dashboard.

## 🔧 Customization

### Styling

This template uses TailwindCSS for styling. The theme is already customized with elegant typography and colors:

```javascript
import defaultTheme from "tailwindcss/defaultTheme.js";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Clash Display for hero/headlines
        display: ["Clash Display", ...defaultTheme.fontFamily.sans],
        // Cabinet Grotesk for titles/subheadings
        title: ["Cabinet Grotesk", ...defaultTheme.fontFamily.sans],
        // General Sans for body text
        sans: ["General Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          // Rich black with slight warmth
          DEFAULT: "#111111",
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      // Extended line heights for better typography
      lineHeight: {
        relaxed: "1.75",
        loose: "2",
      },
      // Custom letter spacing
      letterSpacing: {
        snug: "-0.015em",
        medium: "0.015em",
        wide: "0.025em",
      },
    },
  },
  plugins: [],
};
```

You can further customize this configuration to match your personal brand or preferences.

### Components

All components are located in the `src/components` directory. You can modify them to suit your needs or create new ones.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

Made with ❤️ by [salehkhatri.tech](https://salehkhatri.tech)

Don't forget to follow me on [Twitter](https://twitter.com/salehdotdev) for updates and web development tips!
