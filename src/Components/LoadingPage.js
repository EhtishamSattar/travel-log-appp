import React from 'react'
import traveloo from '../icons/traveloo.png';

const LoadingPage = () => {
    return (
        <>
            <div className="flex justify-center items-center h-screen w-screen">
                <img src={traveloo} alt="app logo"></img>
            </div>
        </>
    )
}

export default LoadingPage
