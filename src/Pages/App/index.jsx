import {BrowserRouter} from "react-router-dom";
import {ShoppingCartProvider} from "../../Context/index.jsx";

import '../../App.css';

import Routes from "../../Routes.jsx";

import NavBar from "../../Components/Navbar/Navbar.jsx";
import Layout from "../../Components/Layout/index.jsx";


const App = () => {
    return (
        <>
            <ShoppingCartProvider>
                <BrowserRouter>
                    <NavBar/>
                    <Layout>
                        <Routes/>
                    </Layout>

                </BrowserRouter>
            </ShoppingCartProvider>
        </>
    )
}

export default App
