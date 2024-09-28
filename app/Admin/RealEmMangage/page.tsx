import React from "react";
import Grade from "../Findidk/Grade";
import { Person } from "../Findidk/page";
import BackButton from "@/public/Buttons/BackButton";

const RealEM = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: Person[] = await res.json();
  return (
    <>
      <div className="Banner">
        <div className="title">Em List</div>
      </div>
      <div className="MainUserPageWrapper">
        <div>
          <div className="bordered ">
            <p className="bordered-span-tag">Quick Acess</p>
            <div className="innerbordered">
              <table className="bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Days Worked</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {users.map((user) => (
          <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>50</td>
          <td>Active</td>
          <td>
            <button>Edit</button> <button>Delete</button>
          </td>
        </tr>
        ))}
                </tbody>
              </table>
              
            </div>
            <br></br>
          </div>
        </div>
        <div className="borderedright">
          <p className="bordered-span-tag">Miscs</p>

          <Grade title={"Internal Chat"} className={""}></Grade>
          <Grade title={"View DMs"} className={""}></Grade>
        </div>
      </div>
      <BackButton></BackButton>
    </>
  );
};

export default RealEM;
