import {BrowserRouter} from "react-router-dom";

import Routes from "../../Routes.jsx";

import '../../App.css';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </>
    )
}

export default App
