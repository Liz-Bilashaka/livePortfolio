import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import Themetoggle from "../components/themetoggle";
import { useConfig } from '../lib/ConfigProvider';

const Headermain = () => {
  const { config, loading } = useConfig();

  const [isActive, setActive] = useState("false");

  if (loading) return <div>Loading...</div>;
  if (!config) return <div>No config data available</div>;

  const { logotext, socialprofils} = config;

  const handleToggle = () => {
    setActive(!isActive);
    // document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <a className="navbar-brand nav_ac" href="#home" rel="noreferrer">
            {logotext}
          </a>
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button className="menu__button  nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                    <a
                      href="#home"
                      onClick={handleToggle}
                      className="my-3"
                      rel="noreferrer"
                    >
                      Home
                    </a>
                  </li>
                  <li className="menu_item">
                    {/* <Link onClick={handleToggle} to="/about" className="my-3">About</Link> */}
                    <a
                      href="#about"
                      onClick={handleToggle}
                      className="my-3"
                      rel="noreferrer"
                    >
                      About
                    </a>
                  </li>
                  <li className="menu_item">
                    {/* <Link  onClick={handleToggle} to="/portfolio" className="my-3"> Portfolio</Link> */}
                    <a
                      href="#portfolio"
                      onClick={handleToggle}
                      className="my-3"
                      rel="noreferrer"
                    >
                      {" "}
                      Portfolio
                    </a>
                  </li>

                  <li className="menu_item">
                    {/* <Link onClick={handleToggle} to="/contact" className="my-3"> Contact</Link> */}
                    <a
                      href="#contact"
                      onClick={handleToggle}
                      className="my-3"
                      rel="noreferrer"
                    >
                      {" "}
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a href={socialprofils.github} target="_blank" rel="noreferrer">
                Github
              </a>
              <a href={socialprofils.linkedin} target="_blank" rel="noreferrer">
                Linkedin
              </a>
            </div>
            <p className="copyright m-0">copyright __ {logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
