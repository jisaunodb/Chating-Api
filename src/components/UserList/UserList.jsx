import React, { useState, useEffect } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import joinUser from "../../assets/join-user.png"
import { FaSquarePlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { getAuth } from 'firebase/auth';
import { useSelector } from 'react-redux';
const UserList = () => {
    const data = useSelector ((selctor) => (selctor?.userinfo?.value?.user))
    console.log(data);

    const [userlist, setuserlist] = useState([])
    const db = getDatabase()
     const auth = getAuth()
  const currentUser = auth.currentUser;
// const [logins,setlogins] = useState("")

   useEffect(()=>{
    if (!data?.uid) return;
     const userref = ref(db, "users" )
    onValue(userref, (snapshot)=>{
        let arr =[]
        // console.log(snapshot.val());
        snapshot.forEach((item) =>{
            // console.log(item.val());
            //  if (item.val().email != currentUser.email) {
            // arr.push(item.val())
            if (data?.uid !== item?.key) {
            arr.push({...item?.val(), userid: item?.key})
             }

        });
        setuserlist(arr);


    })
   },[data?.uid])


   const requesthendle =(item) =>{
    console.log("hello world", item);

    set(push(ref(db,'friendrequest/')), {
        senderName: data?.displayName,
        senderId : data?.uid,
        receverName: item?.username,
        receverId: item?.userid
    });


   }

const [friendrequestlist, setfreindrequestlist] = useState ([]);
useEffect(() => {
  const usersref = ref(db, 'friendrequest');
  onValue(usersref, (snapshot) => {
    const arr = [];
    snapshot.forEach((item) => {
        arr.push(item.val().receverId + item.val().senderId)

    });
    setfreindrequestlist(arr)

  });
}, [data?.uid]);
console.log(friendrequestlist);

//    const (logins)
    console.log(userlist);


    const [freindlist, setfreindlist] = useState([])

        useEffect(() => {
          const freindref = ref(db, 'freind');
          onValue(freindref, (snapshot) => {
            const arr = [];
            snapshot.forEach((item) => {
                arr.push(item.val().receverId + item.val().senderId)


            });
            setfreindlist(arr)

          });
        }, [data?.uid]);





        const [blocklist, setblocklist] = useState([])

            useEffect(() => {
              const freindref = ref(db, 'block');
              onValue(freindref, (snapshot) => {
                const arr = [];
                snapshot.forEach((item) => {
                    if(data?.uid == item.val().receverId || data?.uid== item.val().senderId){
                            arr.push({...item.val(), userId : item.key})
                        }


                });
                setblocklist(arr)

              });
            }, [data?.uid]);


             const [blockListee, setBlockListee] = useState([]);
    useEffect(() => {
        const blockRef = ref(db, "block");
        onValue(blockRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                arr.push(item.val().receverId + item.val().senderId);
            })
            setBlockListee(arr)
        })
    }, [data?.uid])


const unblockhendle = (item) =>{
 console.log(item);

      remove(ref(db, "block/" + item.userId));


}

const [searchfilterlist, setsearchfilterlist] = useState ([]);

const hendlesearch = (e) =>{
    let arr = [];
    // console.log(e.target.value);
    // console.log(userlist);
    if(e.target.value.length == 0 ){
        setsearchfilterlist([])
    }else{

        userlist.filter((item) =>{
            if(item.username.toLowerCase().includes(e.target.value.toLowerCase())){
                arr.push(item)
                setsearchfilterlist(arr)
            }
            // console.log(item.username.toLowerCase());

        })
    }


}
console.log(searchfilterlist);



  return (
    <div className='font-primary '>
        <div className='w-[] h-[449px] rounded-2xl shadow overflow-y-scroll '>
            <div className='flex justify-between items-center pt-[13px] px-[20px]'>
                <h3 className='text-[20px] font-semibold font-primary text-black'>User List</h3>
                <BsThreeDotsVertical />
            </div>
            <div className='mt-[20px]'>
                <input type="text" onChange={hendlesearch} className=' rounded-[10px] border-2 px-[20px] text-[16px] font-semibold outline-none mx-[20px] h-[45px] w-[350px]' />
            </div>
            {
                searchfilterlist.length > 0 ?

                searchfilterlist.map((user)=>(

            <div className='flex justify-around items-center ml-[20px] mr-[28px] mt-[17px] border-b pb-[14px] border-[#BFBFBF]'>
                <img src={joinUser} alt="" />
                <div className="flex justify-between items-center">
                <div className='ml-[14px] '>
                    <h5 className='text-[18px] font-semibold font-primary '>{user.username}</h5>
                    <p>{user.email}</p>
                </div>

                    {
                    blockListee.includes(data?.uid + user.userid) ||
                    blockListee.includes(user.userid + data?.uid) ? (
                    <p className='text-red-600 font-semibold font-primary'>BLOCKED</p>
                    )
                        :

                    freindlist.includes(data?.uid + user.userid) ||
                    freindlist.includes(user.userid + data?.uid) ?

                    (
                    <p>freind</p>
                ) :
                    friendrequestlist.includes(data?.uid + user.userid) ||
                    friendrequestlist.includes(user.userid + data?.uid) ?

                    (
                    <FaMinus onClick={()=>requesthendle()} className='w-[30px] h-[30px] ml-[20px]'/>
                )
                    :
                    (
                    <FaSquarePlus onClick={()=>requesthendle(user)} className='w-[30px] h-[30px] ml-[20px]'/>
                )
                    }
                    </div>
            </div>
                )) :
                userlist.map((user)=>(

            <div className='flex justify-around items-center ml-[20px] mr-[28px] mt-[17px] border-b pb-[14px] border-[#BFBFBF]'>
                <img src={joinUser} alt="" />
                <div className="flex justify-between items-center">
                <div className='ml-[14px] '>
                    <h5 className='text-[18px] font-semibold font-primary '>{user.username}</h5>
                    <p>{user.email}</p>
                </div>

                    {
                    blockListee.includes(data?.uid + user.userid) ||
                    blockListee.includes(user.userid + data?.uid) ? (
                    <p className='text-red-600 font-semibold font-primary'>BLOCKED</p>
                    )
                        :

                    freindlist.includes(data?.uid + user.userid) ||
                    freindlist.includes(user.userid + data?.uid) ?

                    (
                    <p>freind</p>
                ) :
                    friendrequestlist.includes(data?.uid + user.userid) ||
                    friendrequestlist.includes(user.userid + data?.uid) ?

                    (
                    <FaMinus onClick={()=>requesthendle()} className='w-[30px] h-[30px] ml-[20px]'/>
                )
                    :
                    (
                    <FaSquarePlus onClick={()=>requesthendle(user)} className='w-[30px] h-[30px] ml-[20px]'/>
                )
                    }
                    </div>
            </div>
                ))
            }



        </div>

    </div>
  )
}

export default UserList