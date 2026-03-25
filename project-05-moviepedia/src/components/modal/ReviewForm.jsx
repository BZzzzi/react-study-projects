import { useActionState, useEffect, useRef } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Select from "../common/Select";
import Textarea from "../common/Textarea";
import styles from "./ReviewForm.module.css";
import useTranslate from "../../hooks/useTranslate";
import FileInput from "../common/FileInput";

function ReviewForm({
  review = {
    title: "",
    imgUrl: "",
    rating: 1,
    content: "",
  },
  onSubmit,
}) {
  const t = useTranslate();
  const inputRef = useRef(null);

  const [state, formAction, isPending] = useActionState(
    async (prevState, data) => {
      try {
        await onSubmit(data);
        return { error: null };
      } catch (error) {
        return { error };
      }
    },
    { error: null }
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <form action={formAction} className={styles.modalForm}>
        <FileInput name="imgFile" initialPreview={review.imgUrl} />
        <div className={styles.formLayout}>
          <div className={styles.formContent}>
            <Input
              name="title"
              defaultValue={review.title}
              placeholder={t("review title placeholder")}
              ref={inputRef}
              className={styles.input}
            />
            <Select
              defaultValue={review.rating}
              name="rating"
              className={styles.select}
            >
              <option value={1}>⭐️</option>
              <option value={2}>⭐️⭐️</option>
              <option value={3}>⭐️⭐️⭐️</option>
              <option value={4}>⭐️⭐️⭐️⭐️</option>
              <option value={5}>⭐️⭐️⭐️⭐️⭐️</option>
            </Select>
          </div>
          <Textarea
            name="content"
            defaultValue={review.content}
            placeholder={t("review content placeholder")}
            className={styles.textarea}
          />
          <div className={styles.footer}>
            {state.error && <p>요청 중 오류가 발생했습니다.</p>}
            <Button disabled={isPending}>{t("submit button")}</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
