import React from "react";
import FuseUtils from "../setup/utils/fuseUtils";
import { Navigate } from "react-router-dom";
import AuthConfig from "../auth/AuthConfig";
import MainPageConfig from "../pages/main/MainPageConfig";
import ProductDetailPageConfig from "../pages/productDetail/ProductDetailPageConfig";


const routesConfig = [
    AuthConfig,
    MainPageConfig,
    ProductDetailPageConfig
];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routesConfig),

  {
    path: "/",
    element: <Navigate to={`/`} />,
  },
];

export default routes;
