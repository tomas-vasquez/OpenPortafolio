import React, { useState } from "react";
import Circle from "./Circle";
import BoxWelcome from "./BoxWelcome";
import Chat from "./Chat";
import Form from "./Form";
import { Fade } from "reactstrap";

export default function Index() {
  const [open, setOpen] = useState(false);
  const [chat, setchat] = useState(false);

  const [fade, setfade] = useState(false);
  const [close, setclose] = useState(false);

  window.addEventListener("scroll", (e) => {
    const scrollY = e.currentTarget.scrollY;
    const main = document.getElementsByTagName("main")[0];
    // console.log();
    const mainHeight = main.scrollHeight;

    if (scrollY && mainHeight && scrollY < mainHeight && scrollY > 100) {
      setfade(true);
    } else {
      setfade(false);
    }
  });

  return (
    <Fade
      className={`${close ? "d-none" : "d-block"}`}
      in={fade}
      onExited={() => {
        setclose(true);
      }}
      onEnter={() => {
        setclose(false);
      }}
    >
      <div className="App">
        <Circle
          onClick={() => {
            setOpen(true);
          }}
        />

        <div className={`chat-box ${open ? "d-block" : "d-none"}`}>
          <div className="chat-box-body">
            <BoxWelcome
              isOpen={open && !chat}
              onClick={() => {
                setOpen(false);
                setchat(false);
              }}
            />
            <Chat
              isOpen={open && chat}
              onClick={() => {
                setOpen(false);
                setchat(false);
              }}
            />
          </div>
          <Form
            onClick={() => {
              setchat(true);
            }}
          />
        </div>
      </div>
    </Fade>
  );
}
