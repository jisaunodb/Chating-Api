
import React, { useState, useEffect } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import joinUser from "../../assets/join-user.png"
import { getDatabase, onValue, push, ref, set } from 'firebase/database';
import { useSelector } from 'react-redux';
const Grouplist = () => {

    const data = useSelector ((selctor) => (selctor?.userinfo?.value?.user))
    console.log(data?.uid);
    const [groupName , setgroupName] = useState("")
    const [grouptagline , setgrouptagline] = useState("")

    const [groupNameError, setGroupNameError] = useState("")
    const [groupTaglineError, setGroupTaglineError] = useState("")
    const [grouplist, setgrouplist] = useState ([])
    const db = getDatabase();
    const [show, setshow] = useState(false)
    const creategroup =()=>{
        console.log("hlw world");
        setshow(!show)

    }
    const hendlecreategroup =() => {
        console.log(groupName);
        console.log(grouptagline);
         if (!groupName) {
            setGroupNameError("Group Name Please")
        }

        if (!grouptagline) {
            setGroupTaglineError("Tagline please")
        }
        if(groupName && grouptagline)
            set(push(ref(db, "grouplist/")),{
                groupName: groupName,
                grouptagline: grouptagline,
                groupcreator: data.uid
            })

    }

    useEffect(()=>{
         const grouplistref = ref(db, 'grouplist');
          onValue(grouplistref, (snapshot) => {
            const arr = [];
            snapshot.forEach((item) => {
                if(item.val().groupcreator != data.uid){
                    arr.push(item.val());

                }

            });
            setgrouplist(arr);
          });
    },[])
console.log(grouplist);

  return (
    <div>
        <div className='w-[427px] h-[347px] rounded-2xl shadow ml-[20px] overflow-y-scroll'>
            <div className='flex justify-between items-center pt-[13px] px-[20px]'>
                <h3 className='text-[20px] font-semibold font-primary text-black'>Groups List</h3>
                {/* <BsThreeDotsVertical /> */}
                <div>
                    {
                        show?
                        <button
                    onClick={creategroup}
                    className='bg-emerald-700 py-[10px] px-[10px] text-white rounded-[5px]'>Go Back</button> :
                    <button
                    onClick={creategroup}
                    className='bg-indigo-800 py-[10px] px-[10px] text-white rounded-[5px]'>Create Group</button>
                    }
                </div>
            </div>
                    {
                        show?
                         <div className='pt-10 absolute left-[40%] top-[15%] bg-lime-400 h-[300px] w-[500px] rounded-3xl'>
                            <div className='p-3'>

                            <input onChange={(e) => {setgroupName(e.target.value), setGroupNameError("")}} className='w-full border py-2 px-2 outline-0' type="text" placeholder='Group Name' />
                            <p className='bg-red-600 px-2 rounded text-black text-[14px] mt-2'>{groupNameError}</p>
                            <input onChange={(e) => {setgrouptagline(e.target.value),setGroupTaglineError("")}} className='mt-[10px] w-full border py-2 px-2 outline-0' type="text" placeholder='Group Tagline' />

                        <p className='bg-red-600 px-2 rounded text-black text-[14px] mt-2'>{groupTaglineError}</p>
                            <button
                            onClick={hendlecreategroup}
                            className='text-center mt-[10px] bg-primary py-[5px] px-[30px] text-white rounded-[5px] w-full'>Create</button>
                            </div>


                         </div>

                          :
                          <div>
                            {
                                grouplist.map((item)=>(

                            <div>
                                <div className='flex items-center ml-[20px] mr-[39px] mt-[17px] border-b pb-[14px] border-[#BFBFBF]'>
                                    <img src={joinUser} alt="" />
                                    <div className='ml-[14px] pr-[54px]'>
                                        <h5 className='text-[18px] font-semibold font-primary '>{item.groupName}</h5>
                                        <p>{item.grouptagline}</p>
                                    </div>
                                    <button className='font-primary font-semibold text-[20px] px-[22px] bg-black text-white rounded-[5px]'>Join</button>
                                </div>

                            </div>
                                ))
                            }
                          </div>
                    }

        </div>
    </div>
  )
}

export default Grouplist