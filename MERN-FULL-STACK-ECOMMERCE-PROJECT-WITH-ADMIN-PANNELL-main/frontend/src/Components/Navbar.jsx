import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";


function Navbar() {


  const [visible,setVisible] = useState(false)

  const {setShowSearch , getCartCount,navigate,token,setToken,setCartItems} = useContext(ShopContext)

const logout= ()=>{
  localStorage.removeItem('token')
  setToken('')
  setCartItems({})
  navigate('/login')

}






  return (
    <div className="flex items-center justify-between py-5 font-medium">
     <Link to='/' > <img  src={assets.logo} className="w-36" alt="" /></Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700  ">
        <NavLink to={"/"} className={"flex flex-col items-center gap-1"}>
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>
        <NavLink to={"/collection"} className={"flex flex-col items-center gap-1"}>
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>
        <NavLink to={"/about"} className={"flex flex-col items-center gap-1"}>
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>
        <NavLink to={"/contact"} className={"flex flex-col items-center gap-1"}> 
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>
      </ul>


      <div className="flex items-center gap-6">
       <img onClick={()=>setShowSearch(true)} src={assets.search_icon} alt="" className="w-5 cursor-pointer" />
<div className=" group relative">

   <img onClick={()=>token ? null : navigate('/login') } src={assets.profile_icon} className="w-5 cursor-pointer" alt="" />
  {/* dropdown div  */}
   {
    token && 
    
     <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
  <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
    <p className="cursor-pointer hover:text-black">My Profile</p>
    <p onClick={()=>navigate('/orders')}  className="cursor-pointer hover:text-black">Orders</p>
    <p onClick={logout} className="cursor-pointer hover:text-black">LogOut</p>
  </div>
 
</div>
   }









</div>

<Link to="/card" className="relative inline-block">
  {/* Cart Icon */}
  <img 
    src={assets.cart_icon} 
    className="w-8 h-8" 
    alt="Cart Icon" 
  />
  
  {/* Cart Count Badge */}
  <p 
    className="absolute top-4 -right-1 w-5 h-5 flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full shadow-lg"
  >
    {getCartCount()}
  </p>
</Link>


<img onClick={()=>setVisible(true)}  src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden"/>

      </div>

      {/* Sidebar for  small screens  */}

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}
>

<div className="flex flex-col text-gray-600">
  <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer" >
    <img src={assets.dropdown_icon} alt="" />
    <p>Back</p>
  </div>
  <NavLink  onClick={()=>setVisible(false)} className='py-2 pl-6 border-[6px]' to='/' >Home</NavLink>
<NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border-[6px]' to='/collection' >Collection</NavLink>
<NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border-[6px]' to='/about' >About</NavLink>
<NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border-[6px]' to='/contact' >Contact</NavLink>

</div>

      </div>



    </div>
  );
}

export default Navbar;
