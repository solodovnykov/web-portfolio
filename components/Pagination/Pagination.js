import { usePagination, DOTS } from "../../hooks/usePagination";
import styles from "./Pagination.module.scss";
import Image from "next/image";

const Pagination = ({
  onPageChange,
  totalCount = 100,
  siblingCount = 0,
  currentPage = 1,
  pageSize = 6,
  className,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  console.log(paginationRange);

  return (
    <ul className={styles.pagination}>
      {/* Left navigation arrow */}
      <li
        className={`${styles.paginationItem} ${styles.arrowButton} ${
          currentPage === 1 ? styles.disabled : ""
        }`}
        onClick={onPrevious}>
        {/* <div className="arrow left" /> */}
        <Image
          src="/assets/icons/IconArrow.svg"
          alt="Left Arrow Icon"
          width={24}
          height={24}
          className={styles.arrowLeft}
        />
      </li>
      {paginationRange.map((pageNumber, index) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li
              key={index}
              className={`${styles.paginationItem} ${styles.dots} `}>
              &#8230;
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li
            key={index}
            className={`${styles.paginationItem} ${
              pageNumber === currentPage ? styles.selected : ""
            }`}
            onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={`${styles.paginationItem} ${styles.arrowButton} ${
          currentPage === lastPage ? styles.disabled : ""
        }`}
        onClick={onNext}>
        <Image
          src="/assets/icons/IconArrow.svg"
          alt="Left Arrow Icon"
          width={24}
          height={24}
          className={styles.arrowRight}
        />
      </li>
    </ul>
  );
};

export default Pagination;
