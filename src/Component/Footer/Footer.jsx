import Styles from "./footer.module.css";
import Logo from "../../Asset/logo.png";
import { LiaCopyright } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section className={Styles.footerContainer}>
        <div className={Styles.subContainer}>
          <div className={Styles.copyWrite}>
            <div className={Styles.footerLogo}>
              <a href="">
                <img src={Logo} alt="logo" />
              </a>
            </div>
            <p>
              Copyright <LiaCopyright /> {currentYear} | All Right Reserved
            </p>
            <div className={Styles.socialAcc}>
              <a href="https://x.com/lekan_coder">
                <FaXTwitter />
              </a>
              <a href="">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/Asquare952">
                <IoLogoGithub />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
