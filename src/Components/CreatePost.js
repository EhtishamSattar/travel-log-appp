import React from 'react'
import NavbarMain from './NavbarMain'

const CreatePost = () => {
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
                    <label className='mb-2'>Title</label>
                    <input type='text' className='border-2 p-1 pl-2' placeholder='Title of your blog' />
                </div>
                <div className='flex flex-col w-full'>
                    <label className='mb-2' >Content</label>
                    <textarea type='text' placeholder='Write your blog here' />
                </div>

            </div>
                

            </>
            )
}

            export default CreatePost
