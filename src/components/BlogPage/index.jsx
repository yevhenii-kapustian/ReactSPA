import styles from './blogPage.module.css'
import { getImgUrl } from '../../utils/functions' 
import BlogPageReadingList from '../BlogPageReadingList'

const BlogPage = () => {
    return(
        <div className={styles.blogPageContainer}>
            <div className={styles.blogPageMain}>
                <div className={styles.blogPageMainText}>
                    <h4>By Themadbrains in <span>inspiration</span></h4>
                    <h1>Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <button>Start learning now</button>
                </div>
                <div className={styles.blogPageMainImage}>
                    <img src={getImgUrl("blogMeeting.png")} alt="" width={700}/>
                </div>
            </div>
            <BlogPageReadingList title="Reading blog list" />
        </div>
    
    )
}

export default BlogPage