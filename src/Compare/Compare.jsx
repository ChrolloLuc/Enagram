import { useState } from "react";
import styles from "./CompareStyles.module.css";

function Compare() {
  const [oldText, setOldText] = useState("");
  const [newText, setNewText] = useState("");
  const [diff, setDiff] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleButtonClick = () => {
    setDiff(null);
    setLoading(true);
    setProgress(0);

    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          doComparison();
          setLoading(false);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  const doComparison = () => {
    const oldChars = oldText.split("");
    const newChars = newText.split("");
    const result = [];

    for (let i = 0; i < Math.max(oldChars.length, newChars.length); i++) {
      if (oldChars[i] === newChars[i]) {
        result.push(<span key={i}>{oldChars[i]}</span>);
      } else {
        if (oldChars[i] !== undefined) {
          result.push(
            <span key={`old-${i}`} style={{ color: "red" }}>
              {oldChars[i]}
            </span>
          );
        }
        if (newChars[i] !== undefined) {
          result.push(
            <span key={`new-${i}`} style={{ color: "green" }}>
              {newChars[i]}
            </span>
          );
        }
      }
    }
    setDiff(result);
  };

  return (
    <section className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.leftSide}>
          <select>
            <option>ქართული</option>
            <option>ინგლისური</option>
          </select>
          <input type="checkbox" />
          <span>ფორმატის შენარჩუნება</span>
        </div>
        <div className={styles.rightSide}>
          <button className={styles.addButton}>⊕ ახლის გახსნა</button>
        </div>
      </div>
      {loading ? (
        <div className={styles.loadingWrapper}>
          <div className={styles.progressCard}>
            <div className={styles.circle}></div>
            <div className={styles.progressInfo}>
              <p>Converting... Thank you for your patience</p>
              <div className={styles.progressRow}>
                <span className={styles.percent}>{progress}%</span>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.textContainer}>
            <textarea
              placeholder="დაიწყე წერა..."
              className={styles.textInput}
              value={oldText}
              onChange={(e) => setOldText(e.target.value)}
            />
            <p>&hArr;</p>
            <textarea
              placeholder="დაიწყე წერა..."
              className={styles.textInput}
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          </div>

          <div className={styles.compareButton}>
            <button
              onClick={handleButtonClick}
              disabled={oldText === "" || newText === ""}
              className={`${styles.compareBtn} ${
                oldText !== "" && newText !== ""
                  ? styles.active
                  : styles.inactive
              }`}
            >
              შედარება
            </button>
          </div>

          <div className={styles.result}>{diff}</div>
        </>
      )}
    </section>
  );
}

export default Compare;
