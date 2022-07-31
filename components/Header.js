import PropTypes from "prop-types"
import styles from "../styles/Login.module.css";

function Header({title}) {
  return (
    <header className={styles.header}>
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {    
    title : 'Start Minting'
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}

export default Header