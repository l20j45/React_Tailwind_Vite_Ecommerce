import Home from "../Home";
import MyAccount from "../MyAccount";
import SignIn from "../SignIn";
import NotFound from "../NotFound";
import '../../App.css';
import MyOrder from "../MyOrder";

function App() {


    return (
        <>
            <div className="bg-red-100">
                <Home/>
                <MyAccount/>
                <MyOrder/>
                <SignIn/>
                <NotFound/>
            </div>
        </>
    )
}

export default App
