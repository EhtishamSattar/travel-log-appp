import React from 'react'
import NavbarMain from './NavbarMain'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const CreatePost = () => {
    const navigate = useNavigate();
    const [credentials, setcredentials] = useState({ title: "", description: "" });

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });

    }

    const handlePost = async (e) => {

        e.preventDefault();
        const { title, description } = credentials;
        const response = await fetch("http://localhost:5000/api/post/createPost", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },

            body: JSON.stringify({ title, description, post_author: localStorage.getItem('id') }),
        });
        const json = await response.json();
        //console.log(credentials.password," ",credentials.cpassword);
        // console.log(json.success,json.authToken);
        if (json.success) {
            //localStorage.setItem('token',json.authToken);
            //to redirect we are using useNavigate or useHistory hook from react router dom
            alert("Post created successfully");
            navigate("/content");

            
            
        } else {
            console.log(json);
            alert(json.error);
            
        }
    }

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };

    return (

        <>
            <NavbarMain />
            <div className='createpost p-24 w-9/12 m-auto justify-between'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-3xl font-extrabold'>
                        Create Post
                    </div>
                    <div className='text-xl font-extrabold'>
                        Write your heart out!
                    </div>
                </div>
                <div className='flex flex-col w-full mb-5'>
                    <div>
                        <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="title">Title</label>
                        <input onChange={onChange} className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="text" name="title" placeholder="Blog Title" required />
                    </div>
                </div>
                <div className='flex flex-col w-full h-5/6'>
                    <div>

                        <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="description">Description</label>
                        <textarea onChange={onChange} className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2 h-72" type="text" name="description" placeholder="Write your Description " required />
                    </div>
                </div>

                <div className='flex flex-col w-full mb-5'>
                    <div>
                        <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="image">Upload an Image</label>
                        <input accept="image/*" onChange={handleImageChange} className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="file" name="image" placeholder="Upload Image" required />
                        {selectedImage && (
                            <div>
                                <h3>Selected Image Preview:</h3>
                                <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <button onClick={handlePost} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Post
                    </button>
                </div>
            </div>


        </>
    )
}

export default CreatePost
