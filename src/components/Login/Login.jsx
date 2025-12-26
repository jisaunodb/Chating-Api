// import React from 'react'
import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";

import img from '../../assets/login-pic.png'
import { Link, useNavigate } from 'react-router';
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {Bounce, ToastContainer, toast } from 'react-toastify';
import { FaEyeSlash ,FaEye  } from "react-icons/fa";

import { GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { userinfo } from '../../slice/userSlice';
const Login = () => {
  const dispatch = useDispatch()

const navigate = useNavigate()

const auth = getAuth();
  const [show,setshow] = useState (false)
    const [email,setEmail] = useState("")
      const [emailerr,setemailerr]=useState("")


      const hendleEmail = (e) =>{
        setEmail(e.target.value);
         setemailerr ("")
      }
    //   const [fullname,setfullname] = useState("")
    //   const [fullnameerr,setfullnameerr] =useState("")
    //   const hendlefullname =(e) =>{
    //     setfullname(e.target.value);
    //     setfullnameerr("")
    //   }
    const [pass,setpass]=useState("")
    const [passerr,setpasserr]=useState("")
      const hendlepass =(e) =>{
        setpass(e.target.value);
        setpasserr("")
      }

      // console.log(fullname);

      // console.log(email);

      const CLickme = () =>{
        // console.log(email);
        if (!email) {
          setemailerr("Please Your Email");

        }else {
          if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            setemailerr("Please Your right Email");

          }
        }
        // if (!fullname){
        //   setfullnameerr("Please Your Name")
        // }
        if(!pass){
          setpasserr("Please Your Password")
        }else{
          if(!/(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])/.test(pass)){
            setpasserr("at least 1 lowercase")
          }
        }
        if (email && pass && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){

          signInWithEmailAndPassword(auth, email, pass)
          .then((user) => {
          // Signed in
           console.log(user);
           toast.success("Login succcess")
           dispatch(userinfo(user?.user))
           localStorage.setItem ("userinfo" , JSON.stringify(user))
          console.log(userinfo);

                 setTimeout(() => {

                   navigate("/home")
                 }, 2000);

          })
          .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);

          const errorMessage = error.message;
          console.log(errorMessage);

          if(errorCode.includes("auth/invalid-credential")){
                toast.error("sorry! wrong password & email")

              }



          });
        }
      }
      const provider = new GoogleAuthProvider();
      const ctg = () => {
        signInWithPopup(auth, provider)
.then((user) => {
 console.log(user);

}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  console.log(errorCode);

});
      }
  return (
    <div>
      <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick={false}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                  transition={Bounce}
                />
          <div className='flex items-center p-[100px] '>
            <div className='w-1/2'>
              <h3 className='text-[#11175D] text-[34px] font-secoundary font-bold'>Login to your account!</h3>
              <p className='text-[20.60px] font-secoundary font-normal '>Free register and you can enjoy it</p>
               <div  className='w-[270px] flex items-center justify-around rounded-[15px] cursor-pointer text-[20px] font-semibold font-secoundary bg-transparent border-2  text-center py-[20px] mt-[51px]' onClick={ctg}>
                <FaGoogle />
                <button  className=' cursor-pointer  relative'>Login with Google</button>
              </div>
              <div className='mt-[39px] w-[370px] relative'>
                <p className='top-[-10px] left-[55px] bg-white px-[8px] absolute text-[#11175D] text-[13px] font-secoundary font-semibold'>Email Address</p>
                <input type="email" onChange={hendleEmail} value={email} className='text-[20px] text-[#11175D] font-secoundary font-semibold outline-none border-[#11175D] border-2 rounded-[10px] py-[26px] px-[55px] ' placeholder='Youraddres@email.com' />
                <p className='text-red-600 text-[20px]'>{emailerr}</p>
              </div>

              <div className='mt-[39px] w-[370px] relative'>
                <p className='top-[-10px] left-[55px] bg-white px-[8px] absolute text-[#11175D] text-[13px] font-secoundary font-semibold'>Password</p>
                <input  className='text-[20px] text-[#11175D] font-secoundary font-semibold outline-none border-[#11175D] border-2 rounded-[10px] py-[26px] px-[55px]  ' placeholder='Enter your password' onChange={hendlepass}
                value={pass}
                type={show? "password" : "text" }
                />

                <div onClick={() => setshow (!show)} className=' absolute right-[20px]  cursor-pointer top-[35px]'>

                                {
                                  show? <FaEye  /> : <FaEyeSlash/>
                                }
                          </div>
                <p className='text-red-600 text-[20px]'>{passerr}</p>
                <button className='cursor-pointer text-[20px] text-white font-semibold font-secoundary bg-primary w-full text-center py-[20px] mt-[51px] rounded-[50px] relative' onClick={CLickme}>Login to Continue

                <span className=' absolute w-[78px] -translate-1/2 h-[10px] top-[15px] left-1/2 bg-[#191040] blur-[10px]'></span>
                </button>
                <Link to="/forgot">
                <p className='text-[#EA6C00] font-bold text-center mt-[10px] cursor-pointer'>Forgot password</p>
                </Link>
                <p className='mt-[35px] text-center text-[14px]'>Don’t have an account ? <Link to="/">
                 <a href="#" className='text-[#EA6C00] font-bold'>Sign Up</a></Link></p>
              </div>
            </div>
            <div className='w-1/2'>
              <img src={img} alt="" className='h-screen w-full object-cover' />
            </div>
          </div>
        </div>
  )
}

export default Login