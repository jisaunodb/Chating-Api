import React, { useEffect, useState } from 'react'
import joinUser from "../../assets/join-user.png"
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { getDatabase, onValue, ref } from 'firebase/database';
const MyGroup = () => {
    const data = useSelector ((selctor) => (selctor?.userinfo?.value?.user))
    console.log(data?.uid);
    const [mygrouplist, setmygrouplist] = useState([])

    useEffect(()=>{

        const db = getDatabase();
             const grouplistref = ref(db, 'grouplist');
              onValue(grouplistref, (snapshot) => {
                const arr = [];
                snapshot.forEach((item) => {
                    if(item.val().groupcreator == data?.uid){
                        arr.push(item.val());

                    }

                });
                setmygrouplist(arr);
              });
        },[])
    console.log(mygrouplist);

  return (
    <div>
        <div className='w-[344px] h-[] rounded-2xl shadow mt-[43px]'>
                    <div className='flex justify-between items-center pt-[13px] px-[20px]'>
                        <h3 className='text-[20px] font-semibold font-primary text-black'>My Groups</h3>
                        <BsThreeDotsVertical />
                    </div>
                    {
                        mygrouplist.map((item)=>(

                    <div className='flex justify-around items-center ml-[20px] mr-[28px] mt-[17px] border-b pb-[14px] border-[#BFBFBF]'>
                        <img src={joinUser} alt="" />
                        <div className='ml-[14px] pr-[54px]'>
                            <h5 className='text-[18px] font-semibold font-primary '>{item?.groupName}</h5>
                            <p>{item?.grouptagline}</p>
                        </div>
                        <p className='text-[10px] font-medium text-[#7F7F7F] font-primary'>Today, 8:56pm</p>
                    </div>
                        ))
                    }


                </div>
    </div>
  )
}

export default MyGroup