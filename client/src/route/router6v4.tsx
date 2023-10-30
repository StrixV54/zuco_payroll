import { RoleLevel } from "../utils/interface";
import Dashboard from "../components/Dashboard";
import Department from "../components/Department";
import { Navigate } from "react-router-dom";
import Layout from "../pages/Layout";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import SignOut from "../pages/SignOut";
import ErrorPage from "../pages/ErrorPage";
import ViewProfile from "../pages/ViewProfile";
import UserDetails from "../pages/UserDetailsPage/UserDetails";
import Users from "../pages/Users";

export default function RouteProviderPlain(role: RoleLevel) {
  switch (role) {
    case "employee":
      return [
        {
          errorElement: <ErrorPage />,
          children: [
            {
              path: "/signin",
              Component: SignIn,
            },
            {
              path: "/signup",
              Component: SignUp,
            },
            {
              path: "/signout",
              Component: SignOut,
            },
            {
              Component: Layout,
              children: [
                {
                  path: "/",
                  element: <Navigate to="/dashboard" />,
                },
                {
                  path: "/dashboard",
                  Component: Dashboard,
                },
                {
                  path: "/department",
                  Component: Department,
                },
                {
                  path: "/userdetails",
                  Component: UserDetails,
                },
                {
                  path: "/viewprofile",
                  Component: ViewProfile,
                },
                {
                  path: "/users",
                  Component: Users,
                },
              ],
            },
          ],
        },
      ];
    case "payroll manager":
      return [
        {
          errorElement: <ErrorPage />,
          children: [
            {
              path: "/signin",
              Component: SignIn,
            },
            {
              path: "/signup",
              Component: SignUp,
            },
            {
              path: "/signout",
              Component: SignOut,
            },
            {
              Component: Layout,
              children: [
                {
                  path: "/",
                  element: <Navigate to="/dashboard" />,
                },
                {
                  path: "/dashboard",
                  Component: Dashboard,
                },
                {
                  path: "/department",
                  Component: Department,
                },
                {
                  path: "/userdetails",
                  Component: UserDetails,
                },
                {
                  path: "/viewprofile",
                  Component: ViewProfile,
                },
                {
                  path: "/users",
                  Component: Users,
                },
              ],
            },
          ],
        },
      ];
    case "super admin":
      return [
        {
          errorElement: <ErrorPage />,
          children: [
            {
              path: "/signin",
              Component: SignIn,
            },
            {
              path: "/signup",
              Component: SignUp,
            },
            {
              path: "/signout",
              Component: SignOut,
            },
            {
              Component: Layout,
              children: [
                {
                  path: "/",
                  element: <Navigate to="/dashboard" />,
                },
                {
                  path: "/dashboard",
                  Component: Dashboard,
                },
              ],
            },
          ],
        },
      ];
    default:
      return [
        {
          path: "*",
          Component: ErrorPage,
        },
      ];
  }
}
