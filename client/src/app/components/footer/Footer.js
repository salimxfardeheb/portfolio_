import React, { useState } from "react";
import axios from "axios";
import menuItems from "../navbar/menuItems";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { NotificationManager } from "react-notifications";
import Link from "next/link";

const Footer = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [messageServer, setMessageServer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const values = {
    name: name,
    email: email,
    message: message,
  };

  const sendMail = () => {
    axios
      .post("https://portfolio-5wx5.onrender.com/send", values)
      .then((res) => {
        console.log("success!");
        NotificationManager.success(res.data, "Succès");
        setName("");
        setEmail("");
        setMessage("");
        return res.data;
      })
      .then((data) => {
        setMessageServer(data.message);
        console.log(messageServer)
      })
      .catch((error) => {
        console.log("error");
        NotificationManager.error(error.response.data, "Erreur");
      });
  };

  return (
    <div className="bg-black py-24 flex flex-col md:gap-24 gap-12">
      <div className="mx-[12%] flex flex-col gap-6" id="contact">
        <div>
          <p className="md:text-Header5 text-MobileHeader5 text-redOrange">
            Contact Me
          </p>
          <p className="md:text-Header2 text-MobileHeader2 text-white">
            Work Inquiry
          </p>
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <div className="input-group flex flex-col gap-6 text-white ">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="inputContact"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="Email"
              name="email"
              placeholder="Your Email"
              className="inputContact"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="inputContact"
              placeholder="Your Message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
            <button
              className="bg-redOrange py-3 hover:opacity-90 duration-150"
              onClick={sendMail}
            >
              Send Your Message
            </button>
          </div>
        </form>
      </div>
      <div className="mx-[17%]">
        <div>
          <ul className=" text-white flex flex-col md:flex-row md:justify-around items-center text-Header5 border-y-2 border-nevada md:py-12 gap-6 py-5 mx-[25%] md:mx-auto">
            {menuItems.map((data) => (
              <li key={data.id} className=" hover:text-redOrange">
                <Link href={data.link}>{data.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center md:mt-[100px] mt-12">
          <div>
            <img
              src="/images/logo-SF.png"
              alt=""
              className="md:w-[120px] w-[64.15px] object-contain"
            />
          </div>
          <div className="hidden md:block">
            <p className="copyRight">© Copyright by Salim Fardeheb.</p>
          </div>
          <div className="flex justify-between md:w-[30%] gap-3">
            <a href="" onClick={()=> {alert("soon")}}>
              <FaFacebookSquare className="socialMedia" />
            </a>
            <a href="" onClick={()=> {alert("soon")}}>
              <FaLinkedin className="socialMedia" />
            </a>
            <a href="" onClick={()=> {alert("soon")}}>
              <FaSquareXTwitter className="socialMedia" />
            </a>
            <a href="" onClick={()=> {alert("soon")}}>
              <FaSquareInstagram className="socialMedia" />
            </a>
          </div>
        </div>
        <div className="pt-10 md:hidden w-full flex justify-center">
          <p className="copyRight">© Copyright by Salim Fardeheb.</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;