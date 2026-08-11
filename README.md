# 🛍️ E-Commerce App

A modern full-stack e-commerce application built with React, Node.js, Express, and MongoDB.

The application provides a responsive shopping experience with product browsing, categories, cart management, authentication, checkout, and an admin dashboard.

---

## 🚀 Features

### 👤 User Features

- User registration and login
- JWT-based authentication
- Browse products
- Browse products by category
- Featured products
- Product recommendations
- Add products to cart
- Update product quantity
- Remove products from cart
- Coupon support
- Secure checkout with Stripe
- Order success and cancellation handling
- Responsive design for desktop, tablet, and mobile

### 🔐 Admin Features

- Admin authentication
- Create products
- Upload product images
- Delete products
- Manage featured products
- View products
- View users and orders
- Sales and revenue analytics
- Dashboard with charts

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Zustand
- Axios
- Framer Motion
- Recharts
- Lucide React
- React Hot Toast

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Zod
- bcryptjs
- Cookie Parser

### Services

- Stripe
- Cloudinary
- Redis / Upstash

---

## 📁 Project Structure

```text
e-commerce/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── validators/
│   │   └── server.js
│   │
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── stores/
│   │   ├── lib/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   └── package.json
│
├── .env
├── .gitignore
└── package.json