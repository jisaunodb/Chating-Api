import React from 'react'
import Sideber from '../Sideber/Sideber'
import Freinds from '../Freinds/Freinds'
import Chatbox from '../Chatbox/Chatbox'
import FriendM from '../FriendM/FriendM'

const Massage = () => {
  return (
    <div className='w-[1440px] mx-auto'>
        <div className='flex justify-between gap-[22px] my-[20px]'>
        <Sideber active ="massage"/>
        <div>
            <FriendM/>
        </div>
        <div>

        <Chatbox/>
        </div>
        </div>
    </div>
  )
}

export default Massage