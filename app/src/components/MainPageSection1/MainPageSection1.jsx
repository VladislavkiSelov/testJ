import React from "react";
import Calculator from "../Calculator/Calculator"
import "./MainPageSection1.scss";

export default function MainPageSection1() {
  return <section className="section1_wrapper" id="calculator">
      <div className="section1 container">
        <div className="section1_left">
          <h1 className="anim_item">
            ремонт квартир<br /> в Харкові
          </h1>
          <h2 className="anim_item">
            от <span className="green">2450</span> грн/м2
          </h2>
          <div className="box_icon_section1">
            <div>
              <img src="/img/icon1_section1.png" alt="#" />
              <p>Оплата за фактом прийому робіт</p>
            </div>
            <div>
              <img src="/img/icon2_section1.png" alt="#" />
              <p>Вимір та складання кошторису БЕЗКОШТОВНО</p>
            </div>
            <div>
              <img src="/img/icon3_section1.png" alt="#" />
              <p>Виїзд кошторисника</p>
            </div>
            <div>
              <img src="/img/icon4_section1.png" alt="#" />
              <p>Гарантія 3 роки</p>
            </div>
          </div>
        </div>
        <Calculator />
      </div>
    </section>;
}
