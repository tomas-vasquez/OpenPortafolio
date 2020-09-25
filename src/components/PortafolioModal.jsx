import React from "react";
import Image from "gatsby-image";
import { Modal } from "reactstrap";

export default function PortafolioModal({
  image,
  proyect,
  isOpen,
  closeModal,
}) {
  return (
    <Modal className="modal-lg" isOpen={isOpen} toggle={closeModal}>
      <div className=" text-center py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2
                className="portfolio-modal-title text-secondary text-uppercase mb-0"
                id="portfolioModal3Label"
              >
                {/* {githubUrl} */}
                title
              </h2>
              <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="divider-custom-line"></div>
              </div>
              <Image fluid={image.fluid} className="mb-3" />
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia neque assumenda ipsam nihil, molestias magnam,
                recusandae quos quis inventore quisquam velit asperiores, vitae?
                Reprehenderit soluta, eos quod consequuntur itaque. Nam.
              </p>
              <button className="btn btn-secondary mr-3">
                <i className="fab fa-github mr-2"></i>
                view on Github
              </button>
              <button className="btn btn-primary" onClick={closeModal}>
                <i className="fas fa-times fa-fw"></i>
                Close Window
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
