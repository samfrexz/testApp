// import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.png"

const NavBar = () => {
  return ( 
    <>
      <header className="w-full bg-navColor md:h-32 overflow-x-hidden h-20">
        <nav className="w-contain mx-auto h-full flex items-center lg:justify-start justify-center">
          {/* <Link to="/"> */}
            <img src={Logo} alt="company's logo" className="md:w-48 w-24 h-8 md:h-14" />
          {/* </Link> */}
        </nav>
      </header>
    </>
   );
}
 
export default NavBar;