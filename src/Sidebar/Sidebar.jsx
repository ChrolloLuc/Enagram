import { useState } from 'react'
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
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <>
      <section className={`${styles.navbarContainer} ${isCollapsed ? styles.collapsed : ''}`}>
        <div className={styles.container}>
          <div className={styles.vector}>
            <img 
              src={vector} 
              alt="vector" 
              onClick={toggleSidebar}
              className={isCollapsed ? styles.rotated : ''}
            />
          </div>
          
          {!isCollapsed && (
            <>
              <div className={styles.logo}>
                <img src={logo} alt="logo" />
              </div>
              <div className={styles.listItems}>
                <ul>
                  <li><img src={check} alt="check" />მართლმწერი</li>
                  <li><img src={spelling} alt="spelling" style={{filter: "brightness(0) invert(1)"}} />ტექსტის შედარება</li>
                  <li><img src={mic} alt="mic" />ხმა &rarr; ტექსტი</li>
                  <li><img src={voice} alt="voice" />ტექსტი &rarr; ხმა</li>
                  <li><img src={group} alt="group" />PDF კონვერტაცია</li>
                </ul>
              </div>
              <div className={styles.user}>
                <div className={styles.avatar}>ი</div>
                <span>ირაკლი აბუაშვილი</span>
                <img src={dots} alt="dots" />
              </div>
            </>
          )}
          
          {isCollapsed && (
            <div className={styles.collapsedContent}>
              <div className={styles.collapsedIcons}>
                <img src={check} alt="check" />
                <img src={spelling} alt="spelling" style={{filter: "brightness(0) invert(1)"}} />
                <img src={mic} alt="mic" />
                <img src={voice} alt="voice" />
                <img src={group} alt="group" />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Sidebar