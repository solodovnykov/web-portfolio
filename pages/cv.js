import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Cv.module.scss";

const links = [
  {
    id: 1,
    text: "",
    iconPath: "/assets/icons/IconGithub.svg",
    alt: "Github Icon",
    href: "https://github.com/",
  },
  {
    id: 2,
    text: "",
    iconPath: "/assets/icons/IconLinkedin.svg",
    alt: "Linked Icon",
    href: "https://github.com/",
  },
  {
    id: 3,
    text: "solodovnikov.toni@gmail.com",
    iconPath: "/assets/icons/IconMail.svg",
    alt: "Mail Icon",
    href: "",
  },
  {
    id: 4,
    text: "Lviv, Ukraine",
    iconPath: "/assets/icons/IconLocation.svg",
    alt: "Location Icon",
    href: "https://github.com/",
  },
];

const Cv = () => {
  return (
    <div className="container-min">
      <div className={styles.cv}>
        <div className={styles.head}>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/images/ImageProfile.png"
              alt="Profile Image"
              width={130}
              height={130}
              className={styles.image}
            />
          </div>
          <div className={styles.infoBlock}>
            <h1 className={styles.fullname}>Anton Solodovnykov</h1>
            <h2 className={styles.profession}>
              Web developer & UX/UI designer
            </h2>
            <ul className={styles.linkList}>
              {links.map((link) => (
                <li key={link.id} className={styles.linkItem}>
                  <Link href={link.href}>
                    <a
                      style={{
                        pointerEvents: link.href === "" ? "none" : "",
                      }}
                      target="_blank"
                      rel="noreferrer">
                      <Image
                        src={link.iconPath}
                        alt={link.alt}
                        width={12}
                        height={12}
                      />
                      <p>{link.text}</p>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
