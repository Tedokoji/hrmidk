//i hate using this everytime, but idk any way else, teach me your ways senpai
import BackButton from "@/public/Buttons/BackButton";


import Button from "@/public/Buttons/Button";
import Grade from "./Grade";
import React from "react";
import Image from "next/image";
import Thumbnail from "../Thumbnail";
import adressicon from "../../../public/staticfiles/adressicon.png";
import phoneicon from "../../../public/staticfiles/phoneicon.png";
import ButtonWithId from "./ButtonWithId";
// interfaces.ts

export interface Person {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
const Listofcontestantasjdhnaksjd = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: Person[] = await res.json();

  return (
    <>
      <BackButton></BackButton>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Grade title={user.name} className={""}

            >
              <div className="infowrapper">
                
                <Image className="info-image"
                alt="icon" src={adressicon} />
                <span>{user.address.city}</span>
              </div>
              <div className="infowrapper">
                <Image className="info-image" 
                alt="icon" src={phoneicon} />
                <span>{user.phone}</span>

              </div>
              <ButtonWithId id={user.id}></ButtonWithId>
            </Grade>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Listofcontestantasjdhnaksjd;
