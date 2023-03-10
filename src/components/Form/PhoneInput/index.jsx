import React from "react";
import css from "./style.module.css";

export const PhoneInput = ({ onChangeHandler, phone, error, isSubmited }) => {
  return (
    <div className={css.container}>
      <label htmlFor="phone"> Телефон:</label>
      <input
        className={`${css.input} ${
          isSubmited && !error ? css.validate : error ? css.notvalidate : ""
        }`}
        type="text"
        id="phone"
        placeholder="Введите телефон"
        onChange={onChangeHandler}
        value={phone}
      />
      <div className={css.error}>{error}</div>
    </div>
  );
};
