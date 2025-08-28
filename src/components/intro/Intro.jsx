import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    const instance = init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      typeSpeed: 100,
      startDelay: 500,
      loop: true,
      strings: ["Developer", "Designer", "Content Creator"],
      cursorChar: "|",
    });

    return () => {
      if (instance) {
        instance.destroy();
      }
    };
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img
            src={process.env.PUBLIC_URL + "/assets/amir01.png"}
            alt="Amir Akbari - Developer and Designer"
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, i'm</h2>
          <h1>Amir Akbari</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img
            src={process.env.PUBLIC_URL + "/assets/down.png"}
            alt="Scroll down to portfolio section"
          />
        </a>
      </div>
    </div>
  );
}
