import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import LoadingSpinner from "./components/LoadingSpinner.jsx";
import Navbar from "./components/Navbar.jsx";
import { AdminRoute, AuthRoute } from "./components/ProtectedRoute.jsx";

import AdminPage from "./pages/AdminPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import PurchaseCancelPage from "./pages/PurchaseCancelPage.jsx";
import PurchaseSuccessPage from "./pages/PurchaseSuccessPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";

import { useCartStore } from "./stores/useCartStore.js";
import { useUserStore } from "./stores/useUserStore.js";

function App() {
  const { checkAuth, checkingAuth, user } = useUserStore();
  const { getCartItems } = useCartStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (user) {
      getCartItems();
    }
  }, [user, getCartItems]);

  if (checkingAuth) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/category/:category"
          element={<CategoryPage />}
        />

        <Route
          path="/cart"
          element={<CartPage />}
        />

        <Route
          path="/purchase-success"
          element={<PurchaseSuccessPage />}
        />

        <Route
          path="/purchase-cancel"
          element={<PurchaseCancelPage />}
        />

        <Route
          path="/signup"
          element={
            <AuthRoute>
              <SignUpPage />
            </AuthRoute>
          }
        />

        <Route
          path="/login"
          element={
            <AuthRoute>
              <LoginPage />
            </AuthRoute>
          }
        />

        <Route
          path="/secret-dashboard"
          element={
            <AdminRoute>
              <AdminPage />
            </AdminRoute>
          }
        />
      </Routes>

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: "var(--color-paper)",
            border: "1px solid var(--color-border)",
            color: "var(--color-ink)",
            fontSize: "var(--text-sm)",
          },
        }}
      />
    </>
  );
}

export default App;