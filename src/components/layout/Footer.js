import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

/*
 Instalar o React-icons: npm install react-icons --save
 Importar o icone que deseja usar
 Use a tag do icone específico ex: <FaFacebook />


*/

function Footer(){
    return(
        <footer>
            <ul className={styles.social_list}>
            <li><FaFacebook/></li>
            <li><FaInstagram/></li>
            <li><FaLinkedin/></li>
            </ul>
           
        </footer>
    )
}
export default Footer