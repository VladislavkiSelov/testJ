import React from "react";
import { Button } from "../Button/Button";
import "./CardTypeRepaire.scss";

export default function CardTypeRepaire({ objJob, name, day, type }) {
  return <div className="card_repaire">
      <div className="wrapper_card_header">
        <div className="card_header_repaire conteiner_card_repaire">
          <div className="box_img">
            <img src="/img/section1(2).jpg" alt="#" />
          </div>
          <div>
            <h2>
              {name}
            </h2>
            <h4>
              от {day} днів
            </h4>
          </div>
        </div>
      </div>
      <div className="wrapper_text_info">
        <div className="info_text_card conteiner_card_repaire">
          <p>
            {type}
          </p>
        </div>
      </div>
      <div className="type_job conteiner_card_repaire">
        <h3>Демонтаж</h3>
        <ul>
          {objJob["Демонтаж"].map(el => <li>
              {el}
            </li>)}
        </ul>
      </div>
      <div className="type_job conteiner_card_repaire">
        <h3>Чорнові роботи</h3>
        <ul>
          {objJob["Черновые работы"].map(el => <li>
              {el}
            </li>)}
        </ul>
      </div>
      <div className="type_job conteiner_card_repaire">
        <h3>Чистові роботи</h3>
        <ul>
          {objJob["Чистовые работы"].map(el => <li>
              {el}
            </li>)}
        </ul>
      </div>
      <div className="conteiner_card_repaire">
        <button className="btn_next_type_job">
          Список робіт
        </button> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path d="M6.54175 1V12.0833" stroke="#2D4872" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12.0833 6.5415L6.54167 12.0832L1 6.5415" stroke="#2D4872" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <h4 className="conteiner_card_repaire price">
        от 3 245 грн/м2 <span className="green">от 2 450 грн/м2</span>
      </h4>
      <div className="conteiner_card_repaire">
        <Button text="Отримати кошторис" />
      </div>
    </div>;
}
