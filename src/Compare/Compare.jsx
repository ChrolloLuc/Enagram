import { useState, useEffect, useRef } from "react"
import styles from "./CompareStyles.module.css"

function Compare() {
  const [oldText, setOldText] = useState("")
  const [newText, setNewText] = useState("")
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showHighlighting, setShowHighlighting] = useState(false)
  const oldTextRef = useRef(null)
  const newTextRef = useRef(null)

  const handleButtonClick = () => {
    setLoading(true)
    setProgress(0)
    setShowHighlighting(false)

    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setLoading(false)
          setShowHighlighting(true)
          return 100
        }
        return prev + 5
      })
    }, 200)
  }

  const generateHighlightedText = (text, isOld = true) => {
    if (!showHighlighting) return text

    const oldChars = oldText.split("")
    const newChars = newText.split("")
    const chars = text.split("")
    const result = []

    for (let i = 0; i < chars.length; i++) {
      if (isOld) {
        if (oldChars[i] !== newChars[i]) {
          result.push(
            `<span style="background-color: rgba(255, 0, 0, 0.3); color: red;">${
              chars[i] || ""
            }</span>`
          );
        } else {
          result.push(chars[i] || "")
        }
      } else {
        if (newChars[i] !== oldChars[i]) {
          result.push(
            `<span style="background-color: rgba(0, 255, 0, 0.3); color: green;">${
              chars[i] || ""
            }</span>`
          );
        } else {
          result.push(chars[i] || "")
        }
      }
    }
    return result.join("")
  }

  return (
    <section className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.leftSide}>
          <select className={styles.optionsContainer}>
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
            <div className={styles.textInputWrapper}>
              <textarea
                ref={oldTextRef}
                placeholder="დაიწყე წერა..."
                className={styles.textInput}
                value={oldText}
                onChange={(e) => {
                  setOldText(e.target.value)
                  setShowHighlighting(false)
                }}
                style={{
                  color: showHighlighting ? "transparent" : "inherit",
                  caretColor: "black",
                }}
              />
              {showHighlighting && (
                <div
                  className={styles.highlightOverlay}
                  dangerouslySetInnerHTML={{
                    __html: generateHighlightedText(oldText, true).replace(
                      /\n/g,
                      "<br>"
                    ),
                  }}
                />
              )}
            </div>

            <p>&hArr;</p>

            <div className={styles.textInputWrapper}>
              <textarea
                ref={newTextRef}
                placeholder="დაიწყე წერა..."
                className={styles.textInput}
                value={newText}
                onChange={(e) => {
                  setNewText(e.target.value)
                  setShowHighlighting(false)
                }}
                style={{
                  color: showHighlighting ? "transparent" : "inherit",
                  caretColor: "black",
                }}
              />
              {showHighlighting && (
                <div
                  className={styles.highlightOverlay}
                  dangerouslySetInnerHTML={{
                    __html: generateHighlightedText(newText, false).replace(
                      /\n/g,
                      "<br>"
                    ),
                  }}
                />
              )}
            </div>
          </div>

          <div className={styles.compareButton}>
            <button
              onClick={handleButtonClick}
              disabled={oldText === "" || newText === ""}
              className={`${styles.compareBtn} ${
                oldText !== "" && newText !== "" ? styles.active : styles.inactive
              }`}
            >
              შედარება
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Compare
