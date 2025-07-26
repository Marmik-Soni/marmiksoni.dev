import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <section id="about" className={styles.aboutContiner}>
        {/* Top flexbox */}
        <h1>About me.</h1>

        {/* Middle flexbox */}
        <div className={styles.abtSectionContainer}>
          <img
            src="/images/marmik_soni.png"
            alt="Marmik Soni"
            className={styles.imageAbout}
          />
          <div className={styles.textAndSkills}>
            <div className={styles.detailContainer}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus pariatur fuga doloribus, aliquam obcaecati quia nulla
                dicta possimus et ullam distinctio officia? Ducimus, est velit!
                Incidunt maiores quasi reprehenderit enim tenetur unde magni.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur odio temporibus cumque sequi, sit aspernatur.
              </p>
            </div>
            <hr />
            <div className={styles.skillsContainer}>
              <div className={styles.skills}>
                <div className={styles.skill}>
                  <span>HTML & CSS</span>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: "80%" }} />
                  </div>
                </div>

                <div className={styles.skill}>
                  <span>JavaScript</span>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: "70%" }} />
                  </div>
                </div>

                <div className={styles.skill}>
                  <span>React JS</span>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: "50%" }} />
                  </div>
                </div>

                <div className={styles.skill}>
                  <span>Photoshop</span>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: "77%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botton flexbox */}
      </section>
    </>
  );
};

export default About;
