import LoginContainer from "../views/backend/auth/LoginContainer";
import RegisterContainer from "../views/backend/auth/RegisterContainer";
import DashboardContainer from "../views/backend/dashboard/DashboardContainer";

const routes = [
    {
      path: "/",
      name: "Login Component",
      component: LoginContainer,
      exact: true,
    },
    {
      path: "/sign-up",
      name: "Register Component",
      component: RegisterContainer,
      exact: true,
    },
    {
      path: "/dashboard",
      name: "Dashboard Component",
      component: DashboardContainer,
      exact: true,
    },
]

export default routes;