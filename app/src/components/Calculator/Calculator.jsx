import React, { useEffect } from "react";
import { Button } from "../Button/Button";
import { Radio, Slider, ConfigProvider } from "antd";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { IMaskInput } from "react-imask";
import "./Calculator.scss";

export default function Calculator() {
  const inputRef = useRef(null);
  const [isInputValid, setInputValid] = useState(false);
  const [valueTypeRepair, setValueTypeRepair] = useState("Косметичний");
  const [valueBuilding, setValueBuilding] = useState("Новобудова");
  const [valueNumberRoom, setValueNumberRoom] = useState(1);
  const [valueSlider, setValueSlider] = useState(30);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [day, setDay] = useState(0);
  const [price, setPrice] = useState(0);
  const { setValue, handleSubmit, reset } = useForm({
    defaultValues: {
      typeRepair: valueTypeRepair,
      typeBuilding: valueBuilding,
      numberRoom: valueNumberRoom,
      square: valueSlider
    }
  });

  const handleAccept = () => {
    setInputValid(false);
    setPhoneNumber(inputRef.current.value);
    setValue("phone", inputRef.current.value);
  };

  const handleEmpty = () => {
    setInputValid(true);
  };

  const onSubmitForm = data => {
    if (isInputValid) {
      inputRef.current.classList.remove("error");
      console.log(data);
      setPhoneNumber("");
      inputRef.current.value = "";
    } else {
      inputRef.current.classList.add("error");
    }
    reset();
  };

  const typeRepairOnChange = e => {
    setValueTypeRepair(e.target.value);
    setValue("typeRepair", e.target.value);
  };

  const typeBuildingOnChange = e => {
    setValueBuilding(e.target.value);
    setValue("typeBuilding", e.target.value);
  };

  const numberRoomOnChange = e => {
    setValueNumberRoom(e.target.value);
    setValue("numberRoom", e.target.value);
  };

  const sliderSquare = value => {
    setValueSlider(value);
    setValue("square", value);
  };

  useEffect(
    () => {
      let repair;
      let repairValueDay;
      let building;
      let numberRoom;
      let roomValueDay;

      switch (valueTypeRepair) {
        case "Косметичний":
          repair = 300;
          repairValueDay = 30;
          break;
        case "Капітальний":
          repair = 400;
          repairValueDay = 40;
          break;
        case "Під ключ":
          repair = 500;
          repairValueDay = 50;
          break;
        case "Дизайнерський":
          repair = 600;
          repairValueDay = 60;
          break;
        default:
          repair = 0;
          repairValueDay = 0;
      }

      switch (valueBuilding) {
        case "Новобудова": {
          building = 400;
          break;
        }
        case "Вторинне житло": {
          building = 500;
          break;
        }
        default:
          building = 0;
      }

      switch (valueNumberRoom) {
        case 1: {
          numberRoom = 500;
          roomValueDay = 1;
          break;
        }
        case 2: {
          numberRoom = 600;
          roomValueDay = 1.5;
          break;
        }
        case 3: {
          numberRoom = 700;
          roomValueDay = 2;
          break;
        }
        case 4: {
          numberRoom = 800;
          roomValueDay = 2.5;
          break;
        }
        default:
          roomValueDay = 1;
          numberRoom = 0;
      }

      setPrice(repair + numberRoom + building + valueSlider * 30);
      setDay(repairValueDay * roomValueDay);
    },
    [valueTypeRepair, valueBuilding, valueNumberRoom, valueSlider, phoneNumber]
  );

  return (
    <form className="formCalculator" onSubmit={handleSubmit(onSubmitForm)}>
      <ConfigProvider
        theme={{
          components: {
            Slider: {
              handleColor: "#2d4872",
              handleActiveColor: "#2d4872",
              trackBg: "#2d4872",
              trackHoverBg: "#2d4872",
              dotActiveBorderColor: "#2d4872",
              colorPrimaryBorderHover: "#2d4872",
              dotBorderColor: "#2d4872",
              colorBgElevated: "#2d4872",
              handleSize: 13,
              handleSizeHover: 13,
              algorithm: true
            },
            Radio: {
              colorWhite: "#2d4872",
              colorPrimary: "#2d4872",
              colorTextLightSolid: "#fff",
              algorithm: true
            }
          }
        }}
      >
        <h2>Розрахуйте вартість ремонту</h2>
        <div className="typeRepair">
          <h2>Вид ремонту:</h2>
          <Radio.Group
            className="box_repair_radio"
            onChange={typeRepairOnChange}
            value={valueTypeRepair}
          >
            <Radio value={"Косметичний"}>Косметичний</Radio>
            <Radio value={"Капітальний"}>Капітальний</Radio>
            <Radio value={"Під ключ"}>Під ключ</Radio>
            <Radio value={"Дизайнерський"}>Дизайнерський</Radio>
          </Radio.Group>
        </div>
        <div className="typeBuilding">
          <h2>Тип вашої нерухомості:</h2>
          <Radio.Group onChange={typeBuildingOnChange} value={valueBuilding}>
            <Radio value={"Новобудова"}>Новобудова</Radio>
            <Radio value={"Вторинне житло"}>Вторинне житло</Radio>
          </Radio.Group>
        </div>
        <div className="numberRoom">
          <h2>Кількість кімнат:</h2>
          <Radio.Group onChange={numberRoomOnChange} value={valueNumberRoom}>
            <Radio value={1}>1</Radio>
            <Radio value={2}>2</Radio>
            <Radio value={3}>3</Radio>
            <Radio value={4}>4</Radio>
          </Radio.Group>
        </div>
        <div className="squareRoom">
          <h2>Площа, м2:</h2>
          <Slider
            defaultValue={30}
            onChange={value => sliderSquare(value)}
            tooltip={{ open: true }}
            value={valueSlider}
          />
        </div>
        <div className="sale_repaire">
          <div>
            <h3>Термін ремонту:</h3>
            <h4>
              до {day} днів
            </h4>
          </div>
          <div>
            <h3>Знижка складе:</h3>
            <h4>
              {price} грн
            </h4>
          </div>
        </div>
        <div className="call">
          <h2>Введіть номер телефону</h2>
          <div>
            <IMaskInput
              mask="+{38}(000)-00-00-000"
              radix="."
              unmask={false}
              inputRef={inputRef}
              value={phoneNumber}
              onAccept={handleAccept}
              onComplete={handleEmpty}
              placeholder="+(38)(000)-00-00-000"
            />
            <Button text="Замовити" buttonClass="order_btn" />
          </div>
        </div>
      </ConfigProvider>
    </form>
  );
}
