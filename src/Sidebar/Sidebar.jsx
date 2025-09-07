import styles from "./SidebarStyles.module.css"
import vector from './../assets/vector.png'
import check from './../assets/check.png'
import spelling from './../assets/spelling.png'
import mic from './../assets/mic.png'
import voice from './../assets/voice.png'
import group from './../assets/group.png'
import logo from './../assets/logo.png'
import dots from './../assets/dots.png'


function Sidebar() {
  return (

    <>
        <section className={styles.navbarContainer}>
            <div className={styles.container}>
                <div className={styles.vector}>
                    <img src={vector} alt="vector"></img>
                </div>
                <div className={styles.logo}>
                    <img src={logo} alt="logo"></img>
                </div>
                <div className={styles.listItems}>
                    <ul>
                        <li><img src={check} alt="check"></img>მართლმწერი</li>
                        <li><img src={spelling} alt="spelling" style={{filter: "brightness(0) invert(1)"}}></img>ტექსტის შედარება</li>
                        <li><img src={mic} alt="mic"></img>ხმა &rarr; ტექსტი</li>
                        <li><img src={voice} alt="voice"></img>ტექსტი &rarr; ხმა</li>
                        <li><img src={group} alt="group"></img>PDF კონვერტაცია</li>
                    </ul>
                </div>
                <div className={styles.user}>
                    <div className={styles.avatar}>ი</div>
                    <span>ირაკლი აბუაშვილი</span>
                    <img src={dots} alt="dots"></img>
                </div>
            </div>
        </section>
    </>



  )
}

export default Sidebar