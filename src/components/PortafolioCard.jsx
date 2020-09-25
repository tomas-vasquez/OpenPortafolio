import React, { useState } from "react";
import Image from "gatsby-image";
import PortafolioModal from "./PortafolioModal";

export default function PortafolioCard({ proyect, image }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="col-md-6 col-lg-4 mb-5">
        <div
          className="portfolio-item mx-auto shadow"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <Image fluid={image.fluid} alt={JSON.stringify(proyect)} />
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <p className="p-2 m-0 border-top">proyect Name</p>
        </div>
      </div>
      <PortafolioModal
        isOpen={isOpen}
        proyect={proyect}
        image={image}
        closeModal={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
}
