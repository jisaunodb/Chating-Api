import React, { useEffect, useState } from 'react'
import imgs from '../../assets/Ellipse-profile.png'
import { FaEdit } from "react-icons/fa";
import { GrInfo } from "react-icons/gr";
import { MdAddPhotoAlternate } from "react-icons/md";
import { LuCircleHelp } from "react-icons/lu";
import { FaKey } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth/cordova';
import { updateProfile } from 'firebase/auth';
import { getDatabase, ref, set, update } from 'firebase/database';
import { userNameUpdate } from '../../slice/userSlice';

const SettingsInfo = () => {
const data = useSelector ((selctor) => (selctor?.userinfo?.value?.user))
const [showDisplayName, setshowDisplayName] = useState(data?.displayName)
const auth = getAuth()
const db = getDatabase();
const Dispatch = useDispatch()
const [NewName, setNewName] =useState("")
  const [show, setshow] = useState(false)
  const hendleprofileedit = ()=>{
    setshow(!show)
  }
const heldlenewname = () =>{
  console.log(showDisplayName);
  if(auth.currentUser){
  updateProfile(auth.currentUser, {
  displayName: {showDisplayName}
})
  update(ref(db, 'users/' + data?.uid), {
    username: showDisplayName,

  })
.then(()=>{
   // dispach system
   Dispatch(userNameUpdate(showDisplayName))
 })
 }


}
const heldleupload = (e) => {
 console.log(e.target.files[0]);

}
  return (
    <div className='flex gap-[36px] h-full'>
      <div className='w-[538px] shadow-2xl pt-[26px] pl-[] rounded-2xl'>
        <h2 className='text-[20px] font-semibold pl-[26px]'>Profile Settings</h2>
        <div className='flex items-center mt-[49px] gap-[30px] mr-[40px] ml-[42px] pb-[29px] border-b-[1px] border-[#BFBFBF]'>
          <img src={imgs} alt="" />
          <div>
            <h4 className='text-[25px] font-semibold'>{data?.displayName}</h4>
            <h5 className='text-[20px] font-normal'>Stay home stay safe</h5>
          </div>
        </div>
        <div className='mt-[43px] ml-[84px]'>
          <div className='flex gap-[10px] items-center'>
            <FaEdit className='text-[25px]' />
            <li onClick={hendleprofileedit} className='list-none text-[20px] font-normal'>Edit Profile Name.</li>
            </div>
            {
              show &&
              <div className='flex gap-[10px] items-center'>

              <input className='outline-none w-200px border-1 py-[5px] px-[10px] mt-[10px]'
              onChange={(e)=>setshowDisplayName (e.target.value)}
              value={showDisplayName}
              type="text" placeholder='Edit Profile Name' />
              <button onClick={heldlenewname} className='font-primary font-semibold py-[6px] px-[20px] mt-[10px] bg-black text-white rounded-[5px]'>Submit</button>
              </div>
            }
          <div className='flex gap-[10px] items-center mt-[37px]'>
            <GrInfo className='text-[25px]' />
            <li className='list-none text-[20px] font-normal'>Edit Profile Status Info.</li>
          </div>
          <div className='flex gap-[10px] items-center mt-[37px]'>
            <MdAddPhotoAlternate className='text-[25px]' />
            <li className='list-none text-[20px] font-normal'>Edit Profile Photo.</li>
          </div>
            <div>
              <input type="file" onChange={heldleupload}/>
              {/* <button >Upload</button> */}
            </div>
          <div className='flex gap-[10px] items-center mt-[37px]'>
            <LuCircleHelp className='text-[25px]' />
            <li className='list-none text-[20px] font-normal'>Help.</li>
          </div>
        </div>
      </div>
      <div className='w-[538px] shadow-2xl pt-[26px] pl-[] rounded-2xl'>
        <h2 className='text-[20px] font-semibold pl-[26px]'>Account Settings</h2>
        <div className='mt-[43px] ml-[84px]'>
          <div className='flex gap-[10px] items-center'>
            <FaKey className='text-[25px]' />
            <li className='list-none text-[20px] font-normal'>Change Password</li>
          </div>
          <div className='flex gap-[10px] items-center mt-[37px]'>
            <RiDeleteBin5Line className='text-[25px]' />
            <li className='list-none text-[20px] font-normal'>Edit Profile Status Info.</li>
          </div>

        </div>
      </div>

    </div>
  )
}

export default SettingsInfo