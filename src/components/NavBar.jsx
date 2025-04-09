import { FaLinkedin } from "react-icons/fa";
import { RiQuillPenLine } from "react-icons/ri";


const NavBar = () => {
    return (
    <>
        <nav className="w-full py-4 mb-4 px-6 flex rounded-md justify-between items-center bg-slate-800 text-white">
        <div className="flex  items-center ">
        <RiQuillPenLine size={24} />
        <span className=" text-lg">ictory</span>
        </div>
        <div className="">
        
        <a href="https://www.linkedin.com/in/shubhamverma85/" target="_blank" rel="noopener noreferrer" className="text-sm ml-2 flex  items-center text-gray-300 hover:text-white"><FaLinkedin className="mr-1"/> Connect</a>
        </div>
        </nav>
    </>
    );
};

export default NavBar;