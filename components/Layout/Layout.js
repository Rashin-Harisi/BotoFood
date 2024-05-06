import Link from 'next/link'
import styles from './Layout.module.css'

const Layout = ({children}) => {
  return (
    <div>
        <header className={styles.header}>
            <div className={styles.left}>
                <Link href='/'> BotoFood</Link>
            </div>
            <div className={styles.right}>
                <Link href='/menu'>Menu</Link>
                <Link href='/categories'>Categories</Link>
            </div>
        </header>
        <div className={styles.container}>{children}</div>
        <footer className={styles.footer}>
            This website is managed by <a href='https://github.com/Rashin-Harisi' target='_blanket' rel="noreferrer">Rashin Harisi</a> &copy;
        </footer>
    </div>
  )
}

export default Layout