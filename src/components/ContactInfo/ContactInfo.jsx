import { FaEnvelope, FaGithub, FaPhone } from "react-icons/fa";
import styles from "./ContactInfo.module.css";

export const ContactInfo = ({
  email,
  phone,
  github,
  theme = "dark",
  userGithub,
}) => {
  const textColorClass = theme === "light" ? styles.light : styles.dark;

  return (
    <div className={styles.container}>
      <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
        <div className={`${styles.item} ${textColorClass}`}>
          <FaEnvelope />
          <span>{email}</span>
        </div>
      </a>
      <a href={`tel:${phone}`} target="_blank" rel="noopener noreferrer">
        <div className={`${styles.item} ${textColorClass}`}>
          <FaPhone />
          <span>{phone}</span>
        </div>
      </a>
      <a href={`${userGithub}`} target="_blank" rel="noopener noreferrer">
        <div className={`${styles.item} ${textColorClass}`}>
          <FaGithub />
          <span>{github}</span>
        </div>
      </a>

      <div className={`${styles.item} ${textColorClass}`}>name: Bakir</div>
      <div className={`${styles.item} ${textColorClass}`}>age: 32</div>
    </div>
  );
};
