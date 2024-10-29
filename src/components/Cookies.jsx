import { MdCookie } from "react-icons/md";
const Button = () => {
  return (
    <div className="block bg-black p-4 rounded-xl w-64">
      <button className="text-gray-400 flex place-self-end">x</button>
      <div className="flex flex-col gap-5">
        <MdCookie className="text-white text-5xl" />
        <p className="text-white">We use cookies to improve your user experience.</p>
        <button className="bg-white rounded-lg p-3">I like cookies</button>
      </div>
    </div>
  );
};

export default Button;
