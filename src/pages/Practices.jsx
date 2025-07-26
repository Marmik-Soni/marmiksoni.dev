import { Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "../styles/Practice.module.css";

const Practices = () => {
  return (
    <>
      <div className={styles.practiceContainer}>
        <Header />
        <div className={styles.titleContainer}>
          <h1>This page shows the practices</h1>
          <p>That i've been performing in this dummy project</p>
        </div>

        <div className={styles.cardRow}>
          <div className={styles.rightCardContainer}>
            <Link to={"/Weather"} className={styles.card}>
              <h2>WeatherAPI</h2>
              <p>
                Enter the name of the city
                <br />
                to fetch the Weather info!
              </p>
            </Link>
          </div>

          <div className={styles.leftCardContainer}>
            <Link to={"/Quotes"} className={styles.card}>
              <h2>Quotes Page!</h2>
              <p>Read some of quotes I admire!</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Practices;
