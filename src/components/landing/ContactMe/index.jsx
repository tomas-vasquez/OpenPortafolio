import React, { Component } from "react";
import ContactForm from "./ContactForm";
import contact from "../../../assets/illustrations/contact.svg";

export default class ContactMe extends Component {
  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Contact Me
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row d-flex">
            <div className="col-12 col-md-6 col-lg-8 mx-auto">
              <p
                className="lead text-center"
                style={{
                  fontWeight: 400,
                }}
              >
                afadfadfasd
              </p>
            </div>
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
