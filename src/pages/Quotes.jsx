import styles from "../styles/Quotes.module.css";
import { useState } from "react";
import quotesData from "../data/quotes.json";
import Header from "../components/Header";

function Quotes() {
  const [index, setIndex] = useState(0);
  const quotes = quotesData;

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % quotes.length);
  };

  const handlePrevious = () => {
    setIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <>
      <Header />
      <div className={styles.quotesContainer}>
        <div className={styles.quoteBox}>
          <h2>Quote #{quotes[index].id}</h2>
          <p>“{quotes[index].text}”</p>
          <p className={styles.author}>&mdash; {quotes[index].author}</p>
          <div className={styles.buttonContainer}>
            <button onClick={handlePrevious}>Previous</button>&nbsp;
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quotes;
