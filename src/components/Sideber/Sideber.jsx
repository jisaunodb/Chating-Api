import React from 'react'
import { FiHome } from "react-icons/fi";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";

import img from "../../assets/Ellipse-profile.png"
import { useNavigate } from 'react-router';
import { getAuth, signOut } from "firebase/auth";

import { useDispatch, useSelector } from 'react-redux';
import { userinfo } from '../../slice/userSlice';
const Sideber = () => {
const data = useSelector((selctor) => (selctor.userinfo.value.user))
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
      <p className="font-bold uppercase">{data ?.displayName}</p>
      <div className='mt-[78px] bg-[#fff] w-[161px] h-[88px] ml-[25px] rounded-l-2xl relative'>
          <div className='py-[20px] '>
              <FiHome className=' w-[43px] h-[46px] ml-[45px] mr-[70px] text-black'/>
          </div>
          <div className=' absolute w-[8px] h-[88px] bg-[#1E1E1E] rounded-l-3xl top-0 right-0'></div>
      </div>
      <div className='text-center mx-auto mt-[57px]'>
        <LuMessageCircleMore className='w-[43px] h-[46px] mx-auto text-[#C3C3C3]'/>
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