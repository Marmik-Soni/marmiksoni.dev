import styles from "../styles/Blogs.module.css";

const Blogs = () => {
  return (
    <>
      <div className={styles.blogsContainer}>
        <h1>Read my Blogs.</h1>
        <p className={styles.blogsDetail}>
          Insights, stories, lessons and few tricks from my journey.
        </p>

        {/* All listed blogs */}
        <div className={styles.blogBox}>
          <a
            className={styles.blogsCard}
            href="https://medium.com/@marmiksoni777/surveillance-in-the-digital-age-when-privacy-becomes-a-commodity-f97569ef8546"
            target="_blank"
          >
            <img
              src="https://miro.medium.com/v2/resize:fit:2000/format:webp/1*CotUFA1bNIgqv6OkrkNFZA.png"
              alt="Surveillance in the Digital Age"
            />
            <p>
              Surveillance in the Digital Age: When Privacy Becomes a Commodity
            </p>
          </a>

          <a
            className={styles.blogsCard}
            href="https://medium.com/@marmiksoni777/dan-saunders-the-atm-glitch-that-defied-financial-systems-853b6caa61be"
            target="_blank"
          >
            <img
              src="https://miro.medium.com/v2/resize:fit:786/format:webp/1*v5ywnyEyE72b3lCny1tQow.png"
              alt="Dan Saunders: The ATM Glitch"
            />
            <p>Dan Saunders: The ATM Glitch that Defied Financial Systems</p>
          </a>

          <a
            className={styles.blogsCard}
            href="https://medium.com/@marmiksoni777/the-morris-worm-when-the-internet-caught-cold-ab2a644e075e"
            target="_blank"
          >
            <img
              src="https://miro.medium.com/v2/resize:fit:786/format:webp/1*A_ggoZWUCHY_x8gKk4IYgw.jpeg"
              alt="The Morris Worm: When the internet Caught Cold"
            />
            <p>The Morris Worm: When the internet Caught Cold</p>
          </a>
        </div>

        <p className={styles.readMore}>
          <a href="https://medium.com/@marmiksoni777" target="_blank">
            Read More
          </a>
        </p>
      </div>
    </>
  );
};

export default Blogs;
