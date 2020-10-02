import React, { Component } from "react";
import ContactForm from "./ContactForm";
import contact from "../../../assets/illustrations/contact.svg";
import Separator from "../../common/Separator";

export default class ContactMe extends Component {
  render() {
    return (
      <section className="page-section bg-white" id="contact">
        <div className="container">
          <Separator title="Contant Me" dark />
          <div className="row d-flex">
            <div className="col-lg-6 mx-auto pt-5">
              <ContactForm />
            </div>
            <div className="col-lg-6 mx-auto d-none d-lg-block">
              <img
                src={contact}
                alt="I’m John and I’m a Backend & Devops engineer!"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
