import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";

// pages
import { About } from "../about";
import { ContactUs } from "../contact";
import { Portfolio } from "../portfolio";

export const Home = () => {
  const downloadCV = process.env.PUBLIC_URL + '/cv/Liz Bilashaka Resume.pdf'

  
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + introdata.your_img_url
              })`,
            }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-3">
                  <a href="#portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </a>

                  <a href="#contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </a>

                </div>
                <div className="intro_btn-action pb-5">

                  <a className="ac_btn btn" download={downloadCV} target="_blank" rel="noreferrer" href={downloadCV}>
                    Download My CV
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <section>
        <div
          className="mb-5 mt-3"
          style={{ textAlign: "center", height: "10rem" }}
        >
          &copy;Copyright LizB 2022 All rights reserved
        </div>
      </section>
    </HelmetProvider>
  );
};
