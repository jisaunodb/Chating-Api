import React, { useEffect, useState } from 'react'
import mimg from "../../assets/msg-img.png"
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbTriangleFilled } from "react-icons/tb";
import { IoIosSend } from "react-icons/io";
import { GrEmoji } from "react-icons/gr";
import { IoCameraOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { getDatabase, onValue, push, ref, set } from 'firebase/database';

const Chatbox = () => {
    const db = getDatabase()
    const activedata = useSelector((state)=>state )
  console.log(activedata.activeinfo.value);
    // console.log(activedata?.activeinfo?.value?.name);

    const data = useSelector ((selctor) => (selctor?.userinfo?.value?.user))
    // console.log(data?.uid);
    // console.log(data);


    const [msg, setmsgsent] = useState("")
    const [msglist, setmsglist] = useState([])
    const hendlesmg = ()=>{
        console.log(msg);
        set(push(ref(db,'msg/')), {
            senderId: data.uid,
            senderName: data.displayName,
            receverid: activedata?.activeinfo?.value?.id,
            recevername: activedata?.activeinfo?.value?.name,
            massage: msg
            });
    }

    useEffect(()=>{
             const msgref = ref(db, 'msg');
              onValue(msgref, (snapshot) => {
                const arr = [];
                snapshot.forEach((item) => {
                    if(
                        (data.uid == item.val().senderId && activedata.id == item.val().receverId ) ||
                         (data.uid == item.val().receverid && activedata.id == item.val().senderId )
                    )
                    arr.push(item.val());



                });
                setmsglist(arr);
              });
        },[])
        console.log(msglist);



    // const sendmsg = () =>{
    //     console.log("item");

    // }

  return (
    <div className='w-[689px] h-full shadow-lg px-[53px] mb-[34px] '>
        <div className=' flex justify-between  pt-[25px] pb-[24px] items-center border-b-[1px] border-[rgba(0, 0, 0, 0.25)]'>
            <div className='flex items-center gap-[34px] '>
                <img src={mimg} alt="" className='' />
                <div>
                    <h3 className='text-[24px] font-primary font-semibold '>

                    {
                        activedata.activeinfo.value?
                        <p >{activedata.activeinfo.value.name} </p>
                        :
                        <p>Unknown</p>
                    }</h3>
                    <p className='text-[14px]'>online</p>
                </div>
            </div>
            <BsThreeDotsVertical/>
        </div>
            {
                msglist.map((item)=>(
                    console.log(item.senderId),


                    data.uid == item.senderId ?



            (<div className='mt-[54px] text-end'>
                {/* sender massage */}
                <div className='relative ml-[] bg-[#000000] text-center px-[52px] py-[13px] inline-block rounded-[10px] text-white'>
                    <h5>{item.massage}</h5>
                <TbTriangleFilled className='absolute text-[#000000] right-[-12px] h-[14px] w-[25px] ' />
                </div>
                <p className='text-[]'>Today, 2:01pm</p>
            </div>)
            :
           ( <div className='mt-[54px]'>
                {/* recever massage  */}
                <div className='relative ml-[] bg-[#F1F1F1] text-center px-[52px] py-[13px] inline-block rounded-[10px]'>
                    <h5>{item?.massage}</h5>
                <TbTriangleFilled className='absolute text-[#F1F1F1] left-[-12px] h-[14px] w-[25px] ' />
                </div>
                <p className='text-[]'>Today, 2:01pm</p>
            </div>)
                ))
            }

        <div className='pt-[35px] border-t-1 '>
            <div className='relative flex items-center justify-between gap-[20px]'>
                    <input
                    onChange={(e)=>setmsgsent(e.target.value)}
                    type="text" className='  outline-none w-full h-[45px] pl-[20px] pr-[70px] bg-[#F1F1F1] rounded-[10px]'/>
            <GrEmoji className='w-[20px] h-[20px] absolute right-[18%] z-10'/>
            <IoCameraOutline className='w-[20px] h-[20px] absolute right-[13%] z-10'/>

                    <div
                    onClick={hendlesmg}>

                <IoIosSend className='w-[45px] h-[45px] bg-[#1E1E1E] text-white px-[15px] rounded-[5px]'/>
                    </div>


            </div>
        </div>

    </div>
  )
}

export default Chatbox

