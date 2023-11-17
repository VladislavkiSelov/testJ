import React from "react";
import FormСontactUs from "../FormСontactUs/FormСontactUs";
import "./AboutUs.scss";

export default function AboutUs() {
  return <section className="AboutUs" id="about_us">
      <div className="AboutUs_wrapper container">
        <div className="AboutUs_left">
          <h2>Привіт</h2>
          <p>
            Моє ім'я Владислав Кисельов, я директор компанії Concrete Jungel.
            І це найнезвичайніший сайт ремонтної компанії, який ви коли-небудь
            бачили.
          </p>
          <FormСontactUs statusComment={false} />
        </div>
        <div className="AboutUs_right anim_item">
          <img src="/img/image_man.svg" alt="" />
        </div>
      </div>
    </section>;
}
