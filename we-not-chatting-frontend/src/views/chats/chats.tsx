import { useState } from "react";
import { toast } from "react-toastify";
import ChattingItem from "../../components/chattingItem";
import PopupBox from "../../components/popupBox";
import style from "./chats.module.css";

export default function Chats() {
  const [showPopupBox, setShowPopupBox] = useState(false);

  return (
    <div className={style.chatsWrapper}>
      <div className={style.topbarWrapper}>
        <span className={style.topTitle}>WeNotChat</span>
        <img
          className={style.topImg}
          src="/assets/add.svg"
          width="20px"
          alt=""
          onClick={() => {
            setShowPopupBox(!showPopupBox);
          }}
        />
      </div>
      {showPopupBox ? <PopupBox /> : ""}
      <div className={style.chatItemWrapper}>
        <ChattingItem />
        <ChattingItem />
        <ChattingItem />
        <ChattingItem />
        <ChattingItem />
        <ChattingItem />
        <ChattingItem />
        <ChattingItem />
        <ChattingItem />
        <ChattingItem />
        <ChattingItem />
        <ChattingItem />
        <ChattingItem />
      </div>
    </div>
  );
}
