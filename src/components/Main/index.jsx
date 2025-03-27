import styles from './main.module.css'
import HomePage from '../HomePage'
import CoursesPage from '../CoursesPage'
import BlogPage from '../BlogPage'
import LoginPage from '../Authorization/LoginPage'
import SignUpPage from '../Authorization/SignUpPage'

const Main = ({currentPage, setCurrentPage}) => {

    return(
        <main className={styles.main}>
            {currentPage === "Home" && <HomePage/>}
            {currentPage === "Courses" && <CoursesPage/>}
            {currentPage === "Blog" && <BlogPage/>}
            {currentPage === "Login" && <LoginPage setCurrentPage={setCurrentPage}/>}
            {currentPage === "SignUp" && <SignUpPage setCurrentPage={setCurrentPage}/>}
        </main>
    )
}

export default Main 