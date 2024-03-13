import style from "./style.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faGithub} from '@fortawesome/free-solid-svg-icons'
import { faGithub,faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons'
const Social=()=>{
    return(
        <div>
            <div className={style.Social_block }>
                <div><FontAwesomeIcon icon={faGithub} id={style.github}/></div>
                <div><FontAwesomeIcon icon={faInstagram} id={style.instagram}/></div>
                <div><FontAwesomeIcon icon={faWhatsapp} id={style.whatsapp}/></div>
            </div>
        </div>
    )
}
export default Social