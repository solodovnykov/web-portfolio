import LangSwitch from "../LangSwitch/LangSwitch";
import styles from "./Navbar.module.scss";
import { useIntl } from "react-intl";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const navigation = [
  {
    id: 1,
    title: "Home",
    path: "/",
    secondPath: "",
    anchor: false,
    type: "default",
    iconPath: "/assets/icons/IconHome.svg",
    svg: ``,
  },
  {
    id: 2,
    title: "Works",
    path: "/works",
    secondPath: "",
    anchor: false,
    type: "default",
    iconPath: "/assets/icons/IconWorks.svg",
    svg: ``,
  },
  {
    id: 3,
    title: "CV",
    path: "/cv",
    secondPath: "",
    anchor: false,
    type: "default",
    iconPath: "/assets/icons/IconCV.svg",
    svg: ``,
  },
  {
    id: 4,
    title: "",
    path: "#",
    secondPath: "",
    anchor: false,
    type: "icon",
    iconPath: "/assets/IconGithubLight.svg",
    svg: ``,
  },
  {
    id: 5,
    title: "",
    path: "#",
    secondPath: "",
    anchor: false,
    type: "icon",
    iconPath: "/assets/IconLinkedinLight.svg",
    svg: ``,
  },
];

const Navbar = () => {
  const router = useRouter();
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
                    <a
                      className={
                        router.pathname === link.path ? styles.activeLink : ""
                      }>
                      {link.title ? link.title : ""}
                      {link.iconPath ? (
                        <span
                          className={
                            link.type === "default" ? styles.iconWrapper : ""
                          }>
                          <Image
                            src={link.iconPath}
                            alt="Image description"
                            width="16"
                            height="16"
                          />
                        </span>
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
