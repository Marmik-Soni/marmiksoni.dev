import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import ProfilePic from "/images/marmik_soni.png";

const Home = () => {
  return (
    <>
      <Header />
      <div id="Home" className={styles.homeContainer}>
        <a href="https://github.com/Marmik-Soni/" target="_blank">
          <img
            src={ProfilePic}
            alt="Marmik Soni"
            className={styles.profileImage}
          />
        </a>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.mainTitle}>
          <h1>
            <span className={styles.gradientText}>Hi, I'm Marmik Soni.</span>
          </h1>
          <h4>I am a Frontend Developer</h4>
        </div>
        <div className={styles.description}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
            nobis officiis cupiditate. Esse ex, nihil exercitationem modi eos
            dolore.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
