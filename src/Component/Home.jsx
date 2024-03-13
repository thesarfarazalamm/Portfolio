// import About from "./About"
import Bio from "./Bio"
import Image from "./Image"
import Social from "./Social"
import style from "./style.module.css"
const Home=()=>{
    return(
        <div>
            <section className={style.content}>
                <article className={style.midbox}>
                   <div className={style.Social}><Social/></div>
                   <div className={style.Bio}><Bio/></div>
                   <div className={style.Image}><Image/></div>  
                </article>
            </section>
            
        </div>
    )
}
export default Home