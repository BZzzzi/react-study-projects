import { useState } from "react";
import Modal from "../modal/Modal";
import styles from "./ReviewListItem.module.css";
import Button from "../common/Button";
import ReviewForm from "../modal/ReviewForm";
import useTranslate from "../../hooks/useTranslate";
import placeholderImg from "../../asset/placeholder.webp";

function ReviewListItem({ item, onUpdate, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  const dateString = new Date(item.createdAt).toLocaleDateString();
  const t = useTranslate();

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        src={item.imgUrl ? item.imgUrl : placeholderImg}
        alt={item.title}
      />
      <div className={styles.item}>
        <h2>{item.title}</h2>
        <p>{"★".repeat(item.rating)}</p>
        <p>{dateString}</p>
        <p>{item.content}</p>
        <div className={styles.button}>
          <Button variant="ghost" onClick={() => setIsOpen(true)}>
            {t("edit button")}
          </Button>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <h1>{t("edit review title")}</h1>
            <ReviewForm
              review={item}
              onSubmit={(data) => {
                onUpdate(item.id, data);
                setIsOpen(false);
              }}
            />
          </Modal>
          <Button variant="danger" onClick={() => onDelete(item.id)}>
            {t("delete button")}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ReviewListItem;
