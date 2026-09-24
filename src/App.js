import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy, Suspense } from "react";

import AppLayout from "./components/AppLayout";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Errors from "./components/Error";
import Cart from "./components/Cart";

const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "restaurant/:restId",
        element: (
          <Suspense fallback={<h1>Lazy loading...</h1>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <Errors />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);