import React from "react";
import Icons from "../components/common/Icons";
import Particles from "../components/common/Particles2";
import { about } from "../data/config";

export default function cv() {
  const aboutAvatar = about.picUrl;

  return (
    <div>
      <Particles />

      <div class="sidebar-wrapper">
        <div class="profile-container">
          <img
            style={{
              width: 100,
              height: 100,
            }}
            src={aboutAvatar}
            alt="tomas vasquez"
            className="mx-auto rounded-circle mt-3 mt-md-0 mb-4 mb-md-0"
          />
          <h1 class="name">Tomás Vásquez</h1>
          <h3 class="tagline">Web Developer</h3>
        </div>
        {/*//profile-container*/}

        <div class="contact-container container-block">
          <ul class="list-unstyled contact-list">
            <li class="email">
              <Icons icon="pointer" className="mr-3" />
              Santa Cruz - Bolivia
            </li>
            <li class="email">
              <Icons icon="gmail" className="mr-3" />
              <a href="mailto:tomasdetloging@gmail.com">
                tomasdetloging@gmail.com
              </a>
            </li>
            <li class="phone">
              <Icons icon="wathsapp" className="mr-3" />
              <a href="https://api.whatsapp.com/send?phone=59177649384">
                +591 77649384
              </a>
            </li>
            <li class="website">
              <Icons icon="hear" className="mr-3" />
              <a href="https://tomas-dev.vercel.app">https://tomas-dev</a>
            </li>
            <li class="linkedin">
              <Icons icon="linkedin" className="mr-3" />

              <a
                href="https://www.linkedin.com/in/tomás-vásquez-8a45471b4"
                target="_blank"
              >
                linkedin.com/tomas
              </a>
            </li>
            <li class="github">
              <Icons icon="github" className="mr-3" />
              <a href="https://github.com/tomasdetloging" target="_blank">
                github.com/tomasdetloging
              </a>
            </li>
            <li class="twitter">
              <Icons icon="twitter" className="mr-3" />
              <a href="https://www.twitter.com/_tomasvasquez_" target="_blank">
                @_tomasvasquez_
              </a>
            </li>
          </ul>
        </div>
        {/*//contact-container*/}
        <div class="education-container container-block">
          <h2 class="container-block-title"> Education: </h2>
          <div class="item">
            <h4 class="degree"> Eng. ES </h4>
            <h5 class="meta"> U.G.R.M. - F.I.C.H. </h5>
            <div class="time"> 2015 - 2018 </div>
          </div>
          {/*//Article*/}
          <div class="item">
            <h4 class="degree"> Software development </h4>
            <h5 class="meta"> EDteam </h5>
            <div class="time"> 2018 - 2019 </div>
          </div>
          {/*//Article*/}
          <div class="item">
            <h4 class="degree"> Software development </h4>
            <h5 class="meta"> Platzi </h5>
            <div class="time"> 2020 - until today </div>
          </div>
          {/*//item*/}
        </div>
        {/*//education-container*/}

        <div class="languages-container container-block">
          <h2 class="container-block-title">Idioms:</h2>
          <ul class="list-unstyled interests-list">
            <li>
              Espanish <span class="lang-desc">(native)</span>
            </li>
            <li>
              English <span class="lang-desc">basic - middle</span>
            </li>
          </ul>
        </div>
        {/*//interests*/}

        {/* <div class="interests-container container-block">
          <h2 class="container-block-title">Intereses:</h2>
          <ul class="list-unstyled interests-list">
            <li>Gatgets</li>
            <li>Tecnología web</li>
            <li>Tecnología móvil</li>
            <li>Diseño gráfico</li>
            <li>Literatura Zombie</li>
            <li>Juegos Online</li>
            <li></li>
          </ul>
        </div> */}
        {/*//interests*/}
      </div>
      {/*//sidebar-wrapper*/}

      <div class="main-wrapper" id="cv">
        <section class="section summary-section">
          <h2 class="section-title">
            <span class="icon-holder">
              <Icons icon="user" />
            </span>
            About me:
          </h2>
          <div class="meta">
            <div class="upper-row">
              <h3 class="job-title">Tomás Vásquez</h3>
            </div>
            {/*//upper-row*/}
            <div class="company">Web Developer</div>
          </div>
          {/*//meta*/}

          <div class="summary">
            <p>
              My name is Tomás Vásquez and I am specialized in the development
              and programming of web applications. I began my academic training
              at the university studying Computer Science and later studying
              self-taught in online education platforms, first in EDteam and
              then in Platzi, which helped me to get work remotely and
              eventually in companies like NetSoft, NullCode, Team and many
              more. At this time I feel that the time has come to change of
              scene and carry out a new work experience. Without a doubt, I
              believe that your company is the perfect one to achieve it.
            </p>
          </div>
          {/*//summary*/}
        </section>
        {/*//section*/}

        <section class="section experiences-section">
          <h2 class="section-title">
            <span class="icon-holder">
              <Icons icon="briefcase" />
            </span>
            Experience:
          </h2>

          <div class="item">
            <div class="details">
              <p>(no experience working in companies)</p>
            </div>
          </div>
        </section>

        <section class="section projects-section">
          <h2 class="section-title">
            <span class="icon-holder">
              <Icons icon="archive" />
            </span>
            Personal projects:
          </h2>
          <div class="intro">
            <p>
              You can see my personal projects on my personal website:
              <br />
              <a href="https://tomas-dev.vercel.app">
                https://tomas-dev.vercel.app
              </a>
            </p>

            <p>
              Or direct from my Github repository:
              <br />
              <a href="https://github.com/tomasdetloging">
                https://github.com/tomasdetloging
              </a>
            </p>
          </div>
        </section>
        {/*//section*/}

        <section class="skills-section section">
          <h2 class="section-title">
            <span class="icon-holder">
              <Icons icon="rocket" />
              <i class="fas fa-rocket"></i>
            </span>
            Skills and competencies:
          </h2>
          <div class="skillset">
            <br />
            {/*//item*/}
            <div class="item">
              <h3 class="level-title">React</h3>
              <div class="progress level-bar">
                <div
                  class="progress-bar theme-progress-bar"
                  role="progressbar"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            {/*//item*/}
            <div class="item">
              <h3 class="level-title">Angular</h3>
              <div class="progress level-bar">
                <div
                  class="progress-bar theme-progress-bar"
                  role="progressbar"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            {/*//item*/}
            <div class="item">
              <h3 class="level-title">VueJs</h3>
              <div class="progress level-bar">
                <div
                  class="progress-bar theme-progress-bar"
                  role="progressbar"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            {/*//item*/}
            <br />
            {/*//item*/}
            <div class="item">
              <h3 class="level-title">NodeJs</h3>
              <div class="progress level-bar">
                <div
                  class="progress-bar theme-progress-bar"
                  role="progressbar"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            {/*//item*/}
            <div class="item">
              <h3 class="level-title">Php</h3>
              <div class="progress level-bar">
                <div
                  class="progress-bar theme-progress-bar"
                  role="progressbar"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            {/*//item*/}
            <br />
            {/*//item*/}
            <div class="item">
              <h3 class="level-title">MongoDB</h3>
              <div class="progress level-bar">
                <div
                  class="progress-bar theme-progress-bar"
                  role="progressbar"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            {/*//item*/}
            <div class="item">
              <h3 class="level-title">Mysql</h3>
              <div class="progress level-bar">
                <div
                  class="progress-bar theme-progress-bar"
                  role="progressbar"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>
        </section>
        {/*//skills-section*/}
      </div>
      {/*//main-body*/}
    </div>
  );
}
