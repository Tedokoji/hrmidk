"use client";
import React, { useState } from "react";
import Image from "next/image";
import pfp from "../../../public/staticfiles/helldiver.png";
import "./Manage.scss";
import BackButton from "@/public/Buttons/BackButton";
import Grade from "../Findidk/Grade";
const ManageEm = () => {
  return (
    <>
      <BackButton></BackButton>
      <div className="Banner">
        <div className="title">Managed Democracy</div>
        
      </div>
      <div className="MainUserPageWrapper">
        <div>
          <div className="bordered ">
            <p className="bordered-span-tag">Employee List</p>
            <div className="bordered-info-em">
              <div className="leftside">
                <Image className="pfp" alt="icon" src={pfp}/>
                <div className="info-card-title"> 
                  Joe Biladen
                </div>
                <div className="info-card-title"> 
                  on Leave: reason, got blown up
                </div>
                
              </div>
              <div className="rightside">
              <Grade title={"View Profile"} className={""}></Grade>
              <Grade title={"Confirm Application"} className={""}></Grade>
              <Grade title={"Direct Message"} className={""}></Grade>

              </div>
            </div>
            <div className="bordered-info-em">
              <div className="leftside">
                <Image className="pfp" alt="icon" src={pfp}/>
                <div className="info-card-title"> 
                  Joe Biladen
                </div>
                <div className="info-card-title"> 
                  on Leave: reason, got blown up
                </div>
                
              </div>
              <div className="rightside">
              <Grade title={"View Profile"} className={""}></Grade>
              <Grade title={"Confirm Application"} className={""}></Grade>
              <Grade title={"Direct Message"} className={""}></Grade>

              </div>
            </div>
          
            
          </div>
        </div>
        <div className="borderedright">
          <p className="bordered-span-tag">Filter?</p>
          <Grade title={"Clocked in"} className={""}></Grade>
          <Grade title={"on Leave"} className={""}></Grade>
          <Grade title={"payroll"} className={""}></Grade>
        </div>
      </div>
    </>
  );
};

export default ManageEm;
