import "./style.css";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  Home,
  HomeActive,
  Logo,
  Search,

} from "../../svg";
import Message from "../../svg/Message";
import Notification from "../../svg/notification";
import CreatePost from "../../svg/create-post";
import AddContact from "../../svg/addContact";
import { useSelector } from "react-redux";
import SearchMenu from "./SearchMenu";
import { useRef, useState } from "react";
import UserMenu from "./userMenu";
import useClickOutside from "../../helpers/clickOutside";
import { $CombinedState } from "redux";

export default function Header() {
  const { user } = useSelector((user) => ({ ...user }));
  const color = "#b8d4bc";
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const usermenu = useRef(null);

  useClickOutside(usermenu, () => {
    setShowUserMenu(false);
  });
  return (
    <header>
      <div className="header_left">
        <Link to="/" className="header_logo">
          <div className="circle">
            <Logo />
          </div>
        </Link>
        <div
          className="search search1"
          onClick={() => {
            setShowSearchMenu(true);
          }}
        >
          <Search color={color} />
          <input
            type="text"
            placeholder="Search on Ease"
            className="hide_input"
          />
        </div>
      </div>
      {showSearchMenu && (
        <SearchMenu color={color} setShowSearchMenu={setShowSearchMenu} />
      )}
      <div className="header_middle">
        <Link to="/" className="middle_icon active">
          <HomeActive />
          {/* <Home color={color}></Home> */}
        </Link>

        <Link to="/" className="middle_icon hover1">
          <AddContact color={color} />
        </Link>

        <Link to="/" className="middle_icon hover1">
          <Message color={color} />
        </Link>

        <Link to="/" className="middle_icon hover1">
          <div className="middle_notification">9+</div>
          <Notification color={color} />
        </Link>


      </div>
      <div className="header_right">
        <Link to="/profile" className="profile_link hover1">
          <img src={user?.picture} alt="" />
          <span>{user?.first_name}</span>
        </Link>
        <div className="circle_icon hover1">
          <CreatePost color={color} />
        </div>
        <div className="circle_icon hover1" ref={usermenu}>
          <div
            onClick={() => {
              setShowUserMenu ((prev) => !prev);

            }}
          > 
           <ArrowDown color={color}/>
          </div>

          {showUserMenu && <UserMenu user={user} />}
        </div>
      </div>
    </header>
  );
}

