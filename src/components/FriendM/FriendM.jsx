import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import joinUser from "../../assets/join-user.png"
import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database';
import { useDispatch, useSelector } from 'react-redux';
import { activeinfo } from '../../slice/ActiveSlice';

const FriendM = () => {
    const data = useSelector ((selctor) => (selctor?.userinfo?.value?.user))
    const activedata = useSelector((state)=>state?.activeinfo?.value)

    console.log(data?.uid);
    const db = getDatabase();
    const Dispach = useDispatch();
    const [freindlist, setfreindlist] = useState([])

  // data niye ase "ba" read kore useEffect

    useEffect(() => {
      const freindref = ref(db, 'freind');
      onValue(freindref, (snapshot) => {
        const arr = [];
        snapshot.forEach((item) => {
            if(data.uid == item.val().receverId || data.uid == item.val().senderId){

                arr.push({...item.val(), userId : item.key})
            }


        });
        setfreindlist(arr)

      });
    }, []);
console.log(freindlist);

// eta abar read kore data niye asha hoiche
// const [blockuser, setblockuser] = useState([])

// useEffect(() => {
//   const usersref = ref(db, 'block');
//   onValue(usersref, (snapshot) => {
//     const arr = [];
//     snapshot.forEach((item) => {
//         // arr.push(item.val().receverId + item.val().senderId)
//         if(data.uid == item.val().receverId || data.uid== item.val().senderId){
//             arr.push({...item.val(), userId : item.key})
//         }

//     });
//     setblockuser(arr)

//   });
// }, []);
// console.log(blockuser);

// // block er kaj write kore data pathai dite

// const blockhendle = (item) =>{
// console.log(item);
// set(push(ref(db, "block")),{
//     ...item
// })
//  .then(() => {
//     remove(ref(db, "freind/" + item.userId));
//   })


// }

// redux data alltime thakbe reload dilew jabe na
useEffect(() => {
        if (activedata) {
            localStorage.setItem("activeinfo", JSON.stringify(activedata));
        }
    }, [activedata]);


const blockhendle = (item) => {
    console.log(item);
    if(data.uid == item.senderId){
        Dispach(activeinfo({
            name: item.receverName,
            id: item.receverId
        }))
    }else{
         Dispach(activeinfo({
            name: item.senderName,
            id: item.senderId
        }))
    }
    // Dispach(activeinfo(item))
}


  return (
    <div className='font-primary '>
            <div className='w-[400px] h-[] rounded-2xl shadow '>
                <div className='flex justify-between items-center pt-[13px] px-[20px]'>
                    <h3 className='text-[20px] font-semibold font-primary text-black'>Friends</h3>
                    <BsThreeDotsVertical />
                </div>
                {
                    freindlist.map((item) => (

                <div className='flex justify-around items-center ml-[20px] mr-[28px] mt-[17px] border-b pb-[14px] border-[#BFBFBF]'>
                    <img src={joinUser} alt="" />
                    <div className='ml-[14px] pr-[54px]'>
                        <h5 className='text-[18px] font-semibold font-primary '>
                            {/* {item.senderName} */}
                            {
                                data.uid == item.receverId ? item.senderName : item.receverName
                            }
                        </h5>
                        <p>Dinner?!</p>
                    </div>


                              <button
                              onClick={()=>blockhendle(item)}
                              className='mr-[33px] font-primary font-semibold text-[20px] px-[22px] bg-black text-white rounded-[5px]'>Massage</button>

                </div>
                    ))
                }


            </div>

        </div>
  )
}

export default FriendM