import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <div className='flex flex-row justify-between fixed top-0 w-screen p-4 pt-6 bg-black'>

            <div className='text-white text-3xl font-extrabold pl-10' style={{"fontFamily":"Inter Semibold"}}>
                Traveloo

            </div>
            <div className='pr-12 text-white relative' style={{ "fontFamily": "Inter Extra" }}>

                <Link to="/" className="text-red pl-5  hover:text-pink-500">Home</Link>
                <Link to="/contactUs" className="text-red pl-5  hover:text-pink-500">Contact Us</Link>
                <Link to="/signup" className="text-red pl-5  hover:text-pink-500">SignUp</Link>
                <Link to="/login" className="text-red pl-5 hover:text-pink-500">Login</Link>


            </div>
        </div>
        </>
    )
}

export default Navbar
