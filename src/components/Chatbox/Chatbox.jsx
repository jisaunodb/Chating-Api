import React, { useEffect, useState } from 'react'
import mimg from "../../assets/msg-img.png"
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbTriangleFilled } from "react-icons/tb";
import { IoIosSend } from "react-icons/io";
import { GrEmoji } from "react-icons/gr";
import { IoCameraOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { getDatabase, onValue, push, ref, set } from 'firebase/database';
import moment from "moment"
import EmojiPicker from 'emoji-picker-react';

const Chatbox = () => {
    const db = getDatabase()
    const activedata = useSelector((state)=>(state.activeinfo?.value))
//   console.log(activedata.activeinfo.value);
    // console.log(activedata?.activeinfo?.value?.name);

    const data = useSelector ((selctor) => (selctor?.userinfo?.value?.user))
    // console.log(data?.uid);
    // console.log(data);
    const [showemoji, setshowemoji] = useState(false)


    const [msg, setmsgsent] = useState("")
    const [msglist, setmsglist] = useState([])
    const hendlesmg = ()=>{
        console.log(msg);
        set(push(ref(db,'msg/')), {
            senderId: data.uid,
            senderName: data.displayName,
            receverid: activedata?.id,
            recevername: activedata?.name,
            massage: msg,
            date: moment().format()
            });
            setmsgsent("")

    }


    useEffect(()=>{
             const msgref = ref(db, 'msg');
              onValue(msgref, (snapshot) => {
                const arr = [];
                snapshot.forEach((item) => {
                    if(
                        (data.uid == item.val().senderId && activedata.id == item.val().receverid ) ||
                         (data.uid == item.val().receverid && activedata.id == item.val().senderId )
                    )
                    arr.push(item.val());



                });
                setmsglist(arr);
              });
        },[activedata.id])
        console.log(msglist);



    const sendmsg = () =>{
        console.log("item");

    }
     const handleEmoji = (emoji) => {
        setmsgsent(msg+emoji.emoji)
    }

  return (
    <div className='w-[689px] h-full shadow-lg px-[53px] mb-[34px] '>
        <div className=' flex justify-between  pt-[25px] pb-[24px] items-center border-b-[1px] border-[rgba(0, 0, 0, 0.25)]'>
            <div className='flex items-center gap-[34px] '>
                <img src={mimg} alt="" className='' />
                <div>
                    <h3 className='text-[24px] font-primary font-semibold '>

                    {
                        activedata?

                        <p >{activedata.name} </p>
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
                    // console.log(item.receverid),


                    data.uid == item.senderId ?



            (<div className='mt-[54px] text-end'>
                {/* sender massage */}
                <div className='relative ml-[] bg-[#000000] text-center px-[52px] py-[13px] inline-block rounded-[10px] text-white'>
                    <h5>{item.massage}</h5>
                <TbTriangleFilled className='absolute text-[#000000] right-[-12px] h-[14px] w-[25px] ' />
                </div>
                <p className='text-[]'>{moment(item.date).fromNow()}</p>
            </div>)
            :
           ( <div className='mt-[54px]'>
                {/* recever massage  */}
                <div className='relative ml-[] bg-[#F1F1F1] text-center px-[52px] py-[13px] inline-block rounded-[10px]'>
                    <h5>{item?.massage}</h5>
                <TbTriangleFilled className='absolute text-[#F1F1F1] left-[-12px] h-[14px] w-[25px] ' />
                </div>
                <p className='text-[]'>{moment(item.date).fromNow()}</p>
            </div>)
                ))
            }

        <div className='pt-[35px] border-t-1 '>
            {
                        showemoji &&
                    <EmojiPicker onEmojiClick={(emoji) => handleEmoji (emoji)}/>
                    }
            <div className='relative flex items-center justify-between gap-[20px]'>
                    {/* <input
                    onChange={(e)=>setmsgsent(e.target.value)} value={msg}
                    type="text" className='  outline-none w-full h-[45px] pl-[20px] pr-[70px] bg-[#F1F1F1] rounded-[10px]'/> */}
                     <input onChange={(e) => setmsgsent(e.target.value)} value={msg} type="text" placeholder='Message' onKeyDown={(e) => e.key == "Enter" && hendlesmg()} className=' outline-none w-[543px] pr-[200px] pl-[10px] bg-[#F1F1F1] py-[13px] rounded-[10px]' />

            <GrEmoji
            onClick={(e)=> setshowemoji(!showemoji)}
            className='cursor-pointer w-[20px] h-[20px] absolute right-[18%] z-10'/>
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

