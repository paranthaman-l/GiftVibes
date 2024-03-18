import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
const Navbar = () => {
  const navData = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Shop",
      path: "/shop",
    },
    {
      title: "Personalized Gift",
      path: "/personalizedGift",
    },
    {
      title: "Sales off",
      path: "/salesOff",
    },
    {
      title: "contact",
      path: "/contact",
    },
  ]
  return (
    <div className='z-10 px-10 fixed top-0 left-0 shadow-md w-full bg-white flex justify-between items-center font-grotesk'>
      <div className="flex w-5/12">
        {navData.map((link, i) => {
          return (
            <NavLink className={`font-semibold mx-5 text-base my-7 hover:text-red  ${link.path == location.pathname ? "text-red" : "text-gray-600"}`} key={i} to={link.path}>{link.title}</NavLink>
          )
        })}
      </div>
      <div className="flex justify-between items-center w-7/12 px-10">
        <div className="flex">
          <NavLink to={"/"}><img  className='h-10 object-contain mx-5 ' src={logo} alt="" /></NavLink>
        </div>
        <div className="w-full flex justify-end mr-10">
          <NavLink to={"/dashboard"}>Profile</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar