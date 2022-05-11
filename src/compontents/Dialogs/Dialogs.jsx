import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <>
      <div className={s.container}>
        <div className={s.dialogsItems}>
          <div className={s.dialog + ' ' + s.active}>John</div>
          <div className={s.dialog}>Anny</div>
          <div className={s.dialog}>Stieven</div>
          <div className={s.dialog}>Tony</div>
          <div className={s.dialog}>Larry</div>
        </div>
        <div className={s.messagesItems}>
          <div className={s.messages}>Do esse exercitation aliqua ea ullamco est anim do nostrud magna tempor.</div>
          <div className={s.messages}>Nulla ea eiusmod magna anim ex commodo ullamco duis nulla anim cupidatat do eiusmod ut.</div>
          <div className={s.messages}>Ea ea nisi voluptate deserunt Lorem proident.</div>
          <div className={s.messages}>Lorem fugiat exercitation in magna et laboris cillum amet enim excepteur irure ullamco.</div>
          <div className={s.messages}>Labore Lorem et veniam est.</div>
        </div>
      </div>
    </>
  );
};

export default Dialogs;