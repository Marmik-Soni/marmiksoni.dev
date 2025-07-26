import styles from "../styles/MyWork.module.css";
import proj1 from "/images/Proj1.png";
import proj2 from "/images/Proj2.png";

const MyWork = () => {
  return (
    <>
      <div className={styles.myWorkContainer}>
        <h1>My Works.</h1>
        <p className={styles.myWorkDetail}>
          A showcase of what I've built while learning, exploring, and creating
        </p>

        <div className={styles.projectsContainer}>
          {/* project 1 */}
          <div className={styles.projectOne}>
            <img src={proj1}alt="Proj1" />
            <div className={styles.projectOneDetails}>
              <h2>1. UniVeritas</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus qui optio cumque a ut autem? Adipisci delectus et
                expedita sint!
              </p>

              <div className={styles.projectOneButtons}>
                <button>GitHub repo</button>
                <button>Live Demo</button>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className={styles.projectTwo}>
            <div className={styles.projectOne}>
              <div className={styles.projectOneDetails}>
                <h2>2. Music Player</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus qui optio cumque a ut autem? Adipisci delectus et
                  expedita sint!
                </p>

                <div className={styles.projectOneButtons}>
                  <button>GitHub repo</button>
                  <button>Live Demo</button>
                </div>
              </div>
              <img src={proj2} alt="Proj1" />
            </div>
          </div>

          {/* Add more projects if needed. */}
          {/* Start from here */}
        </div>

        {/* Load More Button */}
        {/* <div className={styles.projectOneButtons}>
          <button>Load More  <span class="arrow">→</span> </button>
        </div> */}
      </div>
    </>
  );
};

export default MyWork;
