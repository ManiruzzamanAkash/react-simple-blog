import LoginContainer from "../../../iBOSAppsFrontend/src/views/modules/Auth/LoginContainer";
import RegisterContainer from "../views/backend/auth/RegisterContainer";

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
]

export default routes;