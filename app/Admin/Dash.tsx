"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import "./page.scss";
import defaultpic from "../../public/staticfiles/defaultpic.png";
const Dash = () => {
  const [nav, setNav] = useState(false);
  const router = useRouter()
  return (
    <>
      <div className="dashnav">
        <div className="profile-container">
          <Image
            onClick={() => {}}
            alt="aaa"
            className="pro-avt"
            src={defaultpic}
          />
        </div>
        <div className="profile-name">default</div>

        <svg
          className="expandnav"
          onClick={() => {setNav(true)}}
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          viewBox="0 0 24 24"
          width="48px"
          height="48px"
        >
          <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
        </svg>
      </div>
      {nav && (
        <div
          className="navmenu"
          onMouseLeave={() => {
            setNav(false);
          }}
        >
        
          <div
            className="nav-text"
            onClick={() => {
              setNav(false);
              
            }}
          >
            -Don't click this
          </div>
        

          <div
            className="nav-text"
            onClick={() => {
              setNav(false);
              router.push('/');
            }}
          >
            -Sign out
          </div>
        </div>
      )}
    </>
  );
};

export default Dash;
