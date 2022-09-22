import LangSwitch from "../LangSwitch/LangSwitch";
import styles from "./Navbar.module.scss";
import { useIntl } from "react-intl";
import Link from "next/link";
import Image from "next/image";

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
    iconPath: "/assets/IconGithubLight.svg",
  },
  {
    id: 5,
    title: "",
    path: "#",
    secondPath: "",
    anchor: false,
    iconPath: "/assets/IconLinkedinLight.svg",
  },
];

const Navbar = () => {
  const { formatMessage: f } = useIntl();
  return (
    <div className={styles.navbarWrapper}>
      <div className="container">
        <nav className={styles.navbar}>
          <div className={styles.logo} />

          <div className={styles.navbarRightPart}>
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

            {/* <div className={styles.lang}>Lang</div> */}
            <LangSwitch />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
