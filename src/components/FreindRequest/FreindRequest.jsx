import React, { useState, useEffect } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import joinUser from "../../assets/join-user.png"
import { useSelector} from 'react-redux';
import { getDatabase, ref, onValue, set, remove, push} from "firebase/database";
import { getAuth } from 'firebase/auth';
const Friendrequest = () => {
const data = useSelector ((selctor) => (selctor?.userinfo?.value?.user))
console.log(data);

const [friendrequestlist, setfriendrequestlist] = useState([])
const db = getDatabase()
const auth = getAuth()
// useEffect(()=>{
//      const userref = ref(db, "users" )
//     onValue(userref, (snapshot)=>{
//         let arr =[]
//         snapshot.forEach((item) =>{
//             arr.push({ ...item.val(), id: item.key });


//             setgrouplish(arr);
//         });


//     })
//    },[db, data])
useEffect(() => {
  const userref = ref(db, 'friendrequest');
  onValue(userref, (snapshot) => {
    const arr = [];
    snapshot.forEach((item) => {
        if(data?.uid == item?.val().receverId){

            arr.push({...item.val(), userId: item.key});
        }
    });
    setfriendrequestlist(arr);
  });
}, []);
console.log(friendrequestlist);

const romoveaccept = (item) =>{
    console.log(item);
    set(push(ref(db, 'freind')),{
        // receverName: item.receverName,
        // receverId: item.receverId,
        // senderName: item.senderName,
        // senderId: item.senderId
        ...item
    })
    .then(()=>{
        remove(ref(db,"friendrequest/" + item.userId))
    })
    console.log(item);

}
  return (
    <div className='font-primary mt-[100px]'>


            <div className='w-[427px] h-[462px] rounded-2xl shadow ml-[20px] mt-[43px] overflow-y-scroll'>
            <div className='flex justify-between items-center pt-[13px] px-[20px]'>
                <h3 className='text-[20px] font-semibold font-primary text-black'>Friend  Request</h3>
                <BsThreeDotsVertical />
            </div>
                {
                    friendrequestlist.map((item)=>(

                    <div className='flex justify-around items-center ml-[20px] mr-[27px] mt-[17px] border-b pb-[14px] border-[#BFBFBF]'>
                        <img src={joinUser} alt="" />
                        <div className='ml-[14px] pr-[54px]'>
                            <h5 className='text-[18px] font-semibold font-primary '>{item?.senderName}</h5>
                            {/* <p>{item.email}</p> */}
                        </div>
                        <button
                        onClick={()=>romoveaccept(item)}
                        className='mr-[33px] font-primary font-semibold text-[20px] px-[22px] bg-black text-white rounded-[5px]'>Accept</button>
                    </div>
                    ))
                }




            </div>

    </div>
  )
}

export default Friendrequest