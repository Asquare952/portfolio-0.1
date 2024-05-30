import "./navbar.css";
import Logo from '../../Asset/logo.png'
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { TbDownload } from "react-icons/tb";
import { useState } from "react";
const NavBar = () => {
  const [dropDown, setDropDown] = useState(false);
  const handleNotificationPop = () => {
    setDropDown(!dropDown);
  };
  return (
    <>
      <header>
        <div className="subContainer">
          <div className="navlayout">
            <div className="logo">
              <a href="">
                <img src={Logo} alt="" />
              </a>
              <div className="menu-bar">
                {dropDown ? (
                  <IoMdClose
                    className="close-icon"
                    onClick={handleNotificationPop}
                  />
                ) : (
                  <FiMenu
                    className="menu-icon"
                    onClick={handleNotificationPop}
                  />
                )}
              </div>
            </div>
            <nav
              className={dropDown ? "nav-links dropdown" : "nav-links"}
              onClick={handleNotificationPop}
            >
              <ul className="links">
                <li>
                  <a href="#aboutMe">AboutMe</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#project">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
            <div
              className={
                dropDown
                  ? "download-Cv-Container dropdown"
                  : "download-Cv-Container"
              }
            >
              <button className="download-Cv">
                <a href="">
                  Download cv <TbDownload className="downloadIcon" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
