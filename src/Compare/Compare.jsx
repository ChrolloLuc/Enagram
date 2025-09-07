import { useState } from "react"
import styles from "./CompareStyles.module.css"






function Compare() {

  const [oldText, setOldText] = useState("")
  const [newText, setNewText] = useState("")
  const [diff, setDiff] = useState(null)
  const result = []


  const handleButtonClick = () =>{
    const oldTextComapre = oldText.split(" ")
    const newTextComapre = newText.split(" ")
    // console.log(oldTextComapre)
    // console.log(newTextComapre)

    for (let i = 0; i<Math.max(oldTextComapre.length, newTextComapre.length); i++){
      if(oldTextComapre[i]===newTextComapre[i]){
        result.push(<span key={i}>{oldTextComapre[i]}</span>)
        console.log("everything is fine")
      } else if(oldTextComapre.length>newTextComapre.length){
        result.push(<span key={`old-${i}`} style={{color: "red"}}>{oldTextComapre[i]} </span>)
        console.log("it should be red")
      } else {
        result.push(<span key={`new-${i}`} style={{color: "green"}}>{newTextComapre[i]} </span>)
        console.log("it should be green")
      }
    }
    setDiff(result)
  }

  



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
              <textarea 
              placeholder="დაიწყე წერა..." 
              className={styles.textInput} 
              value={oldText} 
              onChange={(e)=>setOldText(e.target.value)}
              ></textarea>
                <p>&hArr;</p>
              <textarea 
              placeholder="დაიწყე წერა..." 
              className={styles.textInput} 
              value={newText}
              onChange={(e)=>setNewText(e.target.value)}
              ></textarea>
            </div>
            <div className={styles.compareButton}>
              <button onClick={handleButtonClick}>შედარება</button>
              {diff}
            </div>
              
        </section>
    </>
  )
}

export default Compare