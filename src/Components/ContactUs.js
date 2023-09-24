import React from 'react'
import contactvideo from '../icons/contactvideo.mp4'

const ContactUs = () => {
    return (
        <>
            <div className='text-3xl p-10 text-center font-extrabold' style={{"fontFamily":"Inter Med"}}> Contact Us - Traveloo </div>
            <div className='w-screen flex flex-row-reverse' style={{"height":"70vh"}}>
                <div className='h-2/4 w-2/4 p-10'>
                    <div className='text-3xl' style={{"fontFamily":"Inter Med"}}>For Our Services </div>
                    <div className="pt-8 text-left" style={{"fontFamily":"Inter Extra"}}>
                        fdns dfnkan dfkkbnkd agnakn gadknfkondk anhdfnhknfknhdkbndfobnodnbodbndfkobnoksdnjgnas dpkgnasgnaskdngkasdgnksdnGpkdasn nlfgnadokznofkbno dfnkboladnbadpknbdakfnbdfkobndf
                        fdns dfnkan dfkkbnkd agnakn gadknfkondk anhdfnhknfknhdkbndfobnodnbodbndfkobnoksdnjgnas dpkgnasgnaskdngkasdgnksdnGpkdasn nlfgnadokznofkbno dfnkboladnbadpknbdakfnbdfkobndf..
                    </div>
                    <div className='pt-4' style={{"fontFamily":"Inter Med"}}>

                    <button className="p-2 text-center text-black px-4 hover:bg-blue-700 hover:text-white border-2 border-blue-700">Submit</button>

                    </div>
                </div>
                <div className="h-2/4 w-2/4 p-10">

                    <video src={contactvideo} autoPlay loop muted />

                </div>

            </div> 

            
            <div className="messageUs inline-flex px-10 w-screen justify-center pb-14" style={{"fontFamily":"Inter Med"}}>
                <input id="messageField" className="px-4 mr-4 w-2/4 border-2 border-gray-400" type="text" placeholder="Write us a message ! "></input>
                <button className="p-2 text-center text-black px-4 hover:bg-blue-700 hover:text-white border-2 border-gray-600">Send Message</button>

            </div>
        </>
    )
}

export default ContactUs
