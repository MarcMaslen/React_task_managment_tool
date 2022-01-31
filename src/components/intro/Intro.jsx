import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay:  1500,
      backSpeed: 60,
      strings: ["Schedule", "Important Tasks", "Daily Routine"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer"></div>
        <div className="imgContainer2"></div>
        <div className="imgContainer3"></div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, welcome to your new</h2>
          <h1>Task Management Tool</h1>
          <h3>
            Manage your <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#about">
          <img src="assets/down.png" alt=""></img>
        </a>
      </div>
    </div>
  );
}