import React, { Fragment } from "react";

//config
import { skills } from "../../../data/config";
import Icons from "../../common/Icons";
import Separator from "../../common/Separator";

const Skills = () => {
  return (
    <section
      className="page-section mb-0 bg-transparent text-light"
      id="skills"
    >
      <div className="container">
        <Separator title={skills.skillsHeading} />
        <div className="row d-flex">
          <div className="col-12 col-md-11 col-lg-9 mx-auto">
            <div className="card text-secondary shadow">
              <div className="card-body pb-1">
                <div className="row">
                  {skills.mySkills.map((skill, key) => (
                    <Fragment key={`${skill.icon}`}>
                      <div className="col-12 col-xs-5 col-lg-3">
                        <p className="lead mb-1 mb-lg-3">
                          <Icons
                            icon={skill.icon}
                            style={{
                              color: skill.color,
                            }}
                            className="mr-3"
                          />
                          {skill.name}
                        </p>
                      </div>
                      <div className="col-12 col-xs-7 col-lg-9 mb-3 mb-lg-0">
                        <div className="progress mt-0 mt-lg-2">
                          <div
                            className="progress-bar"
                            style={{
                              width: `${skill.value}%`,
                              backgroundColor: skill.color,
                            }}
                          />
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
