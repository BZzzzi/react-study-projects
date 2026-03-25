import ReviewListItem from "./ReviewListItem";
import styles from "./ReviewList.module.css";
import Button from "../common/Button";
import useTranslate from "../../hooks/useTranslate";

function ReviewList({
  items,
  onDelete,
  onUpdate,
  onLoadMore,
  hasNext,
  isLoading,
  isError,
}) {
  const t = useTranslate();

  return (
    <div className={styles.mainBox}>
      <ul>
        {items.map((item) => (
          <li key={item.id} className={styles.listBox}>
            <ReviewListItem
              item={item}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          </li>
        ))}
      </ul>
      {hasNext && (
        <Button
          variant="second"
          className={styles.moreShow}
          disabled={isLoading}
          onClick={() => onLoadMore()}
        >
          {t("load more")}
        </Button>
      )}
      {isError && (
        <p className={styles.error}>불러오기 중 오류가 발생했습니다.</p>
      )}
    </div>
  );
}

export default ReviewList;
