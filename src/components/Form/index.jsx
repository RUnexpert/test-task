import React, { useState } from "react";
import { MessageInput } from "./MessageInput";
import { NameInput } from "./NameInput";
import { PhoneInput } from "./PhoneInput";
import { isNotValid } from "../../utils";
import css from "./style.module.css";

export const Form = ({ isShow }) => {
  const [data, setData] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmited, setIsSubmited] = useState(false);

  const inputNameHandler = (event) => {
    setData({ ...data, name: event.target.value });
  };
  const inputPhoneHandler = (event) => {
    setData({ ...data, phone: event.target.value });
  };
  const inputMessageHandler = (event) => {
    setData({ ...data, message: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(validate(data));
    setIsSubmited(true);
    alert(JSON.stringify(data));
  };

  const validate = (data) => {
    const errors = {};

    if (!data.name) errors.name = "Имя должно быть заполнено";
    if (data.name && isNotValid(data.name))
      errors.name = "Поле не должно содержать спецсимволов";

    if (isNotValid(data.message))
      errors.message = "Поле не должно содержать спецсимволов";

    if (!data.phone) errors.phone = "Телефон должен быть заполнен";
    if (data.phone && !/\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}/.test(data.phone))
      errors.phone = "Телефон указан не верно";

    return errors;
  };

  return (
    <form
      action="http://localhost:3000/"
      method="post"
      onSubmit={submitHandler}
      className={`${css.form} ${isShow ? css.opened : ""}`}
    >
      <NameInput
        onChangeHandler={inputNameHandler}
        name={data.name}
        error={errors.name}
        isSubmited={isSubmited}
      />
      <PhoneInput
        onChangeHandler={inputPhoneHandler}
        phone={data.phone}
        error={errors.phone}
        isSubmited={isSubmited}
      />
      <MessageInput
        onChangeHandler={inputMessageHandler}
        message={data.message}
        error={errors.message}
        isSubmited={isSubmited}
      />
      <button type="submit" className={css.button}>
        Submit
      </button>
    </form>
  );
};
