import styles from "./SidebarStyles.module.css"
import logo from './../assets/logo.png'
import vector from './../assets/vector.png'
import check from './../assets/check.png'
// import vector from './../assets/vector.png'


function Sidebar() {
  return (

    <>
        <section className={styles.navbarContainer}>
            <div>
                <div className={styles.vector}>
                    <img src={vector} alt="vector"></img>
                </div>
                <div className={styles.logo}>
                    <img src={logo} alt="logo"></img><span>Enagram</span>
                </div>
                <div className={styles.listItems}>
                    <ul>
                        <li><img src={check} alt="check"></img>მართლმწერი</li>
                        <li>ტექსტის შედარება</li>
                        <li>ხმა ტექსტი</li>
                        <li>ტექსტი ხმა</li>
                        <li>pdf კონვერტაცია</li>
                    </ul>
                </div>
                <div className={styles.user}>
                    <p>ირაკლი აბუაშვილი</p>
                </div>
            </div>
        </section>
    </>



  )
}

export default Sidebar