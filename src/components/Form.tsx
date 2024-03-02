import React from "react";
import { FC } from "react";

const Form: FC<{ handleSubmit: (event: React.FormEvent) => void }> = ({ handleSubmit }) => {

  return (
    <form className="crud__form" onSubmit={handleSubmit}>
      <label className="crud__form_label" htmlFor="content">New note</label>
      <div className="crud__wrapper_input">
        <textarea id="content" name="content" className="crud__form_input" required />
        <button className="crud__form_btn btn"></button>
      </div>
    </form>
  );
}

export default Form;