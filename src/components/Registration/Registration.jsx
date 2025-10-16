import React, { useState } from 'react'
import img from '../../assets/registation-pic.png'
import { Link } from 'react-router'
import { FaEyeSlash ,FaEye  } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { CgPassword } from 'react-icons/cg';

const Registration = () => {
  const auth = getAuth();

  const [show,setshow] = useState (false)

  const [email,setEmail] = useState("")
  const [emailerr,setemailerr]=useState("")

  const hendleEmail = (e) =>{
    setEmail(e.target.value);
     setemailerr ("")
  }
  const [fullname,setfullname] = useState("")
  const [fullnameerr,setfullnameerr] =useState("")
  const hendlefullname =(e) =>{
    setfullname(e.target.value);
    setfullnameerr("")
  }
const [password,setpass]=useState("")
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
    if (!fullname){
      setfullnameerr("Please Your Name")
    }
    if(!password){
      setpasserr("Please Your Password")
    }
    else{
      if(!/(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])/.test(password)){
        setpasserr("at least 1 lowercase")
      }
    }
    if (email && fullname && password && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      console.log(user);
    })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
  }

// console.log(emailerr);

  return (
    <div>
      <div className='flex items-center p-[100px] '>
        <div className='w-1/2'>
          <h3 className='text-[#11175D] text-[34px] font-secoundary font-bold'>Get started with easily register</h3>
          <p className='text-[20.60px] font-secoundary font-normal '>Free register and you can enjoy it</p>
          <div className='mt-[39px] w-[370px] relative'>
            <p className='top-[-10px] left-[55px] bg-white px-[8px] absolute text-[#11175D] text-[13px] font-secoundary font-semibold'>Email Address</p>
            <input type="email" onChange={hendleEmail} value={email} className='text-[20px] text-[#11175D] font-secoundary font-semibold outline-none border-[#11175D] border-2 rounded-[10px] py-[26px] px-[55px] ' placeholder='Ladushing691@gmail.com' />
            <p className='text-red-600 text-[20px]'>{emailerr}</p>
          </div>
          <div className='mt-[39px] w-[370px] relative'>
            <p className='top-[-10px] left-[55px] bg-white px-[8px] absolute text-[#11175D] text-[13px] font-secoundary font-semibold'>Ful name</p>
            <input type="text" onChange={hendlefullname} className='text-[20px] text-[#11175D] font-secoundary font-semibold outline-none border-[#11175D] border-2 rounded-[10px] py-[26px] px-[55px] ' placeholder='Ladushing GTG' />
            <p className='text-red-600 text-[20px]'>{fullnameerr}</p>
          </div>
          <div className='mt-[39px] w-[370px] relative'>
            <p className='top-[-10px] left-[55px] bg-white px-[8px] absolute text-[#11175D] text-[13px] font-secoundary font-semibold'>Password</p>
            <div className='flex items-center'>
              <input  className=' text-[20px] text-[#11175D] font-secoundary font-semibold outline-none border-[#11175D] border-2 rounded-[10px] py-[26px] px-[55px] ' placeholder='..........' onChange={hendlepass}

                type={show? "password" : "text" }
              />
              <div onClick={() => setshow (!show)} className=' absolute right-[20px]  cursor-pointer'>

                {
                  show? <FaEye  /> : <FaEyeSlash/>
                }
              </div>
            </div>

            <p className='text-red-600 text-[20px]'>{passerr}</p>
            <button className='cursor-pointer text-[20px] text-white font-semibold font-secoundary bg-primary w-full text-center py-[20px] mt-[51px] rounded-[50px] relative' onClick={CLickme}>Sign up</button>
            <span className=' absolute w-[78px] -translate-1/2 h-[10px] top-[200px] left-1/2 bg-[#191040] blur-[10px]'></span>
            <p className='mt-[35px] text-center text-[14px]'>Already  have an account ? <Link to="/login"><span href="#" className='text-[#EA6C00] font-bold'>Sign up</span>
            </Link></p>
          </div>
        </div>
        <div className='w-1/2'>
          <img src={img} alt="" className='h-screen w-full object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Registration