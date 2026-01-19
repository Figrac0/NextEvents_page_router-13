# NextEvents - Events Platform

## Project Overview

NextEvents is a modern, full-featured event management platform built with Next.js using the Pages Router architecture. The application allows users to discover, browse, and book tickets for various events while providing event organizers with tools to showcase their events effectively.


<p align="center">
  <img src="https://github.com/Figrac0/NextEvents_page_router-13/blob/main/public/main.gif" alt="Project Demo GIF - Full Application Walkthrough" width="800"/><br/>
</p>

---

<p align="center">
  <img src="https://github.com/Figrac0/NextEvents_page_router-13/blob/main/public/1.png" alt="Home Page - NextNews Landing" width="300" /><br/>
</p>

---

<p align="center">
  <img src="https://github.com/Figrac0/NextEvents_page_router-13/blob/main/public/2.png" alt="News Listing - Article Grid View" width="300" /><br/>
</p>

---

<p align="center">
  <img src="https://github.com/Figrac0/NextEvents_page_router-13/blob/main/public/3.png" alt="Article Detail - Full Content View" width="300" /><br/>
</p>

---

<p align="center">
  <img src="https://github.com/Figrac0/NextEvents_page_router-13/blob/main/public/4.png" alt="Archive Filtering - Year/Month Navigation" width="400" /><br/>
</p>

---

<p align="center">
  <img src="https://github.com/Figrac0/NextEvents_page_router-13/blob/main/public/5.png" alt="Modal Image View - Intercepted Route" width="400" /><br/>
</p>

---

## Key Features

- **Event Discovery**: Browse events by category, date, and price range
- **Event Details**: Comprehensive event pages with logistics, speakers, and ticket selection
- **Ticket Management**: Interactive ticket selector with multiple ticket types
- **Responsive Design**: Fully responsive layout for desktop, tablet, and mobile
- **Search & Filtering**: Advanced search functionality with multiple filters
- **Related Events**: Smart suggestions for similar events
- **Featured Events**: Curated selection of premium events on the homepage

## Pages Router Architecture

This project utilizes Next.js **Pages Router** architecture, which is the original and most straightforward routing system in Next.js. Here's how it's implemented in this project:

### Directory Structure

```text
pages/
├── index.js # Home page (/)
├── _app.js # Custom App component
├── events/
│ ├── index.js # All events listing (/events)
│ ├── [eventId].js # Dynamic event detail page (/events/:id)
│ └── [...slug].js # Catch-all route for filtered events (/events/filter/:year/:month)
```

### Key Pages Router Concepts Used

1. **File-based Routing**: Routes are created based on the file structure in the `pages` directory
2. **Dynamic Routes**: Using brackets `[]` for dynamic segments:
   - `[eventId].js` → `/events/1`, `/events/2`, etc.
   - `[...slug].js` → `/events/2024/08`, `/events/filter/params`, etc.
3. **Custom App Component**: `_app.js` wraps all pages with the Layout component
4. **Static Generation**: All pages use client-side data fetching with `useState` and `useEffect`
5. **API Routes**: Not used in this project (all data comes from dummy-data.js)

### Routing Patterns

- **Home Page**: `pages/index.js` → `/`
- **Events List**: `pages/events/index.js` → `/events`
- **Event Detail**: `pages/events/[eventId].js` → `/events/:id`
- **Filtered Events**: `pages/events/[...slug].js` → `/events/:year/:month`

### Data Fetching Strategy

The project uses client-side data fetching with:
- `useState` for state management
- `useEffect` for data loading
- `useRouter` for accessing route parameters
- Static data from `dummy-data.js` simulating API responses

### Navigation

Navigation is implemented using:
- Next.js `Link` component for client-side navigation
- `useRouter` hook for programmatic navigation
- Breadcrumb navigation in event detail pages

### SEO Features

- Next.js `Head` component for page-specific metadata
- Dynamic page titles based on content
- Semantic HTML structure
- Open Graph meta tags (can be extended)

## Project Structure

```text
components/
├── event-detail/ # Event detail page components
├── events/ # Events listing components
├── home/ # Homepage components
├── icons/ # SVG icon components
├── layout/ # Layout components (Header, Footer)
└── ui/ # Reusable UI components

pages/
├── events/ # Events-related pages
├── _app.js # Root app component
└── index.js # Homepage

public/ # Static assets
styles/ # Global CSS styles
dummy-data.js # Mock data for the application
```

## Why Pages Router?

This project utilizes the **Pages Router** architecture for several key reasons:

### 🛡️ **Stability and Maturity**
- **Well-established**: Pages Router has been part of Next.js since its inception
- **Extensive documentation**: Comprehensive resources and community knowledge base
- **Proven in production**: Used by thousands of production applications

### 📁 **Simple File-Based Routing**
- **Intuitive structure**: Routes map directly to file system (`pages/about.js` → `/about`)
- **Easy to understand**: Developers quickly grasp the routing pattern
- **Minimal configuration**: Works out-of-the-box without complex setup

### 🎯 **Project Suitability**
- **Feature requirements**: This project doesn't need advanced App Router features like:
  - React Server Components
  - Nested layouts
  - Streaming
  - Advanced data fetching patterns
- **Simpler data flow**: Client-side data fetching with `useEffect` and `useState` is sufficient
- **Static content**: Event pages are well-suited for traditional page-based architecture

### 🔙 **Backward Compatibility**
- **Existing knowledge**: Leverages familiar React patterns
- **Easy migration path**: Can be upgraded to App Router incrementally if needed
- **Community support**: Large ecosystem of libraries and examples

### ⚡ **Development Speed**
- **Quick prototyping**: Fast to set up and start building
- **Less complexity**: Fewer concepts to learn for developers new to Next.js
- **Immediate feedback**: Changes are reflected instantly during development

### 🎓 **Educational Value**
- **Foundation first**: Teaches core Next.js concepts before advanced patterns
- **Clear separation**: Easy to distinguish between pages and components
- **Progressive learning**: Can transition to App Router after mastering Pages Router

## When to Choose Pages Router vs. App Router

### Choose **Pages Router** when:
- Building a traditional multi-page application
- You don't need React Server Components
- Your team is familiar with classic React patterns
- You want simpler, file-based routing
- You're migrating an existing React app to Next.js

### Choose **App Router** when:
- You need React Server Components
- You want nested layouts
- You need streaming or suspense boundaries
- You're building a complex, data-intensive application
- You want the latest Next.js features

## Learn More

To dive deeper into Next.js Pages Router, explore these resources:

### 📚 **Official Documentation**
- [Next.js Pages Router Documentation](https://nextjs.org/docs/pages/building-your-application/routing)
- [Dynamic Routes in Pages Router](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes)
- [API Routes in Pages Router](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)

### 🎥 **Learning Resources**
- [Next.js Official Tutorial](https://nextjs.org/learn/foundations/about-nextjs)
- [Pages Router Examples](https://github.com/vercel/next.js/tree/canary/examples)
- [Community Forums](https://github.com/vercel/next.js/discussions)

### 🔄 **Migration Guides**
- [App Router Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)
- [Comparing Pages and App Router](https://nextjs.org/docs/app/building-your-application/upgrading)

### 🛠️ **Tools and Utilities**
- [Next.js CLI](https://nextjs.org/docs/pages/api-reference/cli)
- [Next.js Config Reference](https://nextjs.org/docs/pages/api-reference/next-config-js)
- [Error Handling in Pages Router](https://nextjs.org/docs/pages/building-your-application/routing/custom-error)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

