import styles from './homePageSoftwareReview.module.css'
import Calendar from '../../assets/calendar.png'
import Contracts from '../../assets/contracts.png'
import CustomerTracking from '../../assets/customerTracking.png'

const HomePageSoftwareReview = () => {
    return(
        <div className={styles.homePageSoftware}>
            <div className={styles.homePageSoftwareTitle}>
                <h2>All-In-One <span>Cloud Software.</span></h2>
                <p>TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
            </div>
            <div className={styles.homePageSoftwareMainContainer}>
                
                <div className={styles.homePageSoftwareMain}>
                    <div className={`${styles.homePageSoftwareMainImage} ${styles.contracts}`}>
                        <img src={Contracts} alt="" height={100}/>
                    </div>
                    <div className={styles.homePageSoftwareMainTitle}>
                        <h3>Online Billing, Invoicing, & Contracts</h3>
                        <p>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
                    </div>
                </div>

                <div className={styles.homePageSoftwareMain}>
                    <div className={`${styles.homePageSoftwareMainImage} ${styles.contracts}`}>
                        <img src={Calendar} alt="" height={100}/>
                    </div>
                    <div className={styles.homePageSoftwareMainTitle}>
                        <h3>Easy Scheduling & Attendance Tracking</h3>
                        <p>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
                    </div>
                </div>

                <div className={styles.homePageSoftwareMain}>
                    <div className={`${styles.homePageSoftwareMainImage} ${styles.contracts}`}>
                        <img src={CustomerTracking} alt="" height={100}/>
                    </div>
                    <div className={styles.homePageSoftwareMainTitle}>
                        <h3>Customer Tracking</h3>
                        <p>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePageSoftwareReview