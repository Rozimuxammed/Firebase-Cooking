import React from 'react'
import { CgDarkMode } from "react-icons/cg";
import { Link } from 'react-router-dom';
function Navbar({ mode, setMode }) {
    return (
        <nav>
            <div className="container">
                <Link to={"/"}> <div className="logo">
                    <img src="./public/imgs/logo.png" alt="" />
                    <h1>FireCook</h1>
                </div>
                </Link>
                <div className="login">
                    <CgDarkMode onClick={() => {
                        setMode(!mode)
                    }} className='icon' />
                    <Link to={"/create"}> <button>Create</button></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar