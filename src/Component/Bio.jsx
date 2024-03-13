import style from "./style.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons'
const Bio=()=>{

    return(
            <div className={style.Bio}>
                <div className={style.content_of_bio}>
                    <p>Welcome to my World</p>
                </div>
                <div className={style.content_of_bio}>
                     <h1>Hi, I am <span>Md Sarfaraz Alam</span>
                        <div id={style.developerBox}>
                            <div id={style.underline}></div>
                            <div id={style.developer}> Software Developer ✋</div>
                        </div>
                     </h1>
                </div>
                <div className={style.content_of_bio}> 
                    <p>First of all thank for visiting my portfolio Hi guy's as you know I'm md sarfaraz Ansari. I'm from bihar and i have completed my graduation in BCA from "Maulana Mazharul Haque Arabic And Persian University & My short term goal is to get a job"</p>
                </div>
                <div className={style.Bio_btn} style={{marginTop:"1rem"}}>
                    <button>Say Hello <FontAwesomeIcon icon={faPaperPlane} style={{transform:"rotate(45deg)"}}/></button>
                </div>
                {/* <div className={style.Scroll_down}>
                    <button> <FontAwesomeIcon icon={faComputerMouse} id={style.mouse} />Scroll down <FontAwesomeIcon icon={faArrowRight} id={style.Arrow} /></button>
                </div> */}
            </div>
    )
}
export default Bio