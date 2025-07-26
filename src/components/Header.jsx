import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.left}>
          <Link to="/" className={styles.logo}>
            <p>Marmik Soni.</p>
          </Link>
        </div>

        <div className={styles.center}>
          <ul className={styles.headerUl}>
            <li>
              <Link to="#Home">Home</Link>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <Link to="/Practice">Practices</Link>
            </li>
            <li>
              <a href="/Marmik-Soni.pdf" download>
                Resume
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          <button className={styles.modeButton}>
            {/* SVG here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </button>
          <button className={styles.contactButton}>Connect with me</button>
        </div>
      </header>
    </>
  );
};

export default Header;
