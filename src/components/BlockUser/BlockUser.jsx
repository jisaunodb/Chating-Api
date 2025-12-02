import React, { useState, useEffect } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import joinUser from "../../assets/join-user.png"
import { FaSquarePlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { getAuth } from 'firebase/auth';
import { useSelector } from 'react-redux';


      const BlockUser = () => {
        const data = useSelector ((selctor) => (selctor?.userinfo?.value?.user))
          console.log(data?.uid);
        const db = getDatabase()
      const [blocklist, setblocklist] = useState([])

      useEffect(() => {
      const freindref = ref(db, 'block');
      onValue(freindref, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
      if(data.uid == item.val().receverId || data.uid== item.val().senderId){
              arr.push({...item.val(), userId : item.key})
          }


      });
      setblocklist(arr)

      });
      }, []);


      const unblockhendle = (item) =>{
      console.log(item);
      if(data.uid === item.receverId || data.uid === item.senderId){

          remove(ref(db, "block/" + item.userId));
      }


      }

  return (
    <div>
<div className='w-[344px] h-[] rounded-2xl shadow mt-[43px]'>
            <div className='flex justify-between items-center pt-[13px] px-[20px]'>
                <h3 className='text-[20px] font-semibold font-primary text-black'>Blocked Users</h3>
                <BsThreeDotsVertical />
            </div>
            {
                blocklist.map((item) =>(

            <div className='flex justify-around items-center ml-[20px] mr-[28px] mt-[17px] border-b pb-[14px] border-[#BFBFBF]'>
                <img src={joinUser} alt="" />
                <div className='ml-[14px] pr-[28px]'>
                    <h5 className='text-[18px] font-semibold font-primary '>
                         {
                            data.uid == item.receverId ? item.senderName : item.receverName
                        }
                    </h5>
                    <p>Dinner?!</p>
                </div>
                {data.uid === item.senderId || data.uid === item.receverId  &&(

                <button
                onClick={()=> unblockhendle (item)}
                 className='mr-[33px] font-primary font-semibold text-[20px] px-[22px] bg-black text-white rounded-[5px]'>unblock</button>
                )}
            </div>
                ))
            }



        </div>
    </div>
  )
}

export default BlockUser