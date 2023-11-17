import React from "react";
import Slider from "react-slick";
import CardTypeRepaire from "../CardtypeRepaire/CardTypeRepaire";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SectionRepairPrices.scss";

export default function SectionRepairPrices() {
  const type = {
    typeCosmetic:
      "Такий тип ремонту підійде для того, щоб «освіжити» ремонт у квартирі: замінити покриття стін, підлоги та стелі без попередньої підготовки",
    typeCapital:
      "Такий тип ремонту підійде, якщо потрібно відремонтувати квартиру: вирівняти стіни, зробити стяжку підлоги, прокласти інженерію і виконати чистове оздоблення.",
    typeCompleteСonstruction:
      "Ремонт класу «євро» - капітальний ремонт із застосуванням сучасних оздоблювальних матеріалів та стандартів, що включає перепланування.",
    typeDesigner:
      "Дизайнерський ремонт орієнтований для справжніх цінителів комфорту, естетики та внутрішньої зручності."
  };
  const redecorating = {
    Демонтаж: ["Демонтаж старих покриттів", "Демонтаж старої електрики"],
    "Черновые работы": [
      "Грунтовка стін та підлоги",
      "Шпаклівка та штукатурка стін"
    ],
    "Чистовые работы": ["Lorem ipsum dolor", "Lorem ipsum dolor"]
  };

  const majorRepair = {
    Демонтаж: ["Демонтаж старих покриттів", "Демонтаж старої електрики"],
    "Черновые работы": [
      "Грунтовка стін та підлоги",
      "Шпаклівка та штукатурка стін"
    ],
    "Чистовые работы": ["Lorem ipsum dolor", "Lorem ipsum dolor"]
  };

  const turnkeyRenovation = {
    Демонтаж: ["Демонтаж старих покриттів", "Демонтаж старої електрики"],
    "Черновые работы": [
      "Грунтовка стін та підлоги",
      "Шпаклівка та штукатурка стін"
    ],
    "Чистовые работы": ["Lorem ipsum dolor", "Lorem ipsum dolor"]
  };

  const designerRenovation = {
    Демонтаж: ["Демонтаж старих покриттів", "Демонтаж старої електрики"],
    "Черновые работы": [
      "Грунтовка стін та підлоги",
      "Шпаклівка та штукатурка стін"
    ],
    "Чистовые работы": ["Lorem ipsum dolor", "Lorem ipsum dolor"]
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 }
      },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };
  return (
    <section className="section_repair_prices" id="price">
      <Slider className="container" {...settings}>
        <CardTypeRepaire
          name="Косметичний"
          day="5"
          type={type.typeCosmetic}
          objJob={redecorating}
        />
        <CardTypeRepaire
          name="Капітальний"
          day="14"
          type={type.typeCapital}
          objJob={majorRepair}
        />
        <CardTypeRepaire
          name="Під ключ"
          day="30"
          type={type.typeCompleteСonstruction}
          objJob={turnkeyRenovation}
        />
        <CardTypeRepaire
          name="Дизайнерський"
          day="45"
          type={type.typeDesigner}
          objJob={designerRenovation}
        />
      </Slider>
    </section>
  );
}
