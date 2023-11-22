import React from 'react'
import NavbarMain from './NavbarMain'
import Post from './Post'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Plot = () => {
    const [posts, setposts] = useState([]);

    const getData=async ()=>{
        const response=await fetch("http://localhost:5000/api/post/getPosts",{
        method:"GET",
        headers:{
            "Content-Type":"Application/json",
            "auth-token":localStorage.getItem('token')
        }
    });

    const json = await response.json();
    let data = JSON.stringify(json);
    data = JSON.parse(data);
    console.log(data);
    setposts(data);
    }
    
    getData();

    return (
        <>

            <NavbarMain />
            <div id="postsContainer" className='flex flex-row w-screen pt-10' style={{ "fontFamily": "Inter Extra" }}>
                <div className='w-3/4'>
                    <div className='md:mx-auto my-10 max-w-md md:max-w-4xl '>
                        <div className="Search justify-center text-center" style={{ "fontFamily": "Inter Extra" }}>


                            <div className='my-6 px-6 pt-4 z-10 font-semibold'>

                                <div
                                    className="flex bg-white rounded-full w-5/6 h-11 m-auto border-2  focus-within:ring-1 ring-black"
                                >
                                    <input
                                        type="text"
                                        className="w-full rounded-full px-3 py-3 text-sm text-gray-700 focus:outline-none font-semibold"
                                        placeholder="Search blogs here  "
                                    />
                                    <button
                                        className="rounded-full px-3 py-3 hidden md:block bg-gray-400"
                                    >
                                        <svg
                                            className="w-4 h-4 fill-current"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>

                            </div>


                        </div>

                        <div className='flex flex-row justify-between'>
                            <div className='text-3xl font-extrabold'>
                                Welcome {localStorage.getItem('username')}
                            </div>
                            <div className="flex flex-row cursor-pointer">
                                <div className='pb-3 pr-2'>
                                    <Link to='/createpost' >Create Post</Link>
                                </div>
                                <div>
                                    <Link to='/createpost'>
                                    <button className='rounded-md '><svg className="w-6 h-6 text-gray-800 dark:gray-800 hover:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z" />
                                    </svg></button>
                                    </Link> 

                                </div>
                            </div>
                        </div>
                    </div>
                    {posts.map((post)=>{
                        return(
                            <Post title={post.title} description={post.description} image={post.image} username={post.username} />
                        )
                        
                    })
                    }
                    
                    {/* <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post /> */}
                </div>

                <div className='w-1/4 overflow-y-hidden h-screen fixed right-0 border border-r-2'>
                    <Sidebar />
                </div>

            </div>
        </>
    )
}

export default Plot
