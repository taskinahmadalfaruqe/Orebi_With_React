import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Page/Homepage/Homepage";
import ContactUs from "../Page/ContactUs/ContactUs";
import AboutUs from "../Page/AboutUs/AboutUs";
import Shop from "../Page/Shop/Shop";
import Journel from "../Page/Journel/Journel";
import Mainlayout from "../layout/Mainlayout";
const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/ContactPage",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/AboutUSPage",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/JournelPage",
        element: <Journel></Journel>,
      },
      {
        path: "/ShopPage",
        element: <Shop></Shop>,
      },
    ],
  },
  {
    path: "*",
    element: " This Page is Under Process",
  },
]);
export default MainRoute;
