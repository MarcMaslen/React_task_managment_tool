import "./about.scss";
import { Card, Button } from "react-bootstrap";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="wrapper">
          <h1>About Your new Task Management Tool</h1>
          <p>
            Managing your daily tasks has never been so easy! Sign up today to
            get a range of tools to help you manage and plan your tasks so you
            always have everything ready on time.
          </p>
          <p>
            I created Task Management Tool as a way to better manage my tasks
            during university, so I know exactly how important it is to have a a
            reliable way to track everything you need to do.{" "}
          </p>
          <div className="button">
            <div className="button1">
              <button type="button" class="btn btn-secondary btn-lg">
                Sign-up
              </button>
            </div>
            <div className="button2"></div>
            <button type="button" class="btn btn-secondary btn-lg">
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="assets/checllist.png" alt=""></img>
        </div>
      </div>
    </div>
  );
}
