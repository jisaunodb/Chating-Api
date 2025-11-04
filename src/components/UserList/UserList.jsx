import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import joinUser from "../../assets/join-user.png"
import { FaSquarePlus } from "react-icons/fa6";

const UserList = () => {
  return (
    <div className='font-primary '>
        <div className='w-[344px] h-[] rounded-2xl shadow '>
            <div className='flex justify-between items-center pt-[13px] px-[20px]'>
                <h3 className='text-[20px] font-semibold font-primary text-black'>Friends</h3>
                <BsThreeDotsVertical />
            </div>
            <div className='flex justify-around items-center ml-[20px] mr-[28px] mt-[17px] border-b pb-[14px] border-[#BFBFBF]'>
                <img src={joinUser} alt="" />
                <div className='ml-[14px] pr-[54px]'>
                    <h5 className='text-[18px] font-semibold font-primary '>Raghav</h5>
                    <p>Dinner?!</p>
                </div>
                <FaSquarePlus className='w-[30px] h-[30px]'/>

            </div>
            <div className='flex justify-around items-center ml-[20px] mr-[28px] mt-[17px] border-b pb-[14px] border-[#BFBFBF]'>
                <img src={joinUser} alt="" />
                <div className='ml-[14px] pr-[54px]'>
                    <h5 className='text-[18px] font-semibold font-primary '>Raghav</h5>
                    <p>Dinner?!</p>
                </div>
                <FaSquarePlus className='w-[30px] h-[30px]'/>

            </div>
            <div className='flex justify-around items-center ml-[20px] mr-[28px] mt-[17px] border-b pb-[14px] border-[#BFBFBF]'>
                <img src={joinUser} alt="" />
                <div className='ml-[14px] pr-[54px]'>
                    <h5 className='text-[18px] font-semibold font-primary '>Raghav</h5>
                    <p>Dinner?!</p>
                </div>
                <FaSquarePlus className='w-[30px] h-[30px]'/>

            </div>
            <div className='flex justify-around items-center ml-[20px] mr-[28px] mt-[17px]  pb-[14px] '>
                <img src={joinUser} alt="" />
                <div className='ml-[14px] pr-[54px]'>
                    <h5 className='text-[18px] font-semibold font-primary '>Raghav</h5>
                    <p>Dinner?!</p>
                </div>
                <FaSquarePlus className='w-[30px] h-[30px]'/>

            </div>


        </div>
        <div className='w-[344px] h-[] rounded-2xl shadow mt-[43px]'>
            <div className='flex justify-between items-center pt-[13px] px-[20px]'>
                <h3 className='text-[20px] font-semibold font-primary text-black'>My Groups</h3>
                <BsThreeDotsVertical />
            </div>
            <div className='flex justify-around items-center ml-[20px] mr-[28px] mt-[17px] border-b pb-[14px] border-[#BFBFBF]'>
                <img src={joinUser} alt="" />
                <div className='ml-[14px] pr-[28px]'>
                    <h5 className='text-[18px] font-semibold font-primary '>Raghav</h5>
                    <p>Dinner?!</p>
                </div>
                <button className='mr-[33px] font-primary font-semibold text-[20px] px-[22px] bg-black text-white rounded-[5px]'>unblock</button>
            </div>
            <div className='flex justify-around items-center ml-[20px] mr-[28px] mt-[17px] border-b pb-[14px] border-[#BFBFBF]'>
                <img src={joinUser} alt="" />
                <div className='ml-[14px] pr-[28px]'>
                    <h5 className='text-[18px] font-semibold font-primary '>Raghav</h5>
                    <p>Dinner?!</p>
                </div>
                <button className='mr-[33px] font-primary font-semibold text-[20px] px-[22px] bg-black text-white rounded-[5px]'>unblock</button>
            </div>
            <div className='flex justify-around items-center ml-[20px] mr-[28px] mt-[17px] border-b pb-[14px] border-[#BFBFBF]'>
                <img src={joinUser} alt="" />
                <div className='ml-[14px] pr-[28px]'>
                    <h5 className='text-[18px] font-semibold font-primary '>Raghav</h5>
                    <p>Dinner?!</p>
                </div>
                <button className='mr-[33px] font-primary font-semibold text-[20px] px-[22px] bg-black text-white rounded-[5px]'>unblock</button>
            </div>
            <div className='flex justify-around items-center ml-[20px] mr-[28px] mt-[17px] pb-[14px] '>
                <img src={joinUser} alt="" />
                <div className='ml-[14px] pr-[28px]'>
                    <h5 className='text-[18px] font-semibold font-primary '>Raghav</h5>
                    <p>Dinner?!</p>
                </div>
                <button className='mr-[33px] font-primary font-semibold text-[20px] px-[22px] bg-black text-white rounded-[5px]'>unblock</button>
            </div>


        </div>
    </div>
  )
}

export default UserList