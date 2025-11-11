
import { logEvent } from "firebase/analytics";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, {  useState } from 'react'
import { Link } from 'react-router';
const ForgotPassword = () => {


    const auth = getAuth();
const [email,setEmail] = useState("")
      const [emailerr,setemailerr]=useState("")
     const hendleEmail = (e) =>{
        setEmail(e.target.value);
         setemailerr ("")
      }



const forgotpass = ()=>{
    // console.log("fhuhf");
if (!email) {
          setemailerr("Please Your Email");

        }else {
          if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            setemailerr("Please Your right Email");

          }
        }

        if (email && /^[^\s@]+@[^\s@]/.test(email)){
sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);

    const errorMessage = error.message;
    console.log(errorMessage);


    // ..
  });
}





}











  return (
    <div className='w-full h-screen  bg-[#4C3821] flex items-center'>
        <div className='mx-auto py-[10px] px-4 w-1/2 bg-white rounded-[10px]'>
            <h2 className='text-[40px] text-[#11175D] '>Forgot Password</h2>
            <div>

                <div className='mt-[39px] w-[370px] relative'>
                <p className='top-[-10px] left-[55px] bg-white px-[8px] absolute text-[#11175D] text-[13px] font-secoundary font-semibold'>Email Address</p>
                <input type="email" onChange={hendleEmail} value={email} className='text-[20px] text-[#11175D] font-secoundary font-semibold outline-none border-[#11175D] border-2 rounded-[10px] py-[26px] px-[55px] ' placeholder='Youraddres@email.com' />
                <p className='text-red-600 text-[20px]'>{emailerr}</p>
              </div>

            </div>

        <button className='cursor-pointer text-[20px] text-white font-semibold font-secoundary bg-primary px-[40px] text-center py-[20px] mt-[51px] rounded-[50px] relative' onClick={forgotpass}>Reset Password

                <span className=' absolute w-[78px] -translate-1/2 h-[10px] top-[15px] left-1/2 bg-[#191040] blur-[10px]'></span>
        </button>
        <Link to="/login">

        <button className='ml-[10px] cursor-pointer text-[20px] text-white font-semibold font-secoundary bg-primary px-[40px] text-center py-[20px] mt-[51px] rounded-[50px] relative' >Go Back

                <span className=' absolute w-[78px] -translate-1/2 h-[10px] top-[15px] left-1/2 bg-[#191040] blur-[10px]'></span>
        </button>
        </Link>
        </div>
    </div>
  )
}

export default ForgotPassword