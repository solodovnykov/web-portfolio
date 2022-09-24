import Image from "next/image";
import Link from "next/link";
import styles from "./TabBar.module.scss";

const navigation = [
  {
    id: 1,
    title: "Home",
    path: "/",
    secondPath: "",
    anchor: false,
    type: "default",
    iconPath: "/assets/icons/IconHome.svg",
  },
  {
    id: 2,
    title: "Works",
    path: "/works",
    secondPath: "",
    anchor: false,
    type: "default",
    iconPath: "/assets/icons/IconWorks.svg",
  },
  {
    id: 3,
    title: "CV",
    path: "/cv",
    secondPath: "",
    anchor: false,
    type: "default",
    iconPath: "/assets/icons/IconCV.svg",
  },
  {
    id: 4,
    title: "",
    path: "#",
    secondPath: "",
    anchor: false,
    type: "icon",
    iconPath: "/assets/IconGithubLight.svg",
  },
  {
    id: 5,
    title: "",
    path: "#",
    secondPath: "",
    anchor: false,
    type: "icon",
    iconPath: "/assets/IconLinkedinLight.svg",
  },
];

const TabBar = () => {
  return (
    <nav className={styles.tabBar}>
      <ul className={styles.linkList}>
        {navigation.map((link) => (
          <li
            className={link.type === "default" ? "" : styles.hideLink}
            key={link.id}>
            <Link href={link.path + link.secondPath}>
              <a>
                {link.iconPath ? (
                  <span>
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
                <p>{link.title ? link.title : ""}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TabBar;
