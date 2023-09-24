import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from './HeroSection'


const LandingPage = () => {
    return (
        <>
            <div className=''>



                <div className="landingpage h-screen w-screen flex flex-col -z-10 md:flex-row bg-white" >
                    <div className='white-box bg-white text-slate-950 w-1/2 m-auto md:text-9xl'>
                        <div className='md:text-center md:p-2 p-12 ' style={{ "fontFamily": "'Gruppo', sans-serif", "fontSize": "20px", "fontWeight": "700", "width": "100%" }}>
                            Your traveling diaries are ready and waiting for you.
                        </div>
                    </div>

                    <div className='pl-8 pb-8 pt-4 black-box bg-black text-white border-red-600 w-fit md:w-1/2' >
                        <div className='flex flex-row-reverse flex-wrap pr-12 text-white relative' style={{ "fontFamily": "Inter Extra" }}>

                            <Link to="/login" className="text-red pl-5 hover:text-pink-500">Login</Link>
                            <Link to="/signup" className="text-red pl-5  hover:text-pink-500">SignUp</Link>
                            <Link to="/contactUs" className="text-red pl-5  hover:text-pink-500">Contact Us</Link>
                            <Link to="/" className="text-red pl-5  hover:text-pink-500">Home</Link>


                        </div>

                        <div className='pl-16 pr-16 pt-40' style={{ "fontFamily": "Inter Extra" }}>
                            <p className='pb-8 text-3xl'>Welcome </p>

                            <div className='text-left text-base '>

                                Welcome to Traveloop!

                                We are thrilled to have you embark on this exciting journey with us. At traveloop, we don't just plan trips; we curate unforgettable experiences. As a member of our travel community, you'll discover a world of adventures waiting to be explored.
                            </div>
                            <div className='mt-20' style={{ "fontFamily": "Inter Extra" }}>

                                {/* <EmailIcon color='secondary'/> */}
                                <i>traveloop@gmail.com</i>
                                <div>123-456-7890</div>

                            </div>
                        </div>

                    </div>


                </div>

                <div className='heroSection -z-10 '>
                    <HeroSection />

                </div>
            </div>


        </>
    )
}

export default LandingPage
