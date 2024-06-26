import imageform from "../../../assets/argent.jpeg";
import React from "react";
import "../navDashCss/accountform.css";

export default function LoginForm() {
  return (
    <>
      <div class="form-structor">
        <div class="signup">
          <h2 class="form-title" id="signup">
            <span>or</span>Sign up
          </h2>
          <div class="form-holder">
            <input type="text" class="input" placeholder="Name" />
            <input type="email" class="input" placeholder="Email" />
            <input type="password" class="input" placeholder="Password" />
          </div>
          <button class="submit-btn">Sign up</button>
        </div>
        <div class="login slide-up">
          <div class="center">
            <h2 class="form-title" id="login">
              <span>or</span>Log in
            </h2>
            <div class="form-holder">
              <input type="email" class="input" placeholder="Email" />
              <input type="password" class="input" placeholder="Password" />
            </div>
            <button class="submit-btn">Log in</button>
          </div>
        </div>
      </div>
    </>
  );
}
