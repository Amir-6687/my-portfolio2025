import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    let instance = null;
    let timeoutId = null;

    // تاخیر کوتاه برای اطمینان از render کامل
    timeoutId = setTimeout(() => {
      if (textRef.current) {
        // پاک کردن کامل محتوای قبلی
        textRef.current.innerHTML = "";

        // توقف تمام انیمیشن‌های قبلی
        const existingCursor = textRef.current.querySelector(".ityped-cursor");
        if (existingCursor) {
          existingCursor.remove();
        }

        instance = init(textRef.current, {
          showCursor: true,
          backDelay: 1500,
          backSpeed: 60,
          typeSpeed: 100,
          startDelay: 500,
          loop: true,
          strings: ["Developer", "Designer", "Content Creator"],
          cursorChar: "|",
        });
      }
    }, 100);

    return () => {
      // پاک کردن timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // پاک کردن instance
      if (instance) {
        try {
          if (typeof instance.destroy === "function") {
            instance.destroy();
          }
        } catch (error) {
          console.log("Error destroying ityped instance:", error);
        }
      }

      // پاک کردن کامل محتوا
      if (textRef.current) {
        textRef.current.innerHTML = "";
        textRef.current.textContent = "";
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
