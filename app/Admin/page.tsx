"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./page.scss";
import defaultpic from "../../public/staticfiles/defaultpic.png";
import addicon from "../../public/staticfiles/iconAddEmployee.png";
import findicon from "../../public/staticfiles/findicon.png";
import Dash from "./Dash";
import Thumbnail from "./Thumbnail";
import { useRouter } from "next/navigation";
import Grade from "./Findidk/Grade";
const UserPage = () => {
  const [nav, setNav] = useState(false);
  const router = useRouter();
  return (
    <>
    <div className="Banner">
      <div className="title">
        User Main Page i suppose

      </div>
    </div>
      <div className="MainUserPageWrapper">
        <div>
          <div className="bordered ">
            <p className="bordered-span-tag">Quick Acess</p>
            <div className="innerbordered">
              <Thumbnail
                title="Review Applications"
                src={findicon}
                onClick={() => {
                  router.push("/Admin/Findidk");
                }}
              />
              <Thumbnail title="Manage Employees" src={addicon} 
              onClick={()=>{
                router.push('/Admin/ManageEmployee');
              }}/>
              <Thumbnail title="AddEmployee" src={addicon} />
              <Thumbnail title="AddEmployee" src={addicon} />
              <Thumbnail title="AddEmployee" src={addicon} />
            </div>
          </div>
        </div>
        <div className="borderedright">
        <p className="bordered-span-tag">Miscs</p>

          <Grade title={"Internal Chat"} className={""}></Grade>
          <Grade title={"View DMs"} className={""}></Grade>
          <Grade title={"atat"} className={""}></Grade>
          <Grade title={"random"} className={""}></Grade>
          <Grade title={"bull"} className={""}></Grade>
          <Grade title={"shiet"} className={""}></Grade>
          <Grade title={"go"} className={""}></Grade>
          <Grade title={"For Democracy"} className={""}></Grade>
        </div>
      </div>
    </>
  );
};

export default UserPage;
