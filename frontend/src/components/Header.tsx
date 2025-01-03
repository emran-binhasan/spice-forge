import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const navlinks = 
                    <>
                        <NavLink to={'/'}>HOME</NavLink>
                        <NavLink to={'/menu'}>MENU</NavLink>
                        <NavLink to={'/shop'}>SHOP</NavLink>
                        <NavLink to={'/contact'}>CONTACT</NavLink>
                        <NavLink to={'/login'}>LOGIN</NavLink>
                    </>
    return (
        <header className="flex justify-between items-center border py-2 md:px-6 px-2">
            <div>
                <h3>SPICE FORGE</h3>
            </div>
            <div className="space-x-2 hidden md:block">
                {navlinks}
            </div>
            <div className="md:hidden" onClick={()=> toggleMenu()}>
                <button className="z-10">
                    {isMenuOpen || <BiMenuAltRight size={20}/>}
                </button>
            </div>
            {isMenuOpen && 
            <div className="fixed md:hidden inset-0 bg-gray-600 text-white flex-col items-center justify-center z-30">
                <button className="absolute top-3 right-3" onClick={()=> toggleMenu()}>{isMenuOpen && <FaTimes size={20}/>}</button>
                <div className="flex flex-col justify-center items-center h-screen gap-4">
                    {navlinks}
                </div>
            </div>
            }
        </header>
    );
};

export default Header;