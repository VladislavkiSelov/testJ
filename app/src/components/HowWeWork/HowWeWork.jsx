import React from "react";
import "./HowWeWork.scss";

export default function HowWeWork() {
  const howWeWorkArray = [
    { name: "Безкоштовний виїзд замірника", img: "/img/builder_1.png" },
    { name: "Кошторис у день звернення", img: "/img/consent_1.png" },
    { name: "Договір", img: "/img/official-documents_1.png" },
    { name: "Накладні матеріали", img: "/img/gdpr_1.png" },
    {
      name: "Контроль: фотозвіт чи відеоспостереження",
      img: "/img/cctv_1.png"
    },
    { name: "Акт виконаних робіт", img: "/img/contract_1.png" },
    { name: "Акт приймання робіт за договором", img: "/img/cooperation_1.png" },
    { name: "Гарантія на виконані роботи", img: "/img/guarantee_1.png" }
  ];

  return <section className="HowWeWork container">
      <h2 className="anim_item">Як ми працюємо</h2>
      <p className="anim_item">
        Вам зрозумілий кожен етап: фіксовані терміни та ціни, надаємо все
        Документи: накладні, гарантії, акти. Ви будете впевнені у результаті.
      </p>
      <div className="box_card_work">
        {howWeWorkArray.map(el => <div className="card_work">
            <div>
              <div className="box_img">
                <img src={el.img} alt="#" />
              </div>
              <h4>
                {el.name}
              </h4>
            </div>
            <div>
              <div className="line" />
              <div className="circle" />
            </div>
          </div>)}
      </div>
    </section>;
}
