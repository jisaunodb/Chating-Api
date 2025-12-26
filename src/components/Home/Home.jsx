import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router';
import Sideber from '../Sideber/Sideber';
import Freinds from '../Freinds/Freinds';
import UserList from '../UserList/UserList';
import Grouplist from '../Grouplist-2/Grouplist';
import Friendrequest from '../FreindRequest/FreindRequest'
import MyGroup from '../MyGroup/MyGroup'
import BlockUser from '../BlockUser/BlockUser';
const Home = () => {
  const auth = getAuth()
  const data = useSelector(state =>(state?.userinfo?.value?.user))
  const navaigate = useNavigate();
  console.log(data);
  const [loading, setloading] = useState (true);
  const [varify,setverify] = useState(false);
  // useEffect (() =>{
  //   if(data.emailVerified){
  //     setverify(true)
  //   }
  // },[])

  useEffect(()=>{
    if(!data){
      navaigate("/login")
    }
  })

  onAuthStateChanged(auth, (user) => {
  if (user?.emailVerified) {
    setverify(true)

  }
  setloading (false)


});
if(loading) {
    return null
  }
  return (
    <div className='w-[1440px] mx-auto '>
{
varify?
<div className='flex justify-between gap-[22px] my-[20px]'>
  <Sideber active ="home"/>
  <div>
  <Grouplist/>
  <Friendrequest/>
  </div>
  <div>

  <Freinds/>
  <MyGroup/>
  </div>
  <div>
  <UserList/>
  <BlockUser/>
  </div>
</div>
:
<div className='bg-primary w-full h-screen text-white flex justify-center items-center'>
<div className='text-center' >
    <p className='text-3xl font-bold'>please verify your email</p>
    <Link to="/login" className='text-center'>

    <button className='ml-[10px] cursor-pointer text-[20px] text-primary font-semibold font-secoundary bg-white px-[40px] text-center py-[20px] mt-[15px] rounded-[50px] relative' >Go Back to Login
    </button>
    </Link>
</div>
</div>
}
    </div>
  )
}

export default Home