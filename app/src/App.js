import "./style/reset.scss";
import "./style/fonts.scss";
import "./style/index.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPageSection1 from "./components/MainPageSection1/MainPageSection1";
import SectionRepairPrices from "./components/SectionRepairPrices/SectionRepairPrices";
import HowWeWork from "./components/HowWeWork/HowWeWork";
import YoutubeChannel from "./components/YoutubeChannel/YoutubeChannel";
import OurWorks from "./components/OurWorks/OurWorks";
import AboutUs from "./components/AboutUs/AboutUs";
import ModalMeasuare from "./components/ModalMeasuare/ModalMeasuare";
import React, { useState, useEffect } from "react";
import {Context} from './components/Context/context'
  
function App() {
  const [activeMeasuare, setActiveMeasure] = useState(false);

  useEffect(() => {
    const animItems = Array.from(document.querySelectorAll(".anim_item"));

    window.addEventListener("scroll", animalScroll);

    function animalScroll() {
      animItems.forEach(element => {
        const animItemHeight = element.offsetHeight;
        const animItemOffset = offset(element).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          window.scrollY > animItemOffset - animItemPoint &&
          window.scrollY < animItemOffset + animItemHeight
        ) {
          element.classList.add("active_scroll");
        } else {
          element.classList.remove("active_scroll");
        }
      });
    }

    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollY || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    animalScroll();

    window.onbeforeunload = function() {
      window.scrollTo({ left: 0, top: 0 });
    };
  }, []);

  useEffect(() => {
    const imgArray = Array.from(document.querySelectorAll("img"));
    imgArray.forEach(element => {
      element.setAttribute(
        "src",
        `https://vladislavkiselov.github.io/Concrete-Jungle${element.getAttribute(
          "src"
        )}`
      );
    });
  }, []);

  function setModalMeasure(value) {
    setActiveMeasure(value);
  }

  return <Context.Provider value={{ setModalMeasure }}>
      <div className="App wrapper">
        <Header activeMeasuare={activeMeasuare} setModalMeasure={value => setModalMeasure(value)} />
        <div className="Main">
          <MainPageSection1 />
          <SectionRepairPrices />
          <HowWeWork />
          <OurWorks />
          <AboutUs />
          <YoutubeChannel />
          {activeMeasuare && <ModalMeasuare setModalMeasure={value => setModalMeasure(value)} />}
        </div>
        <Footer />
      </div>
    </Context.Provider>;
}

export default App;
