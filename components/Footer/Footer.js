import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

const navigation = [
  {
    id: 1,
    title: "Home",
    path: "/",
    secondPath: "",
    anchor: false,
    iconPath: "",
  },
  {
    id: 2,
    title: "Works",
    path: "/works",
    secondPath: "",
    anchor: false,
    iconPath: "",
  },
  {
    id: 3,
    title: "CV",
    path: "/cv",
    secondPath: "",
    anchor: false,
    iconPath: "",
  },
  {
    id: 4,
    title: "",
    path: "#",
    secondPath: "",
    anchor: false,
    iconPath: "/assets/IconGithubDark.svg",
  },
  {
    id: 5,
    title: "",
    path: "#",
    secondPath: "",
    anchor: false,
    iconPath: "/assets/IconLinkedinDark.svg",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.head}>
          <div className={styles.logo} />
          <ul className={styles.linkList}>
            {navigation.map((link) => (
              <li key={link.id}>
                <Link href={link.path + link.secondPath}>
                  <a>
                    {link.title ? link.title : ""}
                    {link.iconPath ? (
                      <Image
                        src={link.iconPath}
                        alt="Image description"
                        width="16"
                        height="16"
                      />
                    ) : (
                      ""
                    )}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <span className={styles.line} />
      <div className="container">
        <div className={styles.body}>
          <div className={styles.copyright}>
            Copyright © 2022 Solodovnykov. All rights reserved.
          </div>
          <div className={styles.createdBy}>
            Created by{" "}
            <a href="#" className={styles.authorLink}>
              solodovnykov
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
