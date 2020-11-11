import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Particles from "react-particles-js";
import Image from "gatsby-image";

export default function MyParticles() {
  const data = useStaticQuery(graphql`
    query IntroQuery {
      file(name: { regex: "/background/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const bg = data.file.childImageSharp.fluid;

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const scrollHandler = (e) => {
    const scrollY = e.currentTarget.scrollY;
    const mainHeight = window.innerHeight;
    let opacity = 0;
    if (scrollY < mainHeight) {
      opacity = scrollY / mainHeight;
    } else {
      opacity = 0.9;
    }
    setOpacity(opacity);
  };

  const resizeHandler = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    window.addEventListener("scroll", scrollHandler);
  }, []);

  const ruleTreeSimple = (a, b, c) => {
    return Math.abs((b * c) / a);
  };

  return (
    <>
      <div
        id="home"
        style={{
          zIndex: -100,
          height: height,
          backgroundSize: "contain",
        }}
        className="fixed-top m-0"
      >
        <Image
          className="fixed-top m-0"
          style={{
            zIndex: -100,
            height: height,
          }}
          fluid={bg}
        />
      </div>
      <div
        className="fixed-top bgstyle"
        style={{
          height: height,
          opacity: opacity,
          zIndex: -99,
          width: width,
        }}
      />
      <div
        className="fixed-top"
        style={{
          zIndex: -98,
        }}
      >
        <Particles
          height={height}
          width={width}
          params={{
            pauseOnBlur: true,
            particles: {
              number: {
                value: ruleTreeSimple(1000, 60, width),
              },
              size: {
                value: 3,
              },
              opacity: {
                value: 0.4,
              },
              line_linked: {
                opacity: 0.1,
              },
              move: {
                speed: 1,
              },
            },
          }}
        />
      </div>
    </>
  );
}
