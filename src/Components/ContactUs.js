import React from 'react'
import contactvideo from '../icons/contactvideo.mp4'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className='text-3xl p-10 pt-28 text-center font-extrabold' style={{ "fontFamily": "Inter Med" }}> Contact Us - Traveloo </div>
            <div className='flex flex-col'>

                <div className='w-screen flex flex-row-reverse' style={{ "height": "70vh" }}>
                    <div className='h-2/4 w-2/4 p-10'>
                        <div className='text-3xl' style={{ "fontFamily": "Inter Med" }}>For Our Services </div>
                        <div className="pt-8 text-left" style={{ "fontFamily": "Inter Extra" }}>
                            fdns dfnkan dfkkbnkd agnakn gadknfkondk anhdfnhknfknhdkbndfobnodnbodbndfkobnoksdnjgnas dpkgnasgnaskdngkasdgnksdnGpkdasn nlfgnadokznofkbno dfnkboladnbadpknbdakfnbdfkobndf
                            fdns dfnkan dfkkbnkd agnakn gadknfkondk anhdfnhknfknhdkbndfobnodnbodbndfkobnoksdnjgnas dpkgnasgnaskdngkasdgnksdnGpkdasn nlfgnadokznofkbno dfnkboladnbadpknbdakfnbdfkobndf..
                        </div>
                        <div className='pt-4' style={{ "fontFamily": "Inter Med" }}>

                            <Link to="/signUp">
                                <button
                                    className="rounded-full px-6 py-2 hidden md:block bg-black hover:bg-gray-800 text-white"
                                >
                                    Sign Up
                                </button>
                            </Link>

                        </div>
                    </div>
                    <div className="h-2/4 w-2/4 p-10">

                        <video src={contactvideo} autoPlay loop muted />

                    </div>

                </div>


                {/* <div className="messageUs inline-flex px-10 w-screen justify-center pb-14" style={{"fontFamily":"Inter Med"}}>
                <input id="messageField" className="px-4 mr-4 w-2/4 border-2 border-gray-400" type="text" placeholder="Write us a message ! "></input>
                <button className="p-2 text-center text-black px-4 hover:bg-blue-700 hover:text-white border-2 border-gray-600">Send Message</button>
                
                </div> */}

                <div className='mt-1 mb-12 px-6 font-semibold'>

                    <div
                        className="flex bg-white rounded-full w-5/6 h-11 m-auto border-2  focus-within:ring-1 ring-black"
                    >
                        <input
                            type="text"
                            className="w-full rounded-full px-3 py-3 text-sm text-gray-600 focus:outline-none"
                            placeholder="Message Us "
                        />
                        <button
                            className="rounded-full px-6 hidden md:block bg-black hover:bg-gray-800 text-white"
                        >
                            Send
                        </button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ContactUs
