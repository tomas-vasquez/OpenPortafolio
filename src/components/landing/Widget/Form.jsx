import React from "react";
import Icons from "../../common/Icons";
import { wathsappWidged } from "../../../data/config";
import { useState } from "react";

export default function Form({ onClick }) {
  const [msg, setmsg] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const link = `https://wa.me/${wathsappWidged.codeArea}${wathsappWidged.phone}?text=${msg}`;
    window.open(link);
  };

  return (
    <div className="chat-input-box">
      <form className="chat-input__form" onSubmit={onSubmit}>
        <input
          type="text"
          value={msg}
          onChange={(e) => {
            setmsg(e.target.value);
          }}
          className="chat-input__text shadow border-1"
          id="chat-input__text"
          placeholder={wathsappWidged.inputPlaceholder}
          onClick={onClick}
        />
        <button type="submit" className="chat-submit" id="chat-submit">
          <Icons icon="send" />
        </button>
      </form>
      <p className="chat-box__sign">
        powered by <a href="https://tomas-dev.vercel.app/">tomas-dev</a>
      </p>
    </div>
  );
}
