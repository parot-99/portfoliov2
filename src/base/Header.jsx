import styles from './Header.module.css'
import letterImg from './../images/letterImg.jpg'

const Header = () => {
  return (
    <header id={styles.header} className="container">
      <h1>Ahmed</h1>
      <img id={styles.icon} src={letterImg} alt="" />
    </header>
  )
}

export default Header
