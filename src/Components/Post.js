import React from 'react'
import { useState } from 'react';
import Modal from 'react-modal';


const Post = () => {
    let subtitle;
    const customStyles = {
        content: {
            top: '10%',
            left: '10%',
            right: '10%',
            bottom: '10%',
            // marginRight: '-20%',
            //transform: 'translate(-20%, -20%)',

        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the color and opacity as needed
        },
        fontFamily: 'Inter Extra',
    };

    const customStyles2 = {
        content: {
            top: '30%',
            left: '20%',
            right: '20%',
            bottom: '30%',
            // marginRight: '-20%',
            // transform: 'translate(-20%, -20%)',

        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the color and opacity as needed
        },
        fontFamily: 'Inter Extra',
        
    };

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpen2, setIsOpen2] = useState(false);

    function openModal() {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    }
    function openModal2() {
        setIsOpen2(true);
        document.body.style.overflow = 'hidden';
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = "#000";
    }

    function closeModal() {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    }
    function closeModal2() {
        setIsOpen2(false);
        document.body.style.overflow = 'auto';
    }


    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", cpassword: "" });



    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
        //console.log(credentials.password,"  ",credentials.cpassword);
    }

    return (
        <>

            <div className="flex bg-white shadow-lg rounded-lg md:mx-auto my-10 max-w-md md:max-w-4xl " style={{ "width": "100%", "fontFamily": "Inter Extra" }}>
                <div className="flex items-start px-4 py-6">
                    <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />
                    <div className="">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-900 -mt-1">Brad Adams </h2>
                            <small className="text-sm text-gray-700">22h ago</small>
                        </div>
                        <p className="text-gray-700">Joined 12 SEP 2012. </p>
                        <p className="mt-3 text-gray-700 text-sm font-semibold">
                            Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit amet!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                            Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit amet!
                            <br></br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                            Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit amet!
                            <br></br>
                            <br></br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                            Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit amet!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.

                            <br></br>
                            <br></br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                            Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit amet!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.

                            <br></br>
                            <br></br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                            Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit amet!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                            <br></br>
                            <br></br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                            Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit amet!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                        </p>
                        <div className="mt-10 mb-6 flex justify-end">
                            <button className="flex text-gray-700 text-sm mr-8 dark:text-gray-800 hover:text-blue-400">
                                <svg className="w-4 h-4 mr-1 text-gray-800 dark:text-gray-800 hover:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                                </svg>
                                <span>12</span>
                            </button>

                            <button className="flex  text-gray-700 text-sm mr-8 ">
                                <svg class="w-4 h-4 mr-1 text-gray-800 dark:text-gray-800 hover:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.546l3.2 3.659a1 1 0 0 0 1.506 0L13.454 14H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 10H5a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Zm5-4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2Z" />
                                </svg>
                                <span>8</span>
                            </button>

                            <button className="flex  text-gray-700 text-sm mr-8">
                                <svg className="w-4 h-4 mr-1 text-gray-800  dark:text-gray-800 hover:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z" />
                                </svg>
                                {/* <span>share</span> */}
                            </button>


                            <button className='flex mr-8' onClick={openModal}>
                                <svg className="w-4 h-4 mr-1 text-gray-800 dark:text-gray-800 hover:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                                    <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                                </svg>

                            </button>
                            <Modal isOpen={modalIsOpen}

                                onRequestClose={closeModal}
                                style={customStyles}
                                onAfterOpen={afterOpenModal}
                                contentLabel="Update Modal" >
                                <div className='flex flex-row justify-between'>
                                    <h2 className="text-blue-500 " ref={(_subtitle) => (subtitle = _subtitle)}>Edit</h2>
                                    <button onClick={closeModal} className=''>
                                        <svg class="w-[17px] h-[17px] text-gray-800 dark:text-gray-800 hover:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                    </button>

                                </div>

                                <form>
                                    <div className="bg-white  p-10 flex flex-col gap-4 text-sm ">

                                        <div className='flex flex-row justify-between'>
                                            <label className="text-gray-600 font-bold pt-2 mr-3" htmlFor="email">Title</label>
                                            <input onChange={onChange} className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="text" name="title" placeholder="Enter your new title here ! " required />
                                        </div>
                                        <div className='flex flex-col justify-center'>
                                            <label className="text-gray-600 font-bold inline-block pt-2 mb-2" htmlFor="username">Content</label>
                                            <textarea className='border border-gray-400 focus:outline-slate-400 rounded-md shadow-sm px-5 py-2' placeholder="Write your description here !" id="content" rows={50} ></textarea>
                                            {/* <input onChange={onChange} className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="text" name="content" placeholder="Write your new content here..." required /> */}
                                        </div>


                                        <div className='flex flex-row-reverse'>
                                            <input className="bg-black w-1/12 py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196] " type="submit" value="Update" />
                                        </div>


                                    </div>
                                </form>


                            </Modal>

                            <button className='flex mr-8' onClick={openModal2}>
                                <svg className="w-4 h-4 mr-1 text-gray-800 dark:text-gray-800 hover:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                                </svg>

                            </button>
                            <Modal isOpen={modalIsOpen2}
                                style={customStyles2}

                                onRequestClose={closeModal2}
                                
                                onAfterOpen={afterOpenModal}
                                contentLabel="Update Modal">

                                <div className='flex flex-row justify-between'>
                                    <h2 className="text-blue-500 " ref={(_subtitle) => (subtitle = _subtitle)}>Delete this post ? </h2>
                                    <button onClick={closeModal2} className=''>
                                        <svg class="w-[17px] h-[17px] text-gray-800 dark:text-gray-800 hover:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                    </button>
                                    

                                </div>
                                <div className='block text-center pt-14'>
                                        <button className='bg-black w-1/12 py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196] '>
                                            Yes
                                        </button>
                                        <button onClick={closeModal2} className='ml-3 bg-black w-1/12 py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196] '>
                                            No
                                        </button>
                                </div>

                            </Modal>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post
