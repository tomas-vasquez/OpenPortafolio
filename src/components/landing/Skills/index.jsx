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
        <div className="row d-flex py-4">
          <div className="col-12 col-md-10 col-lg-8 mx-auto">
            <div className="card text-secondary shadow">
              <div className="card-body pb-1">
                <div className="row">
                  {skills.mySkills.map((skill, key) => (
                    <Fragment key={`${skill.icon}`}>
                      <div className="col-6 col-sm-4 col-lg-3">
                        <p className="lead">
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
                      <div className="col-6 col-sm-8 col-lg-9">
                        <div className="progress mt-1">
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
