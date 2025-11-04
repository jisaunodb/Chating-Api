import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import joinUser from "../../assets/join-user.png"
const Grouplist = () => {
  return (
    <div className='font-primary mt-[100px]'>
        <div className='w-[427px] h-[347px] rounded-2xl shadow ml-[20px] overflow-y-scroll'>
            <div className='flex justify-between items-center pt-[13px] px-[20px]'>
                <h3 className='text-[20px] font-semibold font-primary text-black'>Groups List</h3>
                <BsThreeDotsVertical />
            </div>
            <div className='flex items-center ml-[20px] mr-[39px] mt-[17px] border-b pb-[14px] border-[#BFBFBF]'>
                <img src={joinUser} alt="" />
                <div className='ml-[14px] pr-[54px]'>
                    <h5 className='text-[18px] font-semibold font-primary '>Friends Reunion</h5>
                    <p>Hi Guys, Wassup!</p>
                </div>
                <button className='font-primary font-semibold text-[20px] px-[22px] bg-black text-white rounded-[5px]'>Join</button>
            </div>
            <div className='flex items-center ml-[20px] mr-[39px] mt-[17px] border-b pb-[14px] border-[#BFBFBF]'>
                <img src={joinUser} alt="" />
                <div className='ml-[14px] pr-[54px]'>
                    <h5 className='text-[18px] font-semibold font-primary '>Friends Reunion</h5>
                    <p>Hi Guys, Wassup!</p>
                </div>
                <button className='font-primary font-semibold text-[20px] px-[22px] bg-black text-white rounded-[5px]'>Join</button>
            </div>
            <div className='flex items-center ml-[20px] mr-[39px] mt-[17px]  pb-[14px] ]'>
                <img src={joinUser} alt="" />
                <div className='ml-[14px] pr-[54px]'>
                    <h5 className='text-[18px] font-semibold font-primary '>Friends Reunion</h5>
                    <p>Hi Guys, Wassup!</p>
                </div>
                <button className='font-primary font-semibold text-[20px] px-[22px] bg-black text-white rounded-[5px]'>Join</button>
            </div>
        </div>
        <div className='w-[427px] h-[462px] rounded-2xl shadow ml-[20px] mt-[43px] overflow-y-scroll'>
            <div className='flex justify-between items-center pt-[13px] px-[20px]'>
                <h3 className='text-[20px] font-semibold font-primary text-black'>Friend  Request</h3>
                <BsThreeDotsVertical />
            </div>
            <div className='flex justify-around items-center ml-[20px] mr-[27px] mt-[17px] border-b pb-[14px] border-[#BFBFBF]'>
                <img src={joinUser} alt="" />
                <div className='ml-[14px] pr-[54px]'>
                    <h5 className='text-[18px] font-semibold font-primary '>Raghav</h5>
                    <p>Dinner?</p>
                </div>
                <button className='mr-[33px] font-primary font-semibold text-[20px] px-[22px] bg-black text-white rounded-[5px]'>Accept</button>
            </div>
            <div className='flex justify-around items-center ml-[20px] mr-[27px] mt-[17px] border-b pb-[14px] border-[#BFBFBF]'>
                <img src={joinUser} alt="" />
                <div className='ml-[14px] pr-[54px]'>
                    <h5 className='text-[18px] font-semibold font-primary '>Raghav</h5>
                    <p>Dinner?</p>
                </div>
                <button className='mr-[33px] font-primary font-semibold text-[20px] px-[22px] bg-black text-white rounded-[5px]'>Accept</button>
            </div>
            <div className='flex justify-around items-center ml-[20px] mr-[27px] mt-[17px] border-b pb-[14px] border-[#BFBFBF]'>
                <img src={joinUser} alt="" />
                <div className='ml-[14px] pr-[54px]'>
                    <h5 className='text-[18px] font-semibold font-primary '>Raghav</h5>
                    <p>Dinner?</p>
                </div>
                <button className='mr-[33px] font-primary font-semibold text-[20px] px-[22px] bg-black text-white rounded-[5px]'>Accept</button>
            </div>
            <div className='flex justify-around items-center ml-[20px] mr-[27px] mt-[17px] border-b pb-[14px] border-[#BFBFBF]'>
                <img src={joinUser} alt="" />
                <div className='ml-[14px] pr-[54px]'>
                    <h5 className='text-[18px] font-semibold font-primary '>Raghav</h5>
                    <p>Dinner?</p>
                </div>
                <button className='mr-[33px] font-primary font-semibold text-[20px] px-[22px] bg-black text-white rounded-[5px]'>Accept</button>
            </div>
            <div className='flex justify-around items-center ml-[20px] mr-[27px] mt-[17px] pb-[14px] '>
                <img src={joinUser} alt="" />
                <div className='ml-[14px] pr-[54px]'>
                    <h5 className='text-[18px] font-semibold font-primary '>Raghav</h5>
                    <p>Dinner?</p>
                </div>
                <button className='mr-[33px] font-primary font-semibold text-[20px] px-[22px] bg-black text-white rounded-[5px]'>Accept</button>
            </div>



        </div>
    </div>
  )
}

export default Grouplist