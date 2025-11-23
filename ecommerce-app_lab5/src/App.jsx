import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ProductsList from "./pages/ProductsList.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import CartPage from "./pages/CartPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import { useLanguage } from "./context/LanguageContext.jsx";
import Register from "./pages/Register.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const { dir } = useLanguage();

  return (
    <div dir={dir}>
      <Navbar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
