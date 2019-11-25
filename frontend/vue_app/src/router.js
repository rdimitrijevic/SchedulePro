import SignIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import MainPage from "./components/MainPage";
import Welcome from "./components/Welcome";
const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    meta: {
      requires_auth: false
    }
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
    meta: {
      requires_auth: false
    }
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
    meta: {
      requires_auth: false
    }
  },
  {
    path: "/tasks",
    name: "MainPage",
    component: MainPage,
    meta: {
      requires_auth: true
    }
  }
];
export default routes;
