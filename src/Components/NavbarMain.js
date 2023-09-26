import React from 'react'

const NavbarMain = () => {
    return (
        <>
            <div className="bg-black fixed z-20 w-screen text-white" style={{ "fontFamily": "Inter Extra" }}>
                <nav className="bg-black px-6 relative shadow-md">
                    <div className="flex flex-row justify-between items-center ">
                        <h3 className="text-3xl text-white font-extrabold" style={{ "fontFamily": "Inter Semibold" }}>traveloo</h3>
                        <div className="group flex flex-col items-center">
                            <button className="p-2 rounded-lg md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-10 fill-current" viewBox="0 0 16 16"><path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" /></svg>
                            </button>
                            <div className="hidden group-hover:block md:block absolute md:static bg-black text-white inset-x-0 top-16 py-3 shadow-md md:shadow-none">
                                <div className="flex flex-row justify-center items-center text-center font-semibold">
                                    <a className="px-2 py-1 flex flex-col md:flex-row md:items-center text-sm hover:text-blue-300" href="/">
                                        Home
                                    </a>
                                    <a className="px-2 py-1 flex flex-col md:flex-row md:items-center text-sm hover:text-blue-300" href="#">

                                        Account
                                    </a>
                                    <a className="px-2 py-1 flex flex-col md:flex-row md:items-center text-sm hover:text-blue-300" href="/login">

                                        Logout
                                    </a>
                                    <div className="relative w-7 h-7 overflow-hidden bg-white rounded-full dark:bg-white pr-3">
                                        <svg className="absolute w-9 h-9 text-blue-500 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavbarMain
