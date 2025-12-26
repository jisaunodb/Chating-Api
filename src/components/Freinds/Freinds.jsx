import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import joinUser from "../../assets/join-user.png"
import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database';
import { useSelector } from 'react-redux';
const Freinds = () => {

    const data = useSelector ((selctor) => (selctor?.userinfo?.value?.user))
    console.log(data?.uid);
    const db = getDatabase()
    const [freindlist, setfreindlist] = useState([])

  // data niye ase "ba" read kore useEffect

    useEffect(() => {
      const freindref = ref(db, 'freind');
      onValue(freindref, (snapshot) => {
        const arr = [];
        snapshot.forEach((item) => {
            if(data?.uid == item.val().receverId || data?.uid == item.val().senderId){

                arr.push({...item.val(), userId : item.key})
            }


        });
        setfreindlist(arr)

      });
    }, []);
console.log(freindlist);

// eta abar read kore data niye asha hoiche
const [blockuser, setblockuser] = useState([])

useEffect(() => {
  const usersref = ref(db, 'block');
  onValue(usersref, (snapshot) => {
    const arr = [];
    snapshot.forEach((item) => {
        // arr.push(item.val().receverId + item.val().senderId)
        if(data.uid == item.val().receverId || data.uid== item.val().senderId){
            arr.push({...item.val(), userId : item.key})
        }

    });
    setblockuser(arr)

  });
}, []);
console.log(blockuser);

// block er kaj write kore data pathai dite

const blockhendle = (item) =>{
console.log(item);
set(push(ref(db, "block")),{
    ...item
})
 .then(() => {
    remove(ref(db, "freind/" + item.userId));
  })


}


  return (
    <div className='font-primary '>
        <div className='w-[344px] h-[] rounded-2xl shadow '>
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
                            data?.uid == item.receverId ? item.senderName : item.receverName
                        }
                    </h5>
                    <p>Dinner?!</p>
                </div>
                {/* {
              blockuser.includes(data.uid + item.userid) ||
                                  blockuser.includes(item.userid + data.uid) ?

                                  (
                                  <button
                                onClick={()=>blockhendle(item)}
                                className='mr-[33px] font-primary font-semibold text-[20px] px-[22px] bg-black text-white rounded-[5px]'>unblock</button>
                              )
                                  :
                                  (

                                <button
                                onClick={()=>blockhendle(item)}
                                className='mr-[33px] font-primary font-semibold text-[20px] px-[22px] bg-black text-white rounded-[5px]'>block</button>
                              )
            } */}

                          <button
                          onClick={()=>blockhendle(item)}
                          className='mr-[33px] font-primary font-semibold text-[20px] px-[22px] bg-black text-white rounded-[5px]'>block</button>

            </div>
                ))
            }


        </div>

    </div>
  )
}

export default Freinds