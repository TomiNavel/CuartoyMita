# CuartoyMita

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18.2-61dafb?style=for-the-badge&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern, responsive website for a café built with Next.js 14 and Tailwind CSS. Features a clean design with smooth animations, product showcase, and contact information.

**Live Site**: [https://www.cuartoymita.com/](https://www.cuartoymita.com/)

## Features

- **Responsive Design**: Fully responsive layout optimized for all devices
- **Modern UI**: Clean and professional interface built with Tailwind CSS
- **Smooth Animations**: Engaging animations powered by Framer Motion
- **Product Menu**: Interactive menu with category filtering
- **Contact Section**: Easy-to-use contact information and social links
- **Cookie Policy**: GDPR-compliant cookie consent management

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Heroicons](https://heroicons.com/), [React Icons](https://react-icons.github.io/react-icons/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Carousel**: [Swiper](https://swiperjs.com/)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TomiNavel/CuartoyMita.git
cd CuartoyMita
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.


## Project Structure

```
cuartoymita/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── contacto/     # Contact page
│   │   ├── cuartoymita/  # About page
│   │   ├── menu/         # Menu page with products
│   │   └── page.tsx      # Home page
│   ├── components/       # Reusable components
│   │   ├── layout/       # Layout components
│   │   ├── svg/          # SVG components
│   │   └── ui/           # UI components
│   └── hooks/            # Custom React hooks
├── public/               # Static assets
└── package.json
```


### Production Build

```bash
npm run build
npm run start
```

## License

MIT License

Copyright (c) 2025 CuartoyMita

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
## Contributions

Contributions are welcome! Feel free to open an issue or submit a pull request.

