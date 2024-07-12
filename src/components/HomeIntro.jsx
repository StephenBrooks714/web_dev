import {Link} from "react-router-dom";

export default function HomeIntro(){
    return(
        <>
            <section className={"home-intro"}>
                <div className={"container"}>
                    <section className={"row align-items-center justify-content-center"} style={{paddingTop: "40px"}}>
                        <div className={"col-lg-8 text-center"}>
                            <h1 className={"display-4 mb-0"}>DistinctCoding.js</h1>
                            <p className={"lead"}>Learn the first step into an I.T. career and get your certificate of
                                achievement in 6 months or less.</p>
                            <Link to={"/courses"} className={"btn btn-primary m-1"}>Programs</Link>
                            <a href="https://teams.live.com/meet/9377389989909?p=EyYWujxjFCFbUW78D2" target={"_blank"} className={"btn btn-primary m-1"}>
                                Join Live
                            </a>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}