
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-6xl font-extralight ">ES</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="www.linkedin.com/in/efa-shasho-9838152a4"><FaLinkedin /></a>
        <a href="https://github.com/Efa-Shash"> <FaGithub /></a>
        <a href="#">   <FaTwitterSquare /></a>
        <a href="#">   <FaInstagram /></a>
        
       
     
     
      </div>
    </nav>
  );
};

export default Navbar;
