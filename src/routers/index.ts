// types
import { ROUTERS } from '@/types/common';
// others
import CONSTANTS from '@/constants';
// components
import DashBoardPage from '@/pages/DashBoardPage';
import CategoriesPage from '@/pages/CategoriesPage';
import ProductsPage from '@/pages/ProductsPage';

/**
 * define main pages routes
 */

const routers: ROUTERS = [
  {
    path: CONSTANTS.ROUTERS.DASHBOARD,
    pageName: CONSTANTS.PAGE_NAME.DASHBOARD,
    exact: true,
    component: DashBoardPage,
  },
  {
    path: CONSTANTS.ROUTERS.PRODUCTS,
    pageName: CONSTANTS.PAGE_NAME.PRODUCTS,
    exact: true,
    component: ProductsPage,
  },
  {
    path: CONSTANTS.ROUTERS.CATEGORIES,
    pageName: CONSTANTS.PAGE_NAME.CATEGORIES,
    exact: true,
    component: CategoriesPage,
  },
];

export default routers;
