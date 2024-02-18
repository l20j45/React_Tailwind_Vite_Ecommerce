import {BrowserRouter} from "react-router-dom";

import '../../App.css';

import Routes from "../../Routes.jsx";

import NavBar from "../../Components/Navbar/Navbar.jsx";
import Layout from "../../Components/Layout/index.jsx";

const App = () => {
    return (
        <>

            <BrowserRouter>
                <NavBar/>
                <Layout>
                    <Routes/>
                </Layout>

            </BrowserRouter>
        </>
    )
}

export default App
