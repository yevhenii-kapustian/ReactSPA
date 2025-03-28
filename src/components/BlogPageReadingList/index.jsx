import styles from './blogPageReadingList.module.css'
import { getImgUrl } from '../../utils/functions'

const BlogPageReadingList = ({title}) => {
    return(
        <div className={styles.readingBlogList}>
            <h2>{title}</h2>

            <div className={styles.readingBlogListItems}>
                <div className={styles.blogItem}>
                    <img src={getImgUrl("UX-Blog.png")} alt="" />
                    <h3>UX/UI</h3>
                </div>

                <div className={styles.blogItem}>
                    <img src={getImgUrl("react-Blog.png")} alt="" />
                    <h3>React</h3>
                </div>

                <div className={styles.blogItem}>
                    <img src={getImgUrl("PHP-Blog.png")} alt="" />
                    <h3>PHP</h3>
                </div>

                <div className={styles.blogItem}>
                    <img src={getImgUrl("javaScript-Blog.png")} alt="" />
                    <h3>JavaScript</h3>
                </div>
            </div>
        </div>
    )
}

export default BlogPageReadingList