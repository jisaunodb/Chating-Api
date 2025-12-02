import React from 'react'
import { FiHome } from "react-icons/fi";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";

import img from "../../assets/Ellipse-profile.png"
import { Link, useNavigate } from 'react-router';
import { getAuth, signOut } from "firebase/auth";

import { useDispatch, useSelector } from 'react-redux';
import { userinfo } from '../../slice/userSlice';
const Sideber = ({active}) => {
const data = useSelector((selctor) => (selctor?.userinfo?.value))
console.log(data, "sidebar");

  const auth = getAuth();

  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const exit = () =>{
    dispatch(userinfo(""));
    // localStorage.clear('userinfo');


    signOut(auth).then(() => {
      setTimeout(() => {
        localStorage.clear('userinfo');
        // navigate("/login")

      }, 2000);

    })


  }

  return (
    <div className='font-primary text-white bg-primary w-[186px] h-full rounded-2xl text-center'>
      <div className='text-center mx-auto pb-[20px]'>
        <img src={img} alt="" className='mx-auto pt-[38px]' />
      </div>
      <p className="font-bold uppercase">{data ?.displayName || data?.user?.displayName}</p>
      <div className='mt-[30px]'>
          <div className={`relative after:absolute after:content-[""] after:top-0 after:left-0 after:w-[167px] after:h-full ${active == "home" ? "after:bg-white" : "after:bg-transparent"}  after:z-[-1] z-1 after:ml-[20px] after:rounded-lg before:absolute before:content-[""] before:top-0 before:right-0 before:h-full before:w-[10px] before:bg-[#1E1E1E] before:rounded-tl-lg before:rounded-bl-lg before:shadow-2xl/90 before:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] py-[10px] ml-[27px]`}>
            <Link to="/home">
              <FiHome className=' w-[43px] h-[46px] ml-[45px] mr-[70px] text-black'/>
            </Link>
          </div>
          {/* <div className=' absolute w-[8px] h-[88px] bg-[#1E1E1E] rounded-l-3xl top-0 right-0'></div> */}
      </div>
      <div className={`relative after:absolute after:content-[""] after:top-0 after:left-0 after:w-[167px] after:h-full ${active == "massage" ? "after:bg-white" : "after:bg-transparent"}  after:z-[-1] z-1 after:ml-[20px] after:rounded-lg before:absolute before:content-[""] before:top-0 before:right-0 before:h-full before:w-[10px] before:bg-[#1E1E1E] before:rounded-tl-lg before:rounded-bl-lg before:shadow-2xl/90 before:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] py-[10px] ml-[27px]`}>
        <Link to="/msg">
        <LuMessageCircleMore className='w-[43px] h-[46px] mx-auto text-[#C3C3C3]'/>
        </Link>
      </div>
      <div className='text-center mx-auto mt-[69px]'>
        <IoSettingsOutline className='w-[43px] h-[46px] mx-auto text-[#C3C3C3]'/>
      </div>
      <div className='text-center mx-auto mt-[334px] pb-[47px]'>
        <ImExit onClick={exit} className=' cursor-pointer w-[43px] h-[46px] mx-auto text-[#C3C3C3]'/>
      </div>
    </div>
  )
}

export default Sideber