import LoginContainer from "../views/backend/auth/LoginContainer";
import RegisterContainer from "../views/backend/auth/RegisterContainer";
import DashboardContainer from "../views/backend/dashboard/DashboardContainer";
import PostAddContainer from "../views/backend/post/PostAddContainer";
import PostEditContainer from "../views/backend/post/PostEditContainer";
import PostListContainer from "../views/backend/post/PostListContainer";

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

  /*** Posts Routes ***/
  {
    path: "/posts",
    name: "Post Component",
    component: PostListContainer,
    exact: true,
  },
  {
    path: "/posts/create",
    name: "Post Create Component",
    component: PostAddContainer,
    exact: true,
  },
  {
    path: "/posts/edit/:id",
    name: "Post Edit Component",
    component: PostEditContainer,
    exact: true,
  },
];

export default routes;
