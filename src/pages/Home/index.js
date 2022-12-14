// import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import CreatePost from "../../components/createPost";
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import RightHome from "../../components/home/right";
import "./style.css";
// import useClickOutside from "../../helpers/clickOutside";

export default function Home() {
  const { user } = useSelector((user) => ({ ...user }));
  return (
  
   
      <div className="home">
      <Header />
      <LeftHome user={user} />
      <div className="home_middle">
        <CreatePost user={user}/>
      </div>
      <RightHome user={user} />
         {/* <Header /> */}
      {/* <div className="card" ref={el}></div> */}
    </div>
   
  );
}
