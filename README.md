<div align="center">

# 🛍️ Full-Stack E-Commerce Admin Dashboard

**Nền tảng thương mại điện tử hiện đại với bảng điều khiển quản trị tích hợp Stripe**

[![Stack](https://img.shields.io/badge/Stack-MERN-blue?style=flat-square)](https://www.mongodb.com/)
[![Backend](https://img.shields.io/badge/Backend-Express%205-000?style=flat-square&logo=express)](https://expressjs.com/)
[![Frontend](https://img.shields.io/badge/Frontend-React%2019-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Database](https://img.shields.io/badge/Database-MongoDB-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![Cache](https://img.shields.io/badge/Cache-Redis-FF4438?style=flat-square&logo=redis)](https://redis.io/)
[![Payments](https://img.shields.io/badge/Payments-Stripe-008CDD?style=flat-square&logo=stripe)](https://stripe.com/)
[![License](https://img.shields.io/badge/License-ISC-blue?style=flat-square)](https://opensource.org/licenses/ISC)

</div>

---

## 📋 Mục lục

- [Tổng quan](#-tổng-quan)
- [Tính năng](#-tính-năng)
- [Công nghệ sử dụng](#-công-nghệ-sử-dụng)
- [Cấu trúc dự án](#-cấu-trúc-dự-án)
- [Cài đặt](#-cài-đặt)
- [Cấu hình môi trường](#-cấu-hình-môi-trường)
- [Chạy ứng dụng](#-chạy-ứng-dụng)
- [API Endpoints](#-api-endpoints)
- [Kiến trúc & Luồng dữ liệu](#-kiến-trúc--luồng-dữ-liệu)
- [Đóng góp](#-đóng-góp)
- [Giấy phép](#-giấy-phép)
- [Tác giả](#-tác-giả)

---

## 🎯 Tổng quan

**Full-Stack E-Commerce Admin Dashboard** là ứng dụng thương mại điện tử full-stack hoàn chỉnh, cho phép khách hàng duyệt sản phẩm, quản lý giỏ hàng và thanh toán qua Stripe. Đồng thời cung cấp bảng điều khiển quản trị để quản lý sản phẩm, theo dõi đơn hàng và xem phân tích doanh thu.

Dự án được xây dựng với kiến trúc **MERN** kết hợp **Redis** cho caching và **Stripe** cho xử lý thanh toán, đảm bảo hiệu suất và trải nghiệm người dùng mượt mà.

---

## ✨ Tính năng

### 👤 Người dùng

- **Đăng ký & Đăng nhập** — JWT authentication với access/refresh token, cookie httpOnly
- **Xem danh mục sản phẩm** — 6 danh mục: Quần Jean, Áo Sơ Mi, Giày Dép, Kính Mắt, Áo Khoác, Comple
- **Sản phẩm nổi bật** — Carousel với responsive grid, cache qua Redis
- **Giỏ hàng** — Thêm/xoá/sửa số lượng sản phẩm
- **Mã giảm giá** — Nhập mã, tự động nhận mã BONUS khi đơn hàng ≥ 5.000.000₫
- **Thanh toán Stripe** — Checkout session an toàn, xác nhận real-time
- **Hoàn tiền & Hủy đơn** — Xử lý các trường hợp thanh toán thất bại

### 🔐 Quản trị (Admin)

- **Tạo sản phẩm** — Upload ảnh qua Cloudinary, validation với Zod
- **Quản lý sản phẩm** — Xem danh sách, xoá, gắn nhãn nổi bật
- **Bảng phân tích** — Thống kê người dùng, sản phẩm, đơn hàng, doanh thu + biểu đồ 7 ngày với Recharts

### ⚡ Hiệu năng & UX

- **Redis caching** — Featured products cache 1 giờ
- **Refresh token rotation** — Tự động refresh access token qua interceptor
- **Responsive design** — Tối ưu trên mọi thiết bị với Tailwind CSS 4
- **Animations** — Framer Motion cho chuyển động mượt mà
- **Validation** — Zod validation cả client lẫn server
- **Swagger API docs** — Tài liệu API tự động tại `/api-docs`

---

## 🛠 Công nghệ sử dụng

### Backend

| Công nghệ | Mục đích |
| --- | --- |
| **Node.js + Express 5** | Nền tảng server & routing |
| **MongoDB + Mongoose 9** | Cơ sở dữ liệu NoSQL |
| **Redis (ioredis)** | Caching & lưu refresh token |
| **Stripe SDK** | Xử lý thanh toán |
| **Cloudinary SDK** | Quản lý & upload hình ảnh |
| **JWT (jsonwebtoken)** | Xác thực người dùng |
| **Zod** | Validation dữ liệu đầu vào |
| **bcryptjs** | Mã hóa mật khẩu |
| **Swagger** | Tài liệu API tự động |
| **cookie-parser** | Đọc/ghi cookie |
| **dotenv** | Quản lý biến môi trường |

### Frontend

| Công nghệ | Mục đích |
| --- | --- |
| **React 19** | UI library |
| **Vite 8** | Build tool & dev server |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **Zustand** | State management nhẹ |
| **React Router v7** | Định tuyến SPA |
| **Framer Motion** | Animations |
| **Axios** | HTTP client + interceptor |
| **Recharts** | Biểu đồ phân tích |
| **Lucide React** | Icon system |
| **@stripe/stripe-js** | Stripe Elements |
| **react-hot-toast** | Thông báo toast |
| **react-confetti** | Hiệu ứng confetti khi mua hàng |
| **Zod** | Validation form phía client |

### Công cụ phát triển

| Công nghệ | Mục đích |
| --- | --- |
| **Biome** | Linting & formatting |
| **ESLint** | Linting bổ sung |
| **Nodemon** | Hot-reload backend |

---

## 📁 Cấu trúc dự án

```text
4-fullstack-ecommerce/
├── .env
├── .gitignore
├── package.json
│
├── backend/
│   ├── package.json
│   ├── .vscode/
│   ├── biome.json
│   ├── eslint.config.js
│   └── src/
│       ├── server.js
│       ├── config/
│       │   └── swagger.js
│       ├── controllers/
│       │   ├── auth.controller.js
│       │   ├── product.controller.js
│       │   ├── cart.controller.js
│       │   ├── coupon.controller.js
│       │   ├── payment.controller.js
│       │   └── analytics.controller.js
│       ├── lib/
│       │   ├── db.js
│       │   ├── redis.js
│       │   ├── stripe.js
│       │   └── cloudinary.js
│       ├── middleware/
│       │   ├── protectRoute.js
│       │   ├── adminRoute.js
│       │   └── validate.js
│       ├── models/
│       │   ├── user.model.js
│       │   ├── product.model.js
│       │   ├── order.model.js
│       │   └── coupon.model.js
│       ├── routes/
│       │   ├── auth.route.js
│       │   ├── product.route.js
│       │   ├── cart.route.js
│       │   ├── coupon.route.js
│       │   ├── payment.route.js
│       │   └── analytics.route.js
│       ├── utils/
│       │   └── generateToken.js
│       └── validators/
│           ├── auth.validator.js
│           ├── product.validator.js
│           ├── cart.validator.js
│           └── coupon.validator.js
│
└── frontend/
    ├── package.json
    ├── vite.config.js
    ├── index.html
    ├── biome.json
    ├── eslint.config.js
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── index.css
        ├── lib/
        │   ├── axios.js
        │   └── validators.js
        ├── stores/
        │   ├── useUserStore.js
        │   ├── useProductStore.js
        │   └── useCartStore.js
        ├── pages/
        │   ├── HomePage.jsx
        │   ├── CategoryPage.jsx
        │   ├── CartPage.jsx
        │   ├── LoginPage.jsx
        │   ├── SignUpPage.jsx
        │   ├── AdminPage.jsx
        │   ├── PurchaseSuccessPage.jsx
        │   └── PurchaseCancelPage.jsx
        └── components/
            ├── Navbar.jsx
            ├── ProductCard.jsx
            ├── CategoryItem.jsx
            ├── FeaturedProducts.jsx
            ├── CartItem.jsx
            ├── OrderSummary.jsx
            ├── GiftCouponCard.jsx
            ├── PeopleAlsoBought.jsx
            ├── LoadingSpinner.jsx
            ├── AlertDialog.jsx
            ├── ProtectedRoute.jsx
            └── admin/
                ├── CreateProductForm.jsx
                ├── ProductList.jsx
                └── AnalyticsTab.jsx