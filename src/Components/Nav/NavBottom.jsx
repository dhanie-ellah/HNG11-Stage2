import React from 'react'

const NavBottom = ({location}) => {
  return (
    <div className=' px-14 lg:px-5 sm:px-0 sm:w-[90%] sm:m-auto'>
      <p className=' text-xs'>
        {location}
      </p>
    </div>
  )
}

export default NavBottom