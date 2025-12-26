import React from 'react'
import Sideber from '../Sideber/Sideber'
import SettingsInfo from '../Settingi/SettingsInfo'

const Settings = () => {
  return (
    <div className='w-[1440px] mx-auto'>
        <div className='flex justify-between gap-[22px] my-[20px]'>
        <Sideber active ="setting"/>
        <div>
          <SettingsInfo/>
        </div>
        </div>
    </div>
  )
}

export default Settings