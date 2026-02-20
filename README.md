# CuartoyMita

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-38bdf8?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-61dafb?style=for-the-badge&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern, responsive website for a café built with Next.js 16 and Tailwind CSS. Features a clean design with smooth animations, product showcase, and contact information.

**Live Site**: [https://www.cuartoymita.com/](https://www.cuartoymita.com/)

## Features

### UI & UX
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Modern UI**: Clean and professional interface built with Tailwind CSS
- **Smooth Animations**: Engaging animations powered by Framer Motion
- **Product Menu**: Interactive menu with category filtering powered by Zustand
- **Contact Section**: Easy-to-use contact information and social links
- **Custom Error Pages**: Branded 404 and error pages matching the site design

### Security
- **Security Headers**: `X-Content-Type-Options`, `X-Frame-Options` and `Referrer-Policy` configured for all routes
- **Cookie Policy**: GDPR-compliant cookie consent management

### SEO
- **Metadata**: Unique title and description for each page
- **Social Sharing**: Site-wide OpenGraph and Twitter Card
- **Sitemap & Robots**: Auto-generated `sitemap.xml` and `robots.txt`
- **Canonical URLs**: Defined on every page

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Heroicons](https://heroicons.com/), [React Icons](https://react-icons.github.io/react-icons/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Carousel**: [Swiper](https://swiperjs.com/)

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TomiNavel/CuartoyMita.git
cd CuartoyMita
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
cuartoymita/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── contacto/     # Contact page
│   │   ├── cuartoymita/  # About page
│   │   ├── menu/         # Menu page with products
│   │   ├── error.tsx     # Global error boundary
│   │   ├── not-found.tsx # Custom 404 page
│   │   └── page.tsx      # Home page
│   ├── components/       # Reusable components
│   │   ├── layout/       # Layout components
│   │   ├── svg/          # SVG components
│   │   └── ui/           # UI components
│   └── hooks/            # Custom React hooks
├── public/               # Static assets
└── package.json
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributions

Contributions are welcome! Feel free to open an issue or submit a pull request.
