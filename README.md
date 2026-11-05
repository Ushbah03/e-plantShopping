# e-plantShopping - Paradise Nursery Shopping Cart Application

Welcome to **e-plantShopping**, an online houseplant shopping web application for **Paradise Nursery** — where green meets serenity! This application is designed to give plant lovers a seamless shopping experience, from browsing a diverse selection of houseplants categorized by purpose to managing a live, interactive shopping cart with Redux state management.

Repository Name: `e-plantShopping`

---

## 🌿 Project Overview

**Paradise Nursery** offers a curated collection of houseplants tailored to enhance the beauty, air quality, and atmosphere of any home or workspace. The **e-plantShopping** application features an inviting landing page, a categorised plant catalogue, dynamic cart badge counters, and a full shopping cart page with quantity management and order summaries.

---

## ✨ Features

- **Landing Page (`App.jsx`, `App.css`)**:
  - Immersive background greenhouse image with atmospheric styling.
  - Welcome greeting: *"Welcome To Paradise Nursery - Where Green Meets Serenity"*.
  - About Us section describing Paradise Nursery's passion, mission, and quality standards.
  - Interactive **Get Started** button transitioning smoothly into the plant catalogue.

- **Product Listing Page (`ProductList.jsx`)**:
  - Houseplants grouped into 5 distinct categories:
    1. *Air Purifying Plants* (Snake Plant, Spider Plant, Peace Lily, Boston Fern, Rubber Plant, Aloe Vera)
    2. *Aromatic Fragrant Plants* (Lavender, Jasmine, Rosemary, Mint, Lemon Balm, Hyacinth)
    3. *Insect Repellent Plants* (Oregano, Marigold, Geraniums, Basil, Lavender, Catnip)
    4. *Medicinal Plants* (Aloe Vera, Echinacea, Peppermint, Lemon Balm, Chamomile, Calendula)
    5. *Low Maintenance Plants* (ZZ Plant, Pothos, Snake Plant, Cast Iron Plant, Succulents, Aglaonema)
  - Each plant card showcases thumbnail image, plant name, brief description, and unit price.
  - Interactive **Add to Cart** button for each item that:
    - Adds the selected plant to the Redux store.
    - Disables the button immediately upon addition to prevent duplicate single-add triggers.
    - Updates button label to **Added to Cart**.
  - Persistent **Navigation Bar**:
    - Company branding link linking back to the Landing Page.
    - Direct **Home** navigation link.
    - **Plants** link to return to the plant catalogue.
    - Dynamic shopping cart icon with live badge showing total item count in real-time.

- **Shopping Cart Page (`CartItem.jsx`, `CartSlice.jsx`)**:
  - Displays total cart purchase amount calculated across all items.
  - Renders each unique plant item with thumbnail, name, unit cost, item total cost, and quantity controls.
  - **Increment (`+`)** and **Decrement (`-`)** buttons to modify plant quantities dynamically.
  - Quantity decrementing to 0 automatically prompts item removal from the cart.
  - **Delete** button to remove specific plants from the shopping cart.
  - **Continue Shopping** button redirecting back to the product catalog.
  - **Checkout** button displaying a "Coming Soon" notification modal.

- **Global State Management (`CartSlice.jsx`, `store.js`)**:
  - Built using `@reduxjs/toolkit` and `react-redux`.
  - Slice name: `cart`.
  - Actions: `addItem`, `removeItem`, `updateQuantity`.

---

## 🛠️ Technology Stack

- **React 18** (Functional components, Hooks: `useState`, `useEffect`)
- **Redux Toolkit & React-Redux** (Centralized cart state management)
- **Vite** (High-speed build tool and development server)
- **CSS3** (Responsive design, flexbox, animations, media queries)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or above recommended)
- npm or yarn

### Installation

1. Clone the `e-plantShopping` repository:
   ```bash
   git clone https://github.com/<your-username>/e-plantShopping.git
   cd e-plantShopping
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

---

## 📦 Deployment to GitHub Pages

1. Ensure `vite.config.js` contains the base path:
   ```javascript
   export default defineConfig({
     base: "/e-plantShopping/",
     plugins: [react()],
   })
   ```

2. Deploy using `gh-pages`:
   ```bash
   npm run deploy
   ```

---

## 📁 Project Structure

```text
e-plantShopping/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── AboutUs.css
│   ├── AboutUs.jsx          # Company description and mission
│   ├── App.css              # Landing page styles & greenhouse background
│   ├── App.jsx              # Main app container & landing page
│   ├── CartItem.css         # Shopping cart styling
│   ├── CartItem.jsx         # Cart page component with calculations & controls
│   ├── CartSlice.jsx        # Redux slice with addItem, removeItem, updateQuantity
│   ├── index.css
│   ├── main.jsx             # React entry point with Redux Provider
│   ├── ProductList.css      # Product catalog styling
│   ├── ProductList.jsx      # Plant listing with categories & navbar
│   └── store.js             # Redux store configuration
├── index.html
├── package.json
├── README.md                # Project documentation
└── vite.config.js
```

---

## 📄 License

This project is licensed under the MIT License.
