import React from "react";
import css from "./style.module.css";

export const MessageInput = ({
  onChangeHandler,
  message,
  error,
  isSubmited,
}) => {
  return (
    <div className={css.container}>
      <label htmlFor="message">Сообщение:</label>
      <textarea
        className={`${css.input} ${
          isSubmited && !error ? css.validate : error ? css.notvalidate : ""
        }`}
        id="message"
        placeholder="Введите текст"
        value={message}
        onChange={onChangeHandler}
      ></textarea>
      <div className={css.error}>{error}</div>
    </div>
  );
};
