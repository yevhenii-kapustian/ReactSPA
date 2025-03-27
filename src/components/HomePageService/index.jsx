import styles from './homePageService.module.css'

const HomePageService = ({title, description}) => {
    return(
        <div className={styles.homePageService}>
            <div className={styles.homePageServiceTitle}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className={styles.homePageServiceStatistics}>
                <div>
                    <h4>15K+</h4>
                    <p>Students</p>
                </div>
                <div>
                    <h4>75%</h4>
                    <p>Total success</p>
                </div>
                <div>
                    <h4>35</h4>
                    <p>Main questions</p>
                </div>
                <div>
                    <h4>26</h4>
                    <p>Chief experts</p>
                </div>
                <div>
                    <h4>16</h4>
                    <p>Years of experience</p>
                </div>
            </div>
        </div>
    )
}

export default HomePageService