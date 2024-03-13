import style from "./style.module.css"
const Projects = () => {
    return (
        <div className={style.project}>
            <section>
                <div className={style.Proj}>Projects</div>
                <div className={style.boxes}>
                    <div className={style.project_box}>
                        <div id={style.boximage}>
                            <a href="https://thesarfarazalamm.github.io/co/" target="_blank">
                                <img src="./First Portfolio.png" alt="You have given Wrong path" id={style.proj_img} />
                            </a>

                        </div>
                        <div>
                            <h1>First</h1>
                            <p>Clik to explore </p>
                        </div>
                    </div>
                    <div className={style.project_box}>
                        <div id={style.boximage}>
                            <a href="https://mr12.netlify.app/" target="_blank">
                                 <img src="./SecondWebpage.png" alt="No Internet" id={style.proj_img} />
                            </a>
                           
                        </div>
                        <div>
                        <h1>Second</h1>
                        <p>Clik to explore</p>
                        </div>
                    </div>
                    <div className={style.project_box}>
                        <div id={style.boximage}>
                            <a href="">
                                <img src="" alt="No Internet" id={style.proj_img} />
                            </a>
                        </div>
                        <div></div>
                    </div>
                    <div className={style.project_box}>
                        <div id={style.boximage}>
                            <a href="">
                                <img src="" alt="You have given Wrong path" id={style.proj_img} />
                            </a>
                        </div>
                        <div></div></div>
                </div>
            </section>
        </div>
    )
}
export default Projects