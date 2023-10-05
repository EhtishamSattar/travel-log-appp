import React from 'react'
import { Link } from 'react-router-dom'
import Navabar from './Navbar'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const LoginPage = () => {
    const navigate=useNavigate();   

    const [credentials, setcredentials] = useState({name:"",email:"",password:"",cpassword:""});


    //destructuring
    const {name,email,password}=credentials;

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createUser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name,email,password}),
          });
          const json = await response.json();
          console.log(credentials.password," ",credentials.cpassword);
          // console.log(json.success,json.authToken);
          if(json.success)
          {
            localStorage.setItem('token',json.authToken);
            //to redirect we are using useNavigate or useHistory hook from react router dom
            navigate("/content");
            alert("You logged in successfully");
            
          }else{
            console.log(json);
            alert(json.error);
            
          }
    }
    const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value});
        //console.log(credentials.password,"  ",credentials.cpassword);
      }
    return (
        <>
            <Navabar />
            <div className="bg-[#F9FAFB] h-screen flex items-center pt-12">
                <div className="h-max w-3/5 mx-auto flex flex-col items-center">
                    <h1 className="font-bold text-center pb-2 text-3xl">New experiences awaiting ! </h1>
                    <div className="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm ">
                        <form onSubmit={handleSubmit}>

                            <div>
                                <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="email">Email</label>
                                <input onChange={onChange} className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="email" name="email" placeholder="xyz@gmail.com" required/>
                            </div>
                            <div>
                                <label className="text-gray-600 font-bold inline-block pb-2 pt-4" htmlFor="name">Name</label>
                                <input onChange={onChange} className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="name" name="name" placeholder="Username" required/>
                            </div>
                            <div className='mt-4'>
                                <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="password">Password</label>
                                <input onChange={onChange} className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2 " type="password" name="password" placeholder="******" required/>
                            </div>

                            <div>
                                <input className="bg-black w-full py-2 mt-6 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]" type="submit" value="Login" />
                            </div>


                        </form>
                    </div>
                    <p className="text-sm text-gray-500 mt-10">Not a member? <Link to="/signUp" className="text-black font-bold">SignUp</Link></p>
                </div>
            </div>
        </>
    )
}

export default LoginPage
