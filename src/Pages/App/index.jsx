import {BrowserRouter} from "react-router-dom";

import '../../App.css';

import Routes from "../../Routes.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";

const App = () => {
    return (
        <>

            <BrowserRouter>
                <Navbar/>
                <Routes/>
            </BrowserRouter>
        </>
    )
}

export default App
