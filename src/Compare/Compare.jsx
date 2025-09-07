import styles from "./CompareStyles.module.css"

function Compare() {
  return (
    <>
        <section className={styles.container}>
            <div className={styles.headerContainer}>
                <div className={styles.leftSide}>
                    <select>
                      <option>ქართული</option>
                      <option>ინგლისური</option>
                    </select>
                    <input type="checkbox" /><span>ფორმატის შენარჩუნება</span>
                </div>
                <div className={styles.rightSide}>
                  <button className={styles.addButton}> ⊕ ახლის გახსნა</button>
                </div>
            </div>

            <div className={styles.textContainer}>
              <textarea placeholder="დაიწყე წერა..." className={styles.textInput}></textarea>
                <p>&hArr;</p>
              <textarea placeholder="დაიწყე წერა..." className={styles.textInput}></textarea>
            </div>
        </section>
    </>
  )
}

export default Compare