import React from "react";
import css from "./style.module.css";

export const NameInput = ({ onChangeHandler, name, error, isSubmited }) => {
  return (
    <div className={css.container}>
      <label htmlFor="name">Имя:</label>
      <input
        className={`${css.input} ${
          isSubmited && !error ? css.validate : error ? css.notvalidate : ""
        }`}
        type="text"
        id="name"
        value={name}
        placeholder="Введите имя"
        onChange={onChangeHandler}
      />
      <div className={css.error}>{error}</div>
    </div>
  );
};
