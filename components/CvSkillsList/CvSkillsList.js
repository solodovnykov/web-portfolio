import styles from "./CvSkillsList.module.scss";

const CvSkillsList = ({ list, title }) => {
  return (
    <div className={styles.skillsBlock}>
      <h4 className={styles.skillsTitle}>{title}</h4>
      <ul className={styles.skillsList}>
        {list.map((skill) => (
          <li key={skill.id} className={styles.skillsItem}>
            {skill.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CvSkillsList;
