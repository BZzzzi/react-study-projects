import { useCallback, useEffect, useState } from "react";
import ReviewList from "./components/review-list/ReviewList";
import Modal from "./components/modal/Modal";
import ReviewForm from "./components/modal/ReviewForm";
import Layout from "./components/Layout";
import Button from "./components/common/Button";
import styles from "./App.module.css";
import useTranslate from "./hooks/useTranslate.js";
import axios from "./utils/axios.js";

const LIMIT = 10;

function App() {
  const t = useTranslate();
  const [order, setOrder] = useState("createdAt");
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLoad = useCallback(async (orderParam) => {
    const res = await axios.get("/film-reviews", {
      params: {
        order: orderParam,
        // offset은 없으면 0
        limit: LIMIT,
      },
    });
    const { reviews, paging } = res.data;
    setItems(reviews);
    setHasNext(paging.hasNext);
  }, []);

  const handleLoadMore = async () => {
    let data = null;
    setIsLoading(true);
    setError(null);
    try {
      const res = await axios.get("/film-reviews", {
        params: {
          order,
          offset: items.length,
          limit: LIMIT,
        },
      });
      data = res.data;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
    if (!data) return;
    const { reviews, paging } = data;
    setItems((prevItems) => [...prevItems, ...reviews]);
    setHasNext(paging.hasNext);
  };

  const handleCreate = async (data) => {
    const res = await axios.post("/film-reviews", data);
    const { review } = res.data;
    setItems((prevItems) => [review, ...prevItems]);
    setIsOpen(false);
  };

  const handleUpdate = async (id, data) => {
    const res = await axios.patch(`/film-reviews/${id}`, data);
    const { review } = res.data;
    setItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === id);
      return [
        ...prevItems.slice(0, index),
        review,
        ...prevItems.slice(index + 1),
      ];
    });
  };

  const handleDelete = async (id) => {
    await axios.delete(`/film-reviews/${id}`);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    handleLoad(order);
  }, [order, handleLoad]);

  return (
    <>
      <Layout>
        {/* 메인 header */}
        <header className={styles.header}>
          <div className={styles.orderButton}>
            <Button
              variant={order === "createdAt" ? "primary" : "second"}
              onClick={() => setOrder("createdAt")}
            >
              {t("sort by latest")}
            </Button>
            <Button
              variant={order === "rating" ? "primary" : "second"}
              onClick={() => setOrder("rating")}
            >
              {t("sort by best")}
            </Button>
          </div>
          <Button onClick={() => setIsOpen(true)}>{t("create button")}</Button>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <h1>{t("create review title")}</h1>
            <ReviewForm onSubmit={handleCreate} />
          </Modal>
        </header>

        {/* 메인 List */}
        <ReviewList
          items={items}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          onLoadMore={handleLoadMore}
          hasNext={hasNext}
          isLoading={isLoading}
          isError={error}
        />
      </Layout>
    </>
  );
}

export default App;
