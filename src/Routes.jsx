import {useRoutes} from "react-router-dom";

import Home from "./Pages/Home";
import MyAccount from "./Pages/MyAccount";
import SignIn from "./Pages/SignIn";
import NotFound from "./Pages/NotFound";
import MyOrder from "./Pages/MyOrder";
import MyOrders from "./Pages/MyOrders";



import App from "./Pages/App/index.jsx";


const Routes = () => {
    let routes = useRoutes([
        {path: "/", element: <Home/>},
        {path: "/home", element: <Home/>},
        {path: "/signin", element: <SignIn/>},
        {path: "/my-account/:id", element: <MyAccount/>},
        {path: "/my-order/:id", element: <MyOrder/>},
        {path: "/my-orders", element: <MyOrders/>},
        {path: "/*", element: <NotFound/>},
    ]);

    return routes;
};

export default Routes