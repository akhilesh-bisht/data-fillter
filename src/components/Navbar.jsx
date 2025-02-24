import { FaBell } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex justify-end items-center p-4 bg-white  gap-6 ">
      <div className="relative">
        <FaBell className="text-xl text-gray-700" />
        <span className="absolute top-0 left-[80%]  text-black text-xs font-bold rounded-full px-2">
          12
        </span>
      </div>

      <div className="text-gray-700 font-medium ml-4">AK Motors ⌄</div>
    </nav>
  );
}
