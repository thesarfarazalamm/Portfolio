import style from "./style.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAddressCard, faMountainSun, faStar, faCommentSms ,faBars} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
const Nav = () => {
   
    return (
        <div>
            <section className={style.Nav}>
                <article>
                    <div className={style.Logo}>
                        <h1 style={{ fontSize: "30px" }}>Md Sarfaraz Ansari</h1>
                    </div>
                    <div className={style.Menu}>
                        <ul>
                            
                            <li><FontAwesomeIcon icon={faHouse} style={{ height: "0.9rem", marginRight: "0.2rem", position: "relative", bottom: "0.1rem"  }} /><Link to="/" style={{textDecoration:"none", color:" rgb(80, 80, 80"}} > Home</Link></li>

                            <li><FontAwesomeIcon icon={faMountainSun} style={{ height: "0.9rem", marginRight: "0.2rem", position: "relative", bottom: "0.1rem" }} /><Link to="/projects" style={{textDecoration:"none", color:" rgb(80, 80, 80"}}>Projects</Link></li>

                            <li><FontAwesomeIcon icon={faStar} style={{ height: "0.9rem", marginRight: "0.2rem", position: "relative", bottom: "0.1rem" }} /><Link to="/skills" style={{textDecoration:"none" ,color:" rgb(80, 80, 80"}}>Skills</Link ></li>

                            <li><FontAwesomeIcon icon={faAddressCard} style={{ height: "0.9rem", marginRight: "0.2rem", position: "relative", bottom: "0.1rem" }} /><Link to="/about" style={{textDecoration:"none",color:" rgb(80, 80, 80"}}>About</Link></li>

                            <li><FontAwesomeIcon icon={faCommentSms} style={{ height: "0.9rem", marginRight: "0.2rem", position: "relative", bottom: "0.1rem" }} /><Link to="/contact" style={{textDecoration:"none", color:" rgb(80, 80, 80"}}>Contact</Link></li>
                            <FontAwesomeIcon icon={faBars} />
                        </ul>
                    </div>
                    {/* <div className={style.Header_contact_btn}></div> */}
                </article>
            </section>
            
        </div>
    )
}
export default Nav