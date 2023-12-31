import React from 'react'
import travelooVideo from '../icons/travelooVideo.mp4'
import Navabr from './Navbar'

const Video = () => {
    return (
        <>
            <Navabr/>
            <div className='Video w-screen h-screen bg-black'>
                
                <div className='w-3/4 h-3/4 m-auto pt-10'>

                <video className=''
                    src={travelooVideo} // Replace with the actual path to your video file
                    controls // Add this attribute to show video controls (play, pause, volume, etc.)
                    width="100%" // Set the width of the video player
                    height="100%" // Set the height of the video player
                    autoPlay // Add this attribute to autoplay the video when the page loads
                >
                    Your browser does not support the video tag.
                </video>
                </div>
                {/* <Video src={travelooVideo} autoPlay loop /> */}
            </div>
        </>
    )
}

export default Video
