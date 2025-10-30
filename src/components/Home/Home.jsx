import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router';
import Sideber from '../Sideber/Sideber';

const Home = () => {
  const auth = getAuth()
  const data = useSelector(state =>(state.userinfo.value))
  const navaigate = useNavigate();
  // console.log(data);
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
  if (user.emailVerified) {
    setverify(true)

  }
  setloading (false)


});
if(loading) {
    return null
  }
  return (
    <div>
{
varify?
<div>
  <Sideber/>
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