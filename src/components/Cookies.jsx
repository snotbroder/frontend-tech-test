"use client";
import { TbCookie } from "react-icons/tb";
import CookieCTA from "./CookieCTA";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Cookie = () => {
  const [showCookiePopup, setCookieIsAccepted] = useState(false);
  const [isCookieAcceptedClosed, setCookieIsAcceptedClosed] = useState(false);
  return (
    !showCookiePopup &&
    !isCookieAcceptedClosed && (
      <div className="block bg-black p-4 rounded-xl w-60 dark:bg-foreground ">
        <header className="flex justify-between pb-10">
          <TbCookie className="text-white m-0 dark:text-background" size={40} />

          <IoIosCloseCircleOutline
            className="text-white flex hover:cursor-pointer "
            onClick={() => {
              setCookieIsAcceptedClosed(!isCookieAcceptedClosed);
            }}
            size={20}
          />
        </header>

        <div className="flex flex-col justify-between">
          <p className="text-white dark:text-black">We use cookies to improve your user experience.</p>
          <button
            onClick={() => {
              setCookieIsAccepted(!showCookiePopup);
            }}
            className="bg-white rounded-lg p-3 mt-6 hover:-translate-y-1 hover:duration-200 hover:transition-all dark:text-white dark:bg-black"
          >
            Accept cookies
          </button>
          ;{/* <CookieCTA title="Accept cookies" /> */}
        </div>
      </div>
    )
  );
};

export default Cookie;
