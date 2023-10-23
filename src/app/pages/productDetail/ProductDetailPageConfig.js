import React from "react";
import ProductDetailPage from "./ProductDetailPage";
import ProductFeature from "./components/ProductFeature";
import ProductsDeliveryTerms from "./components/ProductDeliveryTerms";
import ProductComment from "./components/ProductComment";


const ProductDetailPageConfig = {
  routes: [
    {
        path: "/products/:id",
        element: <ProductDetailPage />,
    },
    {
      path: "/products/:id/feature",
      element: <ProductFeature />,
    },
    {
      path: "/products/:id/delivery-terms",
      element: <ProductsDeliveryTerms />,
    },
    {
      path: "/products/:id/comments",
      element: <ProductComment />,
    },
  ],
};

export default ProductDetailPageConfig;
