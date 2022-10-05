import Image from "next/image";
import Link from "next/link";
import CvBlockWrapper from "../components/CvBlockWrapper/CvBlockWrapper";
import CvSkillsList from "../components/CvSkillsList/CvSkillsList";
import styles from "../styles/Cv.module.scss";
import LastWorks from "../components/LastWorks/LastWorks";
import { motion } from "framer-motion";

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
    text: "Lviv, Ukraine",
    iconPath: "/assets/icons/IconLocation.svg",
    alt: "Location Icon",
    href: "https://github.com/",
  },
  {
    id: 4,
    text: "solodovnikov.toni@gmail.com",
    iconPath: "/assets/icons/IconMail.svg",
    alt: "Mail Icon",
    href: "",
  },
];

const skills = {
  technologies: [
    {
      id: 1,
      text: "HTML / CSS / SCSS",
    },
    {
      id: 2,
      text: "JavaScript",
    },
    {
      id: 3,
      text: "SPA / PWA",
    },
    {
      id: 4,
      text: "Rest API",
    },
  ],
  frameworks: [
    {
      id: 1,
      text: "React.js / Next.js",
    },
    {
      id: 2,
      text: "Redux",
    },
    {
      id: 3,
      text: "Node.js",
    },
    {
      id: 4,
      text: "Express.js",
    },
    {
      id: 5,
      text: "Axios",
    },
    {
      id: 6,
      text: "Multer",
    },
  ],
  tools: [
    {
      id: 1,
      text: "ESlint",
    },
    {
      id: 2,
      text: "Prettier",
    },
    {
      id: 3,
      text: "Git",
    },
  ],
  languages: [
    {
      id: 1,
      text: "English — Intermediate",
    },
    {
      id: 2,
      text: "Ukrainian — Native",
    },
    {
      id: 3,
      text: "Russian —  Native",
    },
  ],
};

const Cv = () => {
  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      initial="initial"
      animate="animate"
      className="container-min">
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

        <CvBlockWrapper title="About" gap={12}>
          <p className={styles.aboutText}>
            Hi there! My name is Anton and I’m a web developer & UX/UI designer.
            Hit me up and I’ll be happy to help with your ideas
          </p>
        </CvBlockWrapper>

        <CvBlockWrapper title="Education">
          <div className={styles.education}>
            <div className={styles.educationItem}>
              <div className={styles.educationHead}>
                <h4 className={styles.educationPlace}>University</h4>
                <div className={styles.educationPeriod}>2019 – Current</div>
              </div>
              <p className={styles.educationDescription}>
                Computer Science (Internet Of Things) Lviv Polytechnic National
                University
              </p>
            </div>

            <div className={styles.educationItem}>
              <div className={styles.educationHead}>
                <h4 className={styles.educationPlace}>High School</h4>
                <div className={styles.educationPeriod}>2016 – 2019</div>
              </div>
              <p className={styles.educationDescription}>
                Secondary School #24 – Ukraine, Dnipropetrovsk region, Nikopol
              </p>
            </div>
          </div>
        </CvBlockWrapper>

        <CvBlockWrapper title="Summary & Qualification">
          <div className={styles.skills}>
            <CvSkillsList
              list={skills.technologies}
              title="Programming Languages & Technologies"
            />
            <CvSkillsList
              list={skills.frameworks}
              title="Frameworks & Libraries"
            />
            <div className={styles.skillsBlockRevert}>
              <CvSkillsList list={skills.tools} title="Development tools" />
              <CvSkillsList list={skills.languages} title="Languages" />
            </div>
          </div>
        </CvBlockWrapper>

        <CvBlockWrapper title="Experience">
          <LastWorks></LastWorks>
        </CvBlockWrapper>
      </div>
    </motion.div>
  );
};

export default Cv;
