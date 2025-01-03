import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;