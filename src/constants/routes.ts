export interface MENU_ROUTES_DATA {
  HOME: string;
  CONTACT_US: string;
  ABOUT: string;
  LOGIN: string;
  CLIENTS: string;
  APPLE: string;
  AUDI: string;
  WARGAMING: string;
  NOT_FOUND: string;
}

export const MENU_ROUTES: MENU_ROUTES_DATA = {
  HOME: "/",
  CONTACT_US: "/contactUs",
  ABOUT: "/about",
  LOGIN: "/login",
  CLIENTS: "/clients",
  APPLE: "/clients/apple",
  AUDI: "/clients/audi",
  WARGAMING: "/clients/wargaming",
  NOT_FOUND: "*",
};

export enum NAVIGATION_MENU_ROUTES {
  Home = "/",
  Clients = "/clients",
  "Contact Us" = "/contactUs",
  About = "/about",
  Login = "/login",
}