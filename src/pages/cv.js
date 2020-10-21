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
              tomasdetloging@gmail.com
            </li>
            <li class="phone">
              <Icons icon="wathsapp" className="mr-3" />
              +591 77649384
            </li>
            <li class="website">
              <Icons icon="hear" className="mr-3" />
              https://tomas-dev.vercel.app
            </li>
            {/* <li class="linkedin">
              <i class="fab fa-linkedin-in"></i
              ><a href="#" target="_blank">linkedin.com/in/alandoe</a>
            </li> */}
            <li class="github">
              <Icons icon="github" className="mr-3" />
              <a href="https:" target="_blank">
                github.com/tomasdetloging
              </a>
            </li>
            <li class="twitter">
              <Icons icon="twitter" className="mr-3" />
              <a href="https://twitter.com/3rdwave_themes" target="_blank">
                @_tomasvasquez_
              </a>
            </li>
          </ul>
        </div>
        {/*//contact-container*/}
        <div class="education-container container-block">
          <h2 class="container-block-title">Educación:</h2>
          <div class="item">
            <h4 class="degree">Ing. Informática</h4>
            <h5 class="meta">U.G.R.M. - F.I.C.H.</h5>
            <div class="time">2015 - 2018</div>
          </div>
          {/*//item*/}
          <div class="item">
            <h4 class="degree">Desarrollo de software</h4>
            <h5 class="meta">EDteam</h5>
            <div class="time">2018 - 2019</div>
          </div>
          {/*//item*/}
          <div class="item">
            <h4 class="degree">Desarrollo de software</h4>
            <h5 class="meta">en Platzi</h5>
            <div class="time">2020 - hasta el dia de hoy</div>
          </div>
          {/*//item*/}
        </div>
        {/*//education-container*/}

        <div class="languages-container container-block">
          <h2 class="container-block-title">Lenguages:</h2>
          <ul class="list-unstyled interests-list">
            <li>
              Español <span class="lang-desc">(Nativo)</span>
            </li>
            <li>
              Inglés <span class="lang-desc">Intermedio - avanzado</span>
            </li>
          </ul>
        </div>
        {/*//interests*/}

        <div class="interests-container container-block">
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
        </div>
        {/*//interests*/}
      </div>
      {/*//sidebar-wrapper*/}

      <div class="main-wrapper" id="cv">
        <section class="section summary-section">
          <h2 class="section-title">
            <span class="icon-holder">
              <Icons icon="user" />
            </span>
            Acerca de mí:
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
              Mi nombre es Tomás Vásquez y estoy especializado en el desarrollo
              y programación de aplicaciones web. Comensé mi formación académica
              en la univeridad estudiando Ing. Informática y después estudiando
              de manera autodidacta en plataformas de educación online, primero
              en EDteam y luego en Platzi, que me ayudaron a conseguir trabajo
              de manera remota y eventual en empresas como NetSoft, NullCode,
              Team y muchas otras más. En estos momentos siento que ha llegado
              el momento de cambiar de aires y llevar a cabo una nueva
              experiencia laboral. Sin duda, creo que su compañia es la perfecta
              para lograrlo.
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
            Experiencias:
          </h2>

          <div class="item">
            <div class="meta">
              <div class="upper-row">
                <h3 class="job-title">Freelancer</h3>
                <div class="time">2019 - Present</div>
              </div>
              {/*//upper-row*/}
              <div class="company"></div>
            </div>
            {/*//meta*/}
            <div class="details">
              <p>
                Describe your role here lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                enim. Donec pede justo.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            {/*//details*/}
          </div>
          {/*//item*/}
        </section>
        {/*//section*/}

        <section class="section projects-section">
          <h2 class="section-title">
            <span class="icon-holder">
              <Icons icon="archive" />
            </span>
            Proyectos personales:
          </h2>
          <div class="intro">
            <p>
              Puedes ver mis proyectos personales en mi página web personal:
              <br />
              <a href="https://tomas-dev.com">https://tomas-dev.vercel.app</a>
            </p>

            <p>
              O directo desde mi repositorio de Github:
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
            Habilidades y competencias:
          </h2>
          <div class="skillset">
            <br />

            <div class="item">
              <h3 class="level-title">Javascript</h3>
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
            <div class="item">
              <h3 class="level-title">Php - Laravel</h3>
              <div class="progress level-bar">
                <div
                  class="progress-bar theme-progress-bar"
                  role="progressbar"
                  style={{ width: "90%" }}
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
