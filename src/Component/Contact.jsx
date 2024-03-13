import style from "./style.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp, } from "@fortawesome/free-brands-svg-icons"
import Button from 'react-bootstrap/Button';

// or less ideally
const Contact = () => {
    return (
        <div className={style.Contact}>
            <div className={style.Contact_box}>
                <div className={style.LeftSideBox} id={style.box}>
                    <div className={style.Talk} id={style.Social_bo}>Talk to me</div>

                    <div className={style.Email} id={style.Social_box}>
                        <FontAwesomeIcon icon={faEnvelope} id={style.icon} />
                        <p><b>Email</b></p>
                        <p>thesarfarazalamm@gmail.com</p>
                    </div>

                    <div className={style.Whatsapp} id={style.Social_box}>
                        <FontAwesomeIcon icon={faWhatsapp} id={style.icon} />
                        <p><b>Whatsapp</b></p>
                        <p>9102-265-996</p>
                    </div>

                    <div style={style.Instagram} id={style.Social_box}>
                        <FontAwesomeIcon icon={faInstagram} id={style.icon} />
                        <p><b>Instagram</b></p>
                        <p>Write me <FontAwesomeIcon icon={faArrowRight} /></p>


                    </div>
                </div>
                <div className={style.RightSideBox} id={style.box}>
                    <div classNae={style.Project} id={style.Social_bo}>Get in touch</div>
                    <div className={style.Contact}>
                        {/* <h1>Contact Form</h1> */}
                        <form action="">
                            <label htmlFor="name">Full Name</label>
                            <input type=" text" required id="name" placeholder="Your name"/>
                            <label htmlFor="email">Email address</label>
                            <input type="email" required maxLength="50" id="email" placeholder="name@example.com"/>
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" required maxLength="10" id="phone" placeholder="phone"/>
                            <label htmlFor="message">Message</label>
                            <textarea class="form-control" id="message" name="message" rows="5" ></textarea>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact