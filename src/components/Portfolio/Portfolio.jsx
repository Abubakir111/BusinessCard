import styles from "./Portfolio.module.css";

export const Portfolio = ({ projects, theme = "dark" }) => {
  const projectClass =
    theme === "light" ? styles.projectLight : styles.projectDark;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Portfolio</h2>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <span key={index} className={`${styles.project} ${projectClass}`}>
              {project.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
