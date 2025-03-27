import styles from './homePage.module.css'
import HomePageService from '../HomePageService'
import HomePageSoftwareReview from '../HomePageSoftwareReview'
import { PlayCircle } from "@phosphor-icons/react"
import { Envelope } from "@phosphor-icons/react"
import { ChartBar } from "@phosphor-icons/react"
import { CalendarDots } from "@phosphor-icons/react"
import TeenageGirlImage from '../../assets/teenage-girl.png'

const HomePage = () => {
    return(    
        <>
          <div className={styles.homePage}>
              <div className={styles.homeMain}>
                  <div className={styles.homeMainTitle}>
                      <h1><span>Studying</span> Online is now much easier</h1>
                      <p>TOTC is an interesting platform that will teach you in more an interactive way</p>
                  </div>
                  <div className={styles.homeMainButtons}>
                      <button>Join for free</button>
                      <div className={styles.homeMainButtonsPause}>
                          <PlayCircle size={76} color='white'/>
                          <p>Watch how it works</p>
                      </div>
                  </div>
              </div>
              <div className={styles.homeMainTeenage}>
                  <img src={TeenageGirlImage} alt=""  height={700}/>
                  <div className={`${styles.homeMainMarks} ${styles.admission}`}>
                      <Envelope size={50} color="#F88C3D" weight="fill" />   
                      <div>
                          <h4>Congratulations</h4>
                          <p>Your admission completed</p>
                      </div> 
                  </div>
                  <div className={styles.analytics}>
                      <ChartBar size={60} color="white" weight="fill" />
                  </div>
                  <div className={`${styles.homeMainMarks} ${styles.assisted}`}>
                      <CalendarDots size={50} color="#23BDEE" weight="fill" />
                      <div>
                          <h4>250k</h4>
                          <p>Assisted Student</p>
                      </div> 
                  </div>
              </div>
          </div>
          <HomePageService title="Our Success"
                            description="Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci."
                            />
           <HomePageSoftwareReview/>
        </>
    )
}

export default HomePage