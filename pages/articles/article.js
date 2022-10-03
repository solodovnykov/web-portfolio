import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Article.module.scss";

const article = (props) => {
  return (
    <div className="container-article">
      <div className={styles.article}>
        <div className={styles.head}>
          <Image
            alt="Article Image"
            src="/assets/Gradient.png"
            layout="fill"
            priority="true"
            className={styles.image}
          />
        </div>

        <div className={styles.body}>
          <div className={styles.info}>
            <div className={styles.date}>
              Опубліковано: 27/08/2022 (1 day ago)
            </div>
            <div className={styles.viewCounter}>
              <div className={styles.viewsNumber}>16</div>
              <Image
                alt="Views Icon"
                width={16}
                height={16}
                src="/assets/icons/ViewsIcon.svg"
              />
            </div>
          </div>
          <h1 className={styles.title}>Some Title</h1>
          <ul className={styles.tagList}>
            <li className={styles.tag}>
              <Link href="#">
                <a>
                  <span className={styles.hashtagColor}>#</span>tag
                </a>
              </Link>
            </li>
            <li className={styles.tag}>
              <Link href="#">
                <a>
                  <span className={styles.hashtagColor}>#</span>tag
                </a>
              </Link>
            </li>
            <li className={styles.tag}>
              <Link href="#">
                <a>
                  <span className={styles.hashtagColor}>#</span>tag
                </a>
              </Link>
            </li>
          </ul>

          <div className={styles.textBlock}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              scelerisque magna et turpis gravida auctor. In tempus luctus
              rutrum. Fusce libero massa, sollicitudin et tempus at, hendrerit
              in dui. Morbi faucibus mi nec nunc sollicitudin lobortis. Ut
              rhoncus, orci sed vulputate venenatis, ante ligula pellentesque
              erat, in ullamcorper risus nibh ut ex. Nulla facilisi. Nunc sit
              amet neque sed turpis mattis dignissim quis sed tellus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default article;
