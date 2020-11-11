// types
import { ROUTERS } from '@/types/common';
// others
import CONSTANTS from '@/constants';
// components
import DashBoardPage from '@/pages/DashBoardPage';
import CategoriesPage from '@/pages/CategoriesPage';
import ProductsPage from '@/pages/ProductsPage';
import Home from '@/pages/HomePage';
import DetailProductPage from '@/pages/DetailProductPage';
import ReviewsPage from '@/pages/ReviewsPage'
import Orders from '@/pages/OrdersPage';
import DetailOrderPage from '@/pages/DetailOrderPage';
import CustomersPage from '@/pages/CustomersPage'
/**
 * define main pages routes
 */

const routers: ROUTERS = [
  {
    path: CONSTANTS.ROUTERS.HOME,
    pageName: CONSTANTS.PAGE_NAME.HOME,
    exact: true,
    component: Home,
  },
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
  {
    path: CONSTANTS.ROUTERS.CREATE_PRODUCT,
    pageName: CONSTANTS.PAGE_NAME.CREATE_PRODUCT,
    exact: true,
    component: DetailProductPage,
  },
  {
    path: `${CONSTANTS.ROUTERS.DETAIL_PRODUCT}/:id`,
    pageName: CONSTANTS.PAGE_NAME.DETAIL_PRODUCT,
    exact: true,
    component: DetailProductPage,
  },
  {
    path: CONSTANTS.ROUTERS.REVIEWS,
    pageName: CONSTANTS.PAGE_NAME.REVIEWS,
    exact: true,
    component: ReviewsPage
  },
  {
    path: CONSTANTS.ROUTERS.ORDERS,
    pageName: CONSTANTS.PAGE_NAME.ORDERS,
    exact: true,
    component: Orders
  },
  {
    path: CONSTANTS.ROUTERS.DETAIL_ORDER,
    pageName: CONSTANTS.PAGE_NAME.DETAIL_ORDER,
    exact: true,
    component: DetailOrderPage
  },
  {
    path: CONSTANTS.ROUTERS.CUSTOMERS,
    pageName: CONSTANTS.PAGE_NAME.CUSTOMERS,
    exact: true,
    component: CustomersPage
  }
];

export default routers;
