# Next.js 13 Pre-Rendering & Data Fetching Project

This project demonstrates various data fetching methods and pre-rendering strategies in Next.js 13 using the Pages Router (not App Router). It showcases Static Generation (SSG), Server-Side Rendering (SSR), and client-side data fetching.

## Project Structure

```text
/pages
├── index.js # Home page with SSG
├── products
│ └── [pid].js # Dynamic product detail page with SSG
├── last-sales.js # Hybrid page with SSG + client-side fetching
├── user-profile.js # SSR example page
└── _app.js # Custom App component
/data
└── dummy-backend.json # Local JSON data file
/public # Static assets
```

## Key Features & Code Highlights

### 1. File System Operations with `fs/promises`
```javascript
import fs from 'fs/promises';
import path from 'path';

// Used to read local JSON files during build time
const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
const jsonData = await fs.readFile(filePath);
const data = JSON.parse(jsonData);

Purpose: Reads local data files during the build process for static generation

Note: fs/promises can only be used in Next.js data fetching functions, not in React components

## 2. Static Generation with getStaticProps & getStaticPaths
### getStaticProps(context) - Data fetching at build time
```javascript
export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  
  // Fetch data from local file
  const data = await getData();
  const product = data.products.find((product) => product.id === productId);
  
  if (!product) {
    return { notFound: true }; // Returns 404 page
  }
  
  return {
    props: {
      loadedProduct: product,
    },
  };
}
```

Purpose: Runs at build time to pre-render pages with data

Features demonstrated:

Accessing dynamic route parameters via context.params

Returning notFound: true for 404 pages

Passing props to page components

### getStaticPaths() - Defining dynamic routes for SSG
```javascript
export async function getStaticPaths() {
  const data = await getData();
  
  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));
  
  return {
    paths: pathsWithParams,
    fallback: true, // or 'blocking' or false
  };
}
```

Purpose: Specifies which dynamic paths should be pre-rendered at build time

Fallback options:

false: Only pre-defined paths are accessible (404 for others)

true: Non-pre-rendered paths are generated on-demand

'blocking': Similar to true but waits for HTML generation

## 3. Incremental Static Regeneration (ISR)
```javascript
return {
  props: {
    products: data.products,
  },
  revalidate: 10, // Re-generate page every 10 seconds
};
```

Purpose: Updates static content periodically without rebuilding

Behavior: Page revalidates every 10 seconds when visited

## 4. Server-Side Rendering with getServerSideProps
```javascript
export async function getServerSideProps(context) {
  const { params, req, res } = context;
  
  return {
    props: {
      username: 'Max'
    }
  };
}
```

Purpose: Runs on every request, fetching fresh data on the server

Access to request/response: Can access req and res objects

## 5. Client-Side Data Fetching with SWR
```javascript
import useSWR from "swr";

const { data, error } = useSWR(
  "https://nextjs-c81cc-default-rtdb.firebaseio.com/sales.json",
  (url) => fetch(url).then((res) => res.json())
);
```

Purpose: Fetches data on the client side after initial page load

Benefits:

Built-in caching and revalidation

Automatic refetching on focus

Error handling

Pattern used: Hybrid approach (SSG for initial data + SWR for updates)

## 6. Hybrid Data Fetching Pattern
The LastSalesPage component demonstrates a hybrid approach:

Initial data: Pre-fetched using getStaticProps during build

Real-time updates: Client-side fetching with SWR for fresh data

Smooth UX: Shows pre-rendered content immediately, updates when new data arrives

Key Concepts Demonstrated
Static Site Generation (SSG): Pages are pre-rendered at build time

Server-Side Rendering (SSR): Pages are rendered on each request

Incremental Static Regeneration: Update static pages without full rebuild

Dynamic Routes: Parameterized URLs with [pid].js syntax

Client-Side Data Fetching: Complementary data fetching after hydration

Fallback Pages: Handling non-pre-rendered paths gracefully

Redirects & 404: Programmatic navigation and error states

Dependencies
Next.js 13.0.7+

React 18.2.0+

SWR (not in package.json but used in code - would need installation)

Data Flow
Build Time:

getStaticPaths defines which product pages to generate

getStaticProps fetches data for each product page

HTML files are generated and stored

Request Time (SSR):

getServerSideProps runs for each request

Fresh data is fetched on the server

Client-Side:

SWR handles subsequent data updates

Components can fetch additional data as needed
