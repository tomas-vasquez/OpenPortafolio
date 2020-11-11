import React from "react";
import Icons from "../components/common/Icons";
import Particles from "../components/common/Particles2";
import { about } from "../data/config";

export default function cv() {
  const aboutAvatar = about.picUrl;

  return (
    <div
      style={{
        minWidth: 764,
        position: "absolute",
      }}
    >
      <Particles />
      <div className="sidebar-wrapper">
        <div className="profile-container mb-4">
          <img
            style={{
              width: 150,
              height: 150,
            }}
            src={aboutAvatar}
            alt="tomas vasquez"
            className="mx-auto rounded-circle mt-3 mt-md-0 mb-4"
          />
          <h1 className="name">Tomás Vásquez</h1>
          <h3 className="tagline">Web Developer</h3>
        </div>

        <div className="contact-container container-block">
          <ul className="list-unstyled contact-list">
            <li className="email">
              <Icons icon="pointer" className="mr-3" />
              Santa Cruz - Bolivia
            </li>
            <li className="email">
              <Icons icon="gmail" className="mr-3" />
              <a href="mailto:tomasdetloging@gmail.com">
                tomasdetloging@gmail.com
              </a>
            </li>
            <li className="phone">
              <Icons icon="wathsapp" className="mr-3" />
              <a href="https://api.whatsapp.com/send?phone=59177649384">
                +591 77649384
              </a>
            </li>
            <li className="website">
              <Icons icon="hear" className="mr-3" />
              <a href="https://tomas-dev.vercel.app">https://tomas-dev</a>
            </li>
            <li className="linkedin">
              <Icons icon="linkedin" className="mr-3" />

              <a
                href="https://www.linkedin.com/in/tomás-vásquez-8a45471b4"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/tomas
              </a>
            </li>
            <li className="github">
              <Icons icon="github" className="mr-3" />
              <a
                href="https://github.com/tomasdetloging"
                target="_blank"
                rel="noreferrer"
              >
                github.com/tomas
              </a>
            </li>
            <li className="twitter">
              <Icons icon="twitter" className="mr-3" />
              <a
                href="https://www.twitter.com/_tomasvasquez_"
                target="_blank"
                rel="noreferrer"
              >
                @_tomasvasquez_
              </a>
            </li>
          </ul>
        </div>
        {/*//contact-container*/}
        <div className="education-container container-block">
          <h2 className="container-block-title"> Education: </h2>
          <div className="item">
            <h4 className="degree"> Eng. ES </h4>
            <h5 className="meta"> U.G.R.M. - F.I.C.H. </h5>
            <div className="time"> 2015 - 2018 </div>
          </div>
          {/*//Article*/}
          <div className="item">
            <h4 className="degree"> Software development </h4>
            <h5 className="meta"> EDteam </h5>
            <div className="time"> 2018 - 2019 </div>
          </div>
          {/*//Article*/}
          <div className="item">
            <h4 className="degree"> Software development </h4>
            <h5 className="meta"> Platzi </h5>
            <div className="time"> 2020 - until today </div>
          </div>
          {/*//item*/}
        </div>
        {/*//education-container*/}

        <div className="languages-container container-block">
          <h2 className="container-block-title">Idioms:</h2>
          <ul className="list-unstyled interests-list">
            <li>
              Espanish <span className="lang-desc">(native)</span>
            </li>
            <li>
              English <span className="lang-desc">basic - middle</span>
            </li>
          </ul>
        </div>
        <div className="languages-container container-block">
          <h2 className="container-block-title">Interests</h2>
          <ul className="list-unstyled interests-list">
            <li> Gatgets </li>
            <li> Web technology </li>
            <li> Mobile technology </li>
            <li> Graphic design </li>
          </ul>
        </div>
      </div>

      <div className="main-wrapper" id="cv">
        <section className="section summary-section">
          <h1 className="section-title">
            <span className="icon-holder">
              <Icons icon="user" />
            </span>
            Tomas vasquez
          </h1>
          <div className="meta">
            <div className="company">Summary</div>
          </div>
          <div className="summary">
            <p>
              My name is Tomás Vásquez Quispe and I am specialized in the
              development and programming of web applications. I began my
              academic training at the university studying Informatics
              Engineering and later studying self-taught in online education
              platforms, first in EDteam and then in Platzi.
              <br className="mb-1" /> I am currently looking to insert working
              in the technology area. I am very self-taught and I constantly
              look for new challenges that challenge my abilities and help me
              grow.
            </p>
          </div>
        </section>

        <section className="section experiences-section">
          <h2 className="section-title">
            <span className="icon-holder">
              <Icons icon="briefcase" />
            </span>
            Experience:
          </h2>

          <div className="item">
            <div className="details">
              <p>(no experience working in companies)</p>
            </div>
          </div>
        </section>

        <section className="section projects-section">
          <h2 className="section-title">
            <span className="icon-holder">
              <Icons icon="archive" />
            </span>
            Personal projects:
          </h2>
          <div>
            <div className="item">
              <span className="project-title">
                <a href="/" target="_blank" rel="noreferrer">
                  Open-Portafolio
                </a>
              </span>{" "}
              -{" "}
              <span className="project-tagline">
                customizable professional portfolio made with the purpose of
                helping my colleagues create their professional portfolio
                quickly and easily. I used React, GetsbyJs, Github-Api,
                react-particle-js and bootstrap,{" "}
                <a href="https://github.com/tomasdetloging/OpenPortafolio">
                  (get source)
                </a>
                .
              </span>
            </div>
            <div className="item">
              <span className="project-title">
                <a
                  href="https://open-academy.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open-Academy
                </a>
              </span>{" "}
              -{" "}
              <span className="project-tagline">
                basic skeleton to create an online education platform,
                <br />
                <a href="https://github.com/tomasdetloging/openacademy-nextjs">
                  (get code from frontend)
                </a>
                ,{" "}
                <a href="https://github.com/tomasdetloging/MyAcademy-Api">
                  (get code from backend)
                </a>
                ,{" "}
                <a href="https://github.com/tomasdetloging/OpenAcademy-ElectronAdmin">
                  (get code from desktop aplication)
                </a>
                .
              </span>
            </div>
            <div className="item">
              <span className="project-title">
                <a
                  href="https://social-network-v123.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Social-Network-v123
                </a>
              </span>{" "}
              -{" "}
              <span className="project-tagline">
                Social network in which I work with some friends, created with
                the purpose of becoming an online education platform,{" "}
                <a href="https://github.com/tomasdetloging/social-network-v123">
                  (get code)
                </a>
                .
              </span>
            </div>
          </div>{" "}
          <div className="intro">
            <p>
              You can see all my personal projects on my personal website:{" "}
              <a href="https://tomas-dev.vercel.app">https://tomas-dev.com</a>
            </p>
          </div>
        </section>
        {/*//section*/}

        <section className="skills-section section">
          <h2 className="section-title">
            <span className="icon-holder">
              <Icons icon="rocket" />
              <i className="fas fa-rocket"></i>
            </span>
            Technical knowledge:
          </h2>
          <div className="skillset">
            <div className="item">
              <h3 className="level-title">React</h3>
              <div className="progress level-bar">
                <div
                  className="progress-bar theme-progress-bar"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            <div className="item">
              <h3 className="level-title">Angular</h3>
              <div className="progress level-bar">
                <div
                  className="progress-bar theme-progress-bar"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>

            <div className="item">
              <h3 className="level-title">Vue</h3>
              <div className="progress level-bar">
                <div
                  className="progress-bar theme-progress-bar"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            <br />

            <div className="item">
              <h3 className="level-title">Node-js</h3>
              <div className="progress level-bar">
                <div
                  className="progress-bar theme-progress-bar"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            <div className="item">
              <h3 className="level-title">Php</h3>
              <div className="progress level-bar">
                <div
                  className="progress-bar theme-progress-bar"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>

            <div className="item">
              <h3 className="level-title">MongoDB</h3>
              <div className="progress level-bar">
                <div
                  className="progress-bar theme-progress-bar"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>

            <div className="item">
              <h3 className="level-title">Mysql</h3>
              <div className="progress level-bar">
                <div
                  className="progress-bar theme-progress-bar"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section section mb-0">
          <h2 className="section-title">
            <span className="icon-holder">
              <Icons icon="rocket" />
              <i className="fas fa-rocket"></i>
            </span>
            Extra knowledge
          </h2>

          <div className="item">
            <span className="project-title">Git</span> -{" "}
            <span className="project-tagline">
              intermediate experience using to manage and deploy my personal
              projects.
            </span>
          </div>
          <div className="item">
            <span className="project-title">Linux</span> -{" "}
            <span className="project-tagline">
              Daily use of the terminal and the operating system usually.
            </span>
          </div>

          <div className="item">
            <span className="project-title">Vim</span> -{" "}
            <span className="project-tagline">
              Favorite code editor that allows me to develop in a more agile and
              fast way.
            </span>
          </div>

          <div className="item">
            <span className="project-title">English</span> -{" "}
            <span className="project-tagline">
              Intermediate level. Daily use in reading books, documentation and
              courses. Capacity to understand both oral and written, and to
              maintain a conversation and socialize.
            </span>
          </div>
        </section>
      </div>
      {/*//main-body*/}
    </div>
  );
}
