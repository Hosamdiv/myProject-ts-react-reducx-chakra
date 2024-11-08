import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../pages/Layout";
import HomePage from "../pages";
import ProductsPage from "../pages/Products";
import AboutPage from "../pages/About";
import ProductChildren from "../pages/ChildrenProduct";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductChildren />} />
      </Route>
    </>
  )
);

export default router;
