import { TbCookie } from "react-icons/tb";
import CookieCTA from "./CookieCTA";

const Cookie = () => {
  return (
    <div className="block bg-black p-4 rounded-xl w-64 dark:bg-white ">
      <header className="flex justify-between pb-4">
        <TbCookie className="text-white w-12 h-auto  m-0 dark:text-black" />
        <button className="text-gray-400 flex place-self-">x</button>
      </header>

      <div className="flex flex-col gap-8">
        <p className="text-white dark:text-black">We use cookies to improve your user experience.</p>

        <CookieCTA title="Accept cookies" />
      </div>
    </div>
  );
};

export default Cookie;
