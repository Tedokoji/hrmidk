"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./page.scss";
import defaultpic from "../../public/staticfiles/defaultpic.png";
import addicon from "../../public/staticfiles/iconAddEmployee.png";
import findicon from "../../public/staticfiles/findicon.png";
import Dash from './Dash'
import Thumbnail from './Thumbnail';
import { useRouter } from "next/navigation";
const UserPage = () => {
  const [nav, setNav] = useState(false);
  const router = useRouter();
  return (
    <>
      
      <div className="MainUserPageWrapper">
        
        <div className="bordered ">
          <div >

          <Thumbnail title="Review Applications" src={findicon} onClick={()=>{
            router.push("/UserPage/Findidk")
          }}/>
          <Thumbnail title="AddEmployee" src={addicon}/>
          </div>
        </div>

      </div>
    </>
  );
};

export default UserPage;
