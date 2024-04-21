import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";

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
        loader: async ({ request }) => {
          const { searchParams } = new URL(request.url);
          const term = searchParams.get("term");

          if (!term) {
            throw new Error("Search term must be provided");
          }

          const res = await fetch(
            `https://registry.npmjs.org/-/v1/search?text=${term}`
          );
          const data = await res.json();

          return data.objects;
        },

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
