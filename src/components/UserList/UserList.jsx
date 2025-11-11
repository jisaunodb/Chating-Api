import React, { useState, useEffect } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import joinUser from "../../assets/join-user.png"
import { FaSquarePlus } from "react-icons/fa6";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { getAuth } from 'firebase/auth';
import { useSelector } from 'react-redux';
const UserList = () => {
    const data = useSelector ((selctor) => (selctor.userinfo.value.user))
    // console.log(data.uid);

    const [userlist, setuserlist] = useState([])
    const db = getDatabase()
     const auth = getAuth()
  const currentUser = auth.currentUser;
// const [logins,setlogins] = useState("")

   useEffect(()=>{
     const userref = ref(db, "users" )
    onValue(userref, (snapshot)=>{
        let arr =[]
        // console.log(snapshot.val());
        snapshot.forEach((item) =>{
            // console.log(item.val());
            //  if (item.val().email != currentUser.email) {
            // arr.push(item.val())
            if (data?.uid != item.key) {
            arr.push(item.val())
             }

        });
        setuserlist(arr);


    })
   },[])


   const requesthendle =(item) =>{
    console.log("hello world", item);

    set(ref (db,'friendrequest/'), {
        senderName: data.displayName,
        receverName: item.username
    });


   }

//    const (logins)
    console.log(userlist);

  return (
    <div className='font-primary '>
        <div className='w-[] h-[449px] rounded-2xl shadow overflow-y-scroll '>
            <div className='flex justify-between items-center pt-[13px] px-[20px]'>
                <h3 className='text-[20px] font-semibold font-primary text-black'>Friends</h3>
                <BsThreeDotsVertical />
            </div>
            {
                userlist.map((user)=>(

            <div className='flex justify-around items-center ml-[20px] mr-[28px] mt-[17px] border-b pb-[14px] border-[#BFBFBF]'>
                <img src={joinUser} alt="" />
                <div className="flex justify-between items-center">
                <div className='ml-[14px] '>
                    <h5 className='text-[18px] font-semibold font-primary '>{user.username}</h5>
                    <p>{user.email}</p>
                </div>
                <FaSquarePlus onClick={()=>requesthendle(user)} className='w-[30px] h-[30px] ml-[20px]'/>
                    </div>
            </div>
                ))
            }



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