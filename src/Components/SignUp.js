import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [credentials, setcredentials] = useState({name:"",email:"",password:"",cpassword:""});
    let navigate = useNavigate();

    //destructuring
    const {username,email,password}=credentials;

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/signUp", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({username,email,password}),
          });
          const json = await response.json();
          //console.log(credentials.password," ",credentials.cpassword);
          // console.log(json.success,json.authToken);
          if(json.success)
          {
            localStorage.setItem('id',json._id);
            localStorage.setItem('username',json.username);
            localStorage.setItem('email',json.email);
            localStorage.setItem('token',json.authToken);
            //to redirect we are using useNavigate or useHistory hook from react router dom
            navigate("/content");
            
          }else{
            console.log(json);
            
          }
    }
    const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value});
        //console.log(credentials.password,"  ",credentials.cpassword);
      }
    return (
        <>
            <Navbar />
            <form onSubmit={handleSubmit}>

                <div className="bg-[#F9FAFB] h-screen w-screen flex items-center pt-6">
                    <div className="h-max w-3/5 mx-auto flex flex-col items-center">
                        <h1 className="font-bold text-center  text-3xl">Begin your adventures with us ! </h1>
                        <div className="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm ">
                            
                            <div>
                                <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="email">Email</label>
                                <input onChange={onChange} className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="email" name="email" placeholder="xyz@gmail.com" required/>
                            </div>
                            <div>
                                <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="username">Name</label>
                                <input onChange={onChange} className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="username" name="username" placeholder="Username" required />
                            </div>
                            <div>
                                <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="password">Password</label>
                                <input onChange={onChange} className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="password" name="password" placeholder="******" required />
                            </div>

                            <div>
                                <input className="bg-black w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]" type="submit" value="SignUp" />
                            </div>


                        </div>
                        <p className="text-sm text-gray-500 mt-10">Already a member? <Link to="/login" className="text-black font-bold">Login</Link></p>
                    </div>
                </div>
            </form>
        </>
    )
}

export default SignUp
