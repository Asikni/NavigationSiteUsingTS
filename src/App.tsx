import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/search/SearchPage";
import DetailsPage from "./pages/DetailsPage";
import { searchLoader } from "./pages/search/searchLoader";
const router = createBrowserRouter([
  {
    path: "/", //when path is / display root layout
    element: <Root />,
    children: [
      //children means that alright we wanna display the root but inside the root we display one of these three.
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader: searchLoader

        //loader function is responsible for asynchronously fetching data needed by a specific route's component. It allows the route to be dynamic, fetching data based on the user's interaction with the application. This is a common pattern in modern web applications to handle data fetching and rendering based on user navigation.
      },

      {
        path: "/packages/:name",
        element: <DetailsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
