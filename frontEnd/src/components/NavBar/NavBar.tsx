
import "./NavBar.css";

import { IoIosNotificationsOutline, IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

import { AiOutlineAppstore, AiOutlineExpand } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="navbar">
      <Link to={"/"} className="logo">
        <img src={"../logo.svg"} alt="" />

        <span>lamadmin</span>
      </Link>

      <div className="icons">
        <IoIosSearch size={30} />
        <AiOutlineAppstore size={30} />
        <AiOutlineExpand size={30} />

        <div className="notification">
          <IoIosNotificationsOutline size={30} />
          <span className="quantidade">1</span>
        </div>
        <div className="user">
          <img src={"../perfil.jpg"} alt="" />
          {/* <FaUserCircle size={30}/> */}
          <span>Lucas</span>
        </div>
        <IoSettingsOutline size={30} />
      </div>
    </div>
  );
}
