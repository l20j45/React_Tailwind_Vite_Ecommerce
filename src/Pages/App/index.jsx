import {BrowserRouter} from "react-router-dom";

import '../../App.css';

import Routes from "../../Routes.jsx";

import NavBar from "../../Components/Navbar/Navbar.jsx";

const App = () => {
    return (
        <>

            <BrowserRouter>
                <NavBar/>
                <Routes/>
            </BrowserRouter>
        </>
    )
}

export default App
