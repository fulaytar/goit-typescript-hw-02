import css from "./LoadMoreBtn.module.css";
import { FC } from "react";

interface LoadMoreBtnProps {
  loadMore: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ loadMore }) => {
  return (
    <button className={css.btn} onClick={loadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
