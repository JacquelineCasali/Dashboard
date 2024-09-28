import React from 'react'
import "./NavBar.css"
import logo from "/assets/logo.svg"
import perfil from "/assets/perfil.jpg"

import { IoIosNotificationsOutline, IoIosSearch,IoMdExpand  } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

import { AiOutlineAppstore , AiOutlineExpand } from "react-icons/ai";
export default function NavBar() {
  return (
    <div className='navbar' >

<div className='logo'>
    <img src={logo} alt="" />
    <span>lamadmin</span>
</div>
<div className='icons'>
<IoIosSearch  size={30}/>
<AiOutlineAppstore size={30} />
<AiOutlineExpand size={30} />


<div className='notification'>
<IoIosNotificationsOutline
size={30} />
<span className='quantidade'>1</span>
</div>
<div className='user'>
<img src={perfil} alt="" />    
{/* <FaUserCircle size={30}/> */}
<span>Lucas</span>

</div>
<IoSettingsOutline size={30} />

</div>
    </div>
  )
}
