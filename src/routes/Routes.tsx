import AddForm from "../components/home/add-form";
import Users from "../components/users";
import MainLayout from "../container/MainLayout";
import { RouteObject, useRoutes } from "react-router-dom";
export type MyRouteObject = RouteObject;
export const routes: MyRouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <AddForm />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
];

export const useMap = (routes: MyRouteObject[]) => {
  return routes.map((route) => route);
};
export const useRoute = () => {
  return useRoutes(useMap(routes));
};
