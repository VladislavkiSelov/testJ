import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.scss";

export default function Header({ setModalMeasure, activeMeasuare }) {
  const [statusHeaderBottom, setStatusHeaderBottom] = useState(false);

  function handelClick() {
    const burger = document.querySelector(".burger");

    if (burger.classList.contains("active_burger")) {
      burger.classList.remove("active_burger");
      setStatusHeaderBottom(false);
    } else {
      burger.classList.add("active_burger");
      setStatusHeaderBottom(true);
    }
  }

  function activeModal() {
    if (activeMeasuare === false) {
      setModalMeasure(true);
    } else {
      setModalMeasure(false);
    }
  }

  return <header className="header">
      <div className="box_burger" onClick={handelClick}>
        <div className="burger" />
      </div>
      <div className="header_top container">
        <div className="logo">
          <img src="/img/logoBlack.svg" alt="" />
        </div>
        <div className="location">
          <a target="blank" href="https://www.google.com/maps/place/%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82+%D0%9D%D0%B5%D0%B7%D0%B0%D0%BB%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%96,+2,+%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2,+%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+61000/data=!4m2!3m1!1s0x4127a0dfcfc6092b:0x3c3be6e44d333002?sa=X&ved=2ahUKEwiN-tWNkaGCAxU4GBAIHeTkBC4Q8gF6BAgMEAA&ved=2ahUKEwiN-tWNkaGCAxU4GBAIHeTkBC4Q8gF6BAgQEAI">
            <svg width="30" height="30" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="svg map">
                <path id="Vector" d="M18.5004 36.9999C18.2384 37.0011 17.9787 36.9507 17.7361 36.8515C17.4936 36.7523 17.273 36.6063 17.0869 36.4218L7.58252 26.9174C6.08188 25.425 4.89401 23.6483 4.08844 21.6912C3.28287 19.7341 2.8758 17.636 2.89104 15.5197C2.88457 13.4706 3.28698 11.4409 4.07468 9.54931C4.86239 7.65772 6.01956 5.9423 7.47846 4.50348C10.4249 1.62452 14.3809 0.0126953 18.5004 0.0126953C22.6199 0.0126953 26.5759 1.62452 29.5224 4.50348C30.9813 5.9423 32.1384 7.65772 32.9261 9.54931C33.7139 11.4409 34.1163 13.4706 34.1098 15.5197C34.125 17.636 33.7179 19.7341 32.9124 21.6912C32.1068 23.6483 30.9189 25.425 29.4183 26.9174L19.9139 36.4044C19.7293 36.592 19.5093 36.7413 19.2667 36.8435C19.0241 36.9457 18.7637 36.9988 18.5004 36.9999ZM18.5004 1.73426C14.8325 1.72581 11.3092 3.16441 8.69541 5.73778C7.40052 7.01621 6.37361 8.54007 5.67476 10.2202C4.97592 11.9003 4.61918 13.7029 4.62541 15.5225C4.61153 17.4101 4.97432 19.2815 5.69253 21.0271C6.41073 22.7728 7.46994 24.3576 8.80815 25.6889L18.3096 35.1759C18.3342 35.2013 18.3636 35.2216 18.3961 35.2354C18.4286 35.2492 18.4636 35.2563 18.499 35.2563C18.5343 35.2563 18.5693 35.2492 18.6018 35.2354C18.6344 35.2216 18.6638 35.2013 18.6883 35.1759L28.1927 25.6889C29.5309 24.3576 30.5901 22.7728 31.3083 21.0271C32.0265 19.2815 32.3893 17.4101 32.3754 15.5225C32.3816 13.7029 32.0249 11.9003 31.3261 10.2202C30.6272 8.54007 29.6003 7.01621 28.3054 5.73778C25.6916 3.16441 22.1684 1.72581 18.5004 1.73426Z" fill="black" />
                <path id="Vector_2" d="M18.5002 23.5325C16.6784 23.5316 14.9131 22.8993 13.5051 21.7431C12.0971 20.5869 11.1334 18.9783 10.7782 17.1914C10.4229 15.4045 10.6981 13.5497 11.5568 11.9428C12.4155 10.336 13.8047 9.07655 15.4877 8.37892C17.1707 7.68129 19.0436 7.58865 20.7872 8.11676C22.5309 8.64488 24.0376 9.7611 25.0507 11.2753C26.0638 12.7896 26.5207 14.6082 26.3435 16.4214C26.1664 18.2347 25.3662 19.9305 24.0792 21.22C23.3473 21.9537 22.4777 22.5357 21.5203 22.9326C20.5629 23.3294 19.5366 23.5333 18.5002 23.5325ZM18.5002 9.51583C17.0788 9.51809 15.702 10.0131 14.6045 10.9164C13.507 11.8198 12.7566 13.0757 12.4811 14.4702C12.2056 15.8648 12.422 17.3117 13.0936 18.5646C13.7651 19.8174 14.8502 20.7987 16.1641 21.3414C17.4779 21.884 18.9392 21.9544 20.2991 21.5406C21.6591 21.1267 22.8335 20.2543 23.6223 19.0717C24.4112 17.8892 24.7657 16.4698 24.6255 15.0553C24.4854 13.6407 23.8591 12.3185 22.8535 11.3138C22.2819 10.7424 21.6031 10.2895 20.8561 9.98099C20.109 9.67246 19.3085 9.51439 18.5002 9.51583Z" fill="black" />
              </g>
            </svg>
            <h5>
              Проспект Незалежності, 2, <br />Харків, Харківська область
            </h5>
          </a>
        </div>
        <div className="box_phone">
          <div className="box_phone_top">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Vector" d="M10.9104 4.05809C11.6586 4.20378 12.3462 4.56898 12.8852 5.10696C13.4242 5.64494 13.7901 6.33121 13.9361 7.07795L10.9104 4.05809ZM10.9104 1C12.4648 1.17235 13.9143 1.8671 15.0209 2.97018C16.1275 4.07326 16.8254 5.5191 17 7.0703L10.9104 1ZM16.234 13.1712V15.4648C16.2349 15.6777 16.1912 15.8884 16.1057 16.0835C16.0203 16.2786 15.8949 16.4537 15.7377 16.5977C15.5805 16.7416 15.3949 16.8512 15.1928 16.9194C14.9908 16.9876 14.7766 17.013 14.5642 16.9938C12.2071 16.7382 9.94297 15.9343 7.95371 14.6467C6.10295 13.4729 4.53384 11.9068 3.35779 10.0596C2.06326 8.0651 1.25765 5.79431 1.00622 3.43118C0.987076 3.21976 1.01225 3.00669 1.08014 2.80551C1.14802 2.60434 1.25713 2.41948 1.40052 2.2627C1.54391 2.10592 1.71843 1.98066 1.91298 1.89489C2.10753 1.80912 2.31785 1.76472 2.53053 1.76452H4.82849C5.20022 1.76087 5.56061 1.89226 5.84247 2.13419C6.12433 2.37613 6.30843 2.71211 6.36046 3.0795C6.45745 3.81349 6.63732 4.53418 6.89665 5.22781C6.99971 5.50145 7.02201 5.79884 6.96092 6.08474C6.89983 6.37065 6.7579 6.63308 6.55195 6.84095L5.57915 7.81189C6.66958 9.7259 8.25739 11.3107 10.1751 12.399L11.1479 11.4281C11.3561 11.2225 11.6191 11.0809 11.9055 11.0199C12.192 10.9589 12.4899 10.9812 12.7641 11.084C13.4591 11.3429 14.1811 11.5224 14.9165 11.6192C15.2886 11.6716 15.6284 11.8587 15.8713 12.1448C16.1143 12.431 16.2433 12.7962 16.234 13.1712Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <a target="blank" href="tel:380686492018">
              +38(068)-64-92-018
            </a>
          </div>
          <div className="box_phone_bottom">
            <p>08:00 - 22:00, без вихідних</p>
          </div>
        </div>
        <div className="social_link">
          <a target="blank" href="https://www.instagram.com/kiselov_vladislav/?next=%2F">
            <svg width="30" height="30" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="svg 1161953_instagram_icon 1">
                <path id="Vector" d="M8.95216 5.30151C6.72994 5.30151 4.88867 7.11104 4.88867 9.36501C4.88867 11.619 6.6982 13.4285 8.95216 13.4285C11.2061 13.4285 13.0157 11.5872 13.0157 9.36501C13.0157 7.14278 11.1744 5.30151 8.95216 5.30151ZM8.95216 11.9682C7.52359 11.9682 6.34899 10.7936 6.34899 9.36501C6.34899 7.93643 7.52359 6.76183 8.95216 6.76183C10.3807 6.76183 11.5553 7.93643 11.5553 9.36501C11.5553 10.7936 10.3807 11.9682 8.95216 11.9682Z" fill="rgb(28, 20, 15)" />
                <path id="Vector_2" d="M13.1745 6.12691C13.683 6.12691 14.0952 5.71473 14.0952 5.20628C14.0952 4.69783 13.683 4.28564 13.1745 4.28564C12.6661 4.28564 12.2539 4.69783 12.2539 5.20628C12.2539 5.71473 12.6661 6.12691 13.1745 6.12691Z" fill="rgb(28, 20, 15)" />
                <path id="Vector_3" d="M15.5553 2.82551C14.7299 1.96837 13.5553 1.52393 12.222 1.52393H5.68228C2.92037 1.52393 1.0791 3.3652 1.0791 6.1271V12.635C1.0791 14.0001 1.52355 15.1747 2.41243 16.0319C3.26958 16.8573 4.41243 17.27 5.71402 17.27H12.1902C13.5553 17.27 14.6981 16.8255 15.5235 16.0319C16.3807 15.2065 16.8251 14.0319 16.8251 12.6668V6.1271C16.8251 4.79377 16.3807 3.65091 15.5553 2.82551ZM15.4283 12.6668C15.4283 13.6509 15.0791 14.4446 14.5077 14.9842C13.9362 15.5239 13.1426 15.8096 12.1902 15.8096H5.71402C4.76164 15.8096 3.96799 15.5239 3.39656 14.9842C2.82513 14.4128 2.53942 13.6192 2.53942 12.635V6.1271C2.53942 5.17472 2.82513 4.38107 3.39656 3.80964C3.93624 3.26996 4.76164 2.98424 5.71402 2.98424H12.2537C13.2061 2.98424 13.9997 3.26996 14.5712 3.84139C15.1108 4.41281 15.4283 5.20647 15.4283 6.1271V12.6668Z" fill="rgb(28, 20, 15)" />
              </g>
            </svg>
          </a>
          <a target="blank" href="https://t.me/VlaDkAaakis">
            <svg width="30" height="30" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="svg 8547122_telegram_plane_icon 1">
                <path id="Vector" d="M17.9481 3.85159L15.232 16.3047C15.0271 17.1836 14.4927 17.4024 13.7334 16.9883L9.59496 14.0235L7.59809 15.8906C7.37711 16.1055 7.19228 16.2852 6.76639 16.2852L7.06371 12.1875L14.7338 5.44924C15.0673 5.16018 14.6615 5.00002 14.2155 5.28909L4.73336 11.0938L0.651213 9.85159C-0.236733 9.58205 -0.252805 8.9883 0.836035 8.57424L16.803 2.59377C17.5423 2.32424 18.1892 2.75393 17.9481 3.85159Z" fill="rgb(28, 20, 15)" />
              </g>
            </svg>
          </a>
          <a target="blank" href="https://www.youtube.com/?app=desktop&hl=ru&gl=UA">
            <svg width="30" height="30" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="svg 317714_video_youtube_icon (1) 1">
                <path id="Vector" d="M17.8144 5.16319C17.8144 5.16319 17.6389 3.83963 17.0994 3.25688C16.4149 2.493 15.6482 2.4885 15.2966 2.44519C12.7783 2.25 9.00113 2.25 9.00113 2.25H8.99269C8.99269 2.25 5.2155 2.25 2.69775 2.44519C2.34619 2.4885 1.58006 2.493 0.894937 3.25688C0.356062 3.83963 0.18 5.16319 0.18 5.16319C0.18 5.16319 0 6.71625 0 8.26931V9.72506C0 11.2793 0.18 12.8317 0.18 12.8317C0.18 12.8317 0.3555 14.1547 0.894937 14.7364C1.58006 15.5002 2.47837 15.4772 2.87888 15.5571C4.31831 15.7044 8.99719 15.75 8.99719 15.75C8.99719 15.75 12.7783 15.7432 15.2966 15.5503C15.6482 15.5053 16.4149 15.5008 17.0994 14.7369C17.6383 14.1553 17.8144 12.8323 17.8144 12.8323C17.8144 12.8323 17.9944 11.2793 17.9944 9.72563V8.26987C17.9944 6.71625 17.8144 5.16319 17.8144 5.16319Z" fill="rgb(28, 20, 15)" />
                <path id="Vector_2" d="M6.75 5.625V12.375L12.375 9L6.75 5.625Z" fill="white" />
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div className={`header_bottom container ${statusHeaderBottom && "header_bottom_active"}`}>
        <nav>
          <ul>
            <li>
              <Link to="calculator" spy={true} smooth={true} offset={-70} duration={700}>
                КАЛЬКУЛЯТОР
              </Link>
            </li>
            <li>
              <Link to="our_works" spy={true} smooth={true} offset={-70} duration={700}>
                РОБОТИ
              </Link>
            </li>
            <li>
              <Link to="comment" spy={true} smooth={true} offset={-70} duration={700}>
                ВІДГУКИ
              </Link>
            </li>
            <li>
              <h6 onClick={activeModal}>
                ЗАМІР
              </h6>
            </li>
            <li>
              <Link to="about_us" spy={true} smooth={true} offset={-70} duration={700}>
                про нас
              </Link>
            </li>
            <li>
              <Link to="price" spy={true} smooth={true} offset={-70} duration={700}>
                ЦІНА
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>;
}
