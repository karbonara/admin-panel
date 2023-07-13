
import { MainPage } from "pages/MainPage"
import NotFoundPage from "pages/NotFoundPage"
import { OrderPage } from "pages/OrderPage"
import { PromoCodePage } from "pages/PromoCodePage"
import { RegisterPage } from "pages/Register"
import { SettingsPage } from "pages/Settings"
import { RouteProps } from "react-router-dom"

// Enum для роутов 
export enum AppRoutes {
  MAIN = '/',
  MAINPAGE = '/main',
  SETTGINS = '/settings',
  ORDER = '/order',
  REGISTER = '/register',
  PROMOCODE = '/promocode',

  // 404
  NOT_FOUND = '/404',
}

// Объект для роутов
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.MAINPAGE]: '/main',
  [AppRoutes.SETTGINS]: '/settings',
  [AppRoutes.ORDER]: '/order',
  [AppRoutes.REGISTER]: '/register',
  [AppRoutes.PROMOCODE]: '/promocode',

  // 404
  [AppRoutes.NOT_FOUND]: '*',
}

// Объект для роутов с компонентами  
export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />
  },
  [AppRoutes.MAINPAGE]: {
    path: RoutePath[AppRoutes.MAINPAGE],
    element: <MainPage />
  },
  [AppRoutes.SETTGINS]: {
    path: RoutePath[AppRoutes.SETTGINS],
    element: <SettingsPage />
  },
  [AppRoutes.ORDER]: {
    path: RoutePath[AppRoutes.ORDER],
    element: <OrderPage />
  },
  [AppRoutes.REGISTER]: {
    path: RoutePath[AppRoutes.REGISTER],
    element: <RegisterPage />
  },
  [AppRoutes.PROMOCODE]: {
    path: RoutePath[AppRoutes.PROMOCODE],
    element: <PromoCodePage />
  },


  // 404
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />
  }
}