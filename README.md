# Anima Project

# Keep Knockin' - Pixel-Perfect Website

A responsive React website built with pixel-perfect design conversion from Figma designs.

## 🎯 Features

- **Pixel-Perfect Design**: Exact color matching and positioning
- **Fully Responsive**: Mobile (320-767px), Tablet (768-1023px), Desktop (1024px+)
- **Image Placeholder System**: Easy asset replacement with numbered placeholders
- **Modern Tech Stack**: React + TypeScript + Tailwind CSS
- **Component-Based Architecture**: Modular and maintainable code
- **Semantic HTML5**: Accessible and SEO-friendly markup

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px and above

## 🖼️ Image Placeholder System

All images have been replaced with numbered placeholders for easy asset replacement:

- `image1` - Keep Knockin' Logo
- `image2` - Menu/Profile Icon
- `image3` - Decorative Arrow Icon
- `image4-image7` - Feature section images
- `image8-image10` - Profile images
- And many more...

### How to Replace Images

1. Find the placeholder in the code: `<ImagePlaceholder id="image1" .../>`
2. Replace with your actual image: `<img src="/your-image.jpg" .../>`
3. Or update the ImagePlaceholder component to load from your asset directory

## 🎨 Design System

### Colors (CSS Variables)
```css
--primary-purple: #6735bc
--primary-yellow: #d6d717  
--primary-dark: #1d1d1d
--primary-white: #ffffff
--light-purple: #e9eeff
--gray-text: #959595
```

### Typography
- Font Family: 'Poppins', sans-serif
- Weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Shadows
- Game Shadow: `4px 4px 0px 0px rgba(29, 29, 29, 1)`
- Button Shadow: `2px 2px 0px`

## Getting started

> **Prerequisites:**
> The following steps require [NodeJS](https://nodejs.org/en/) to be installed on your system, so please
> install it beforehand if you haven't already.

To get started with your project, you'll first need to install the dependencies with:

```
npm install
```

Then, you'll be able to run a development version of the project with:

```
npm run dev
```

After a few seconds, your project should be accessible at the address
[http://localhost:5173/](http://localhost:5173/)


If you are satisfied with the result, you can finally build the project for release with:

```
npm run build
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── ImagePlaceholder.tsx # Image placeholder system
│   └── ResponsiveLayout.tsx # Responsive layout utilities
├── screens/
│   └── Wireframe/          # Main page sections
│       ├── sections/       # Individual page sections
│       └── Wireframe.tsx   # Main page component
├── hooks/
│   └── useResponsive.ts    # Responsive utilities hook
├── styles/
│   └── globals.css         # Global styles and CSS variables
└── index.tsx               # App entry point
```

## 🚀 Deployment Ready

This website is completely ready for deployment with:
- Optimized build process
- Responsive design
- Clean, semantic HTML
- Modern CSS with variables
- TypeScript for type safety
