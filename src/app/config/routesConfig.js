import React from "react";
import FuseUtils from "../setup/utils/fuseUtils";
import { Navigate } from "react-router-dom";
import AuthConfig from "../auth/AuthConfig";
import MainPageConfig from "../pages/main/MainPageConfig";
import ProductDetailPage from "../pages/productDetail/ProductDetailPage";


const routesConfig = [
    AuthConfig,
    MainPageConfig
];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routesConfig),

  {
    path: "/",
    element: <Navigate to={`/`} />,
  },
  {
    path: "/products/:id",
    element: <ProductDetailPage />,
  },
];

export default routes;
