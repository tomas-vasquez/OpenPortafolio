import React, { Component } from "react";
import Separator from "../../common/Separator";

import { contactMe } from "../../../data/config";
import Icons from "../../common/Icons";

export default class ContactMe extends Component {
  render() {
    return (
      <section className="page-section bg-white pb-4" id="contact">
        <div className="container">
          <Separator title={contactMe.contactMeTitle} dark />
          <div className="row d-flex">
            <div className="mx-auto text-center">
              <p
                dangerouslySetInnerHTML={{ __html: contactMe.contactMeText }}
              />
              <Icons icon="arrowDown" className="fa-2x " />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
