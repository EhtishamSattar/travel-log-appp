import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <>
            <div className="bg-[#F9FAFB] h-screen flex items-center ">
                <div className="h-max w-3/5 mx-auto flex flex-col items-center">
                    <h1 className="font-bold text-center pb-10 text-3xl">Begin your adventures with us ! </h1>
                    <div className="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm ">
                        <div>
                            <label className="text-gray-600 font-bold inline-block pb-2" for="email">Email</label>
                            <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="email" name="email" placeholder="xyz@gmail.com" />
                        </div>
                        <div>
                            <label className="text-gray-600 font-bold inline-block pb-2" for="password">Password</label>
                            <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="password" name="password" placeholder="******" />
                        </div>

                        <div>
                            <input className="bg-[#4F46E5] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]" type="submit" value="Login" />
                        </div>


                    </div>
                    <p className="text-sm text-gray-500 mt-10">Not a member? <Link to="/signUp" className="text-[#4F46E5] font-bold">SignUp</Link></p>
                </div>
            </div>
        </>
    )
}

export default LoginPage
