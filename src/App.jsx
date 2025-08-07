import { Provider } from "react-redux"
import HomePage from "./pages/HomePage"
import store from "./redux/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Overview from "./pages/Overview";
import Properties from "./pages/Properties";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />, // layout wrapper (optional)
    errorElement: <NotFound />, // fallback route,
    children: [
      {path: "",
        element : <Overview/>
      },
      {path: "dashboard",
        element : <Overview/>
      },
      {path: "properties",
        element : <Properties/>
      },
      {path: "settings",
        element : <Settings/>
      },
      {path: "users",
        element : <Users/>
      }
    ]
  },
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
