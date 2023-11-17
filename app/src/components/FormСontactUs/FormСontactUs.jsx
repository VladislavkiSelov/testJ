import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { Button } from "../Button/Button";
import "./FormСontactUs.scss";

export default function FormСontactUs({statusComment}) {
  const inputRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isInputValid, setInputValid] = useState(false);
    const { setValue, register, handleSubmit, reset, formState: { errors } } = useForm();
    const validateName = /^[А-Я][а-яё]*$/ 

  const onSubmit = data => {
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

  const handleAccept = () => {
    setInputValid(false);
    setPhoneNumber(inputRef.current.value);
    setValue("phone", inputRef.current.value);
  };

  const handleEmpty = () => {
    setInputValid(true);
  };

  return (
      <form className="FormСontactUs" onSubmit={handleSubmit(onSubmit)}>
       <label className='box_input'>
        Як вас звати?
        <input className={errors?.name && 'error'} {...register("name", { required: true, pattern: validateName  })} placeholder='Владислав' />
          </label>
          <label className="box_input">
              Ваш номер телефону
        <IMaskInput
          mask="+{38}(000)-00-00-000"
          radix="."
          unmask={false}
          inputRef={inputRef}
          value={phoneNumber}
          onAccept={handleAccept}
          onComplete={handleEmpty}
          className={errors?.comment && 'error'}
          {...register("phone", { required: true})}
          placeholder="+(38)(000)-00-00-000"
        />
      </label>
       {statusComment && <label className='box_input'>
        Ваш коментар
        <textarea  type="textarea" className={errors?.comment && 'error'} {...register("comment", { required: true})} placeholder='.....' />
          </label>}
          <Button buttonClass='btn_form' text='Отправить сообщение Владиславу'/>
    </form>
  );
}
