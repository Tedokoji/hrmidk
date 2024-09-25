"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./Login.scss";
import { useState } from "react";
import LoginButton from "../public/Buttons/LoginButton";
import Button from "../public/Buttons/Button";
import kevinlogo from "../public/staticfiles/Kevin logo.jpg";
import ggicon from "../public/staticfiles/gg.png";
export default function Home() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter()

  const [Teacher, setTeacher] = useState(false);
  const [Student, setStudent] = useState(true);
  return (
    <div className="Screen">
      <div className="Login-wrapper">
        <Image className="kevinlogo" alt="kevinlogo" src={kevinlogo} />
        <div className="selector">
          <div
            className={`the-selector ${Student && "active"}`}
            onClick={() => {
              setStudent(true);
              setTeacher(false);
            }}
          >
            User
          </div>
          <div
            className={`the-selector ${Teacher && "active"}`}
            onClick={() => {
              setTeacher(true);
              setStudent(false);
            }}
          >
            Admin
          </div>
        </div>
        {Student && (
          <>
            <h2>User login:</h2>
            <p>email:</p>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={`email`}
            />
            <p>password:</p>
            <input
              type="password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
              className={`password`}
            />
            <Button text="Sign In" onClick={() => {
              router.push('/UserPage')

            }} />
          </>
        )}
        {Teacher && (
          <>
            <h2>Admin login:</h2>

            <p>email:</p>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={`email`}
            />
            <p>password:</p>
            <input
              type="password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
              className={`password`}
            />

            <Button
              text="Sign In"
              onClick={() => {
              router.push('/AdminPage')
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
