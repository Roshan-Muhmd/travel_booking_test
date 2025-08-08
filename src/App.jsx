import { Provider } from "react-redux"
import HomePage from "./pages/HomePage"
import store from "./redux/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Overview from "./pages/Overview";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import Bookings from "./pages/Bookings";
import Inventory from "./pages/Inventory";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Logout from "./components/auth/Logout";

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute> <HomePage /> </ProtectedRoute>, // layout wrapper (optional)
    errorElement: <NotFound />, // fallback route,
    children: [
      {path: "",
        element : <Overview/>
      },
      {path: "dashboard",
        element : <Overview/>
      },
      {path: "bookings",
        element : <Bookings/>
      },
      {path: "inventory",
        element : <Inventory/>
      },
      {path: "users",
        element : <Users/>
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/logout",
    element: <Logout/>
  }
]);
  

  return (
    <>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>

    </>
  )
}

export default App
