import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import Me from "../../assets/me.png"
import DownArrow from "../../assets/down-arrow.png"

export default function Intro() {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            strings: ["Full Stack Web Developer", "Photographer"]
        })
    },[])

    return (
        <div className='intro img-bg' id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={Me} alt="photo of me" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello There, I'm</h2>
                    <h1>Hunter Coleman</h1>
                    <h3>Titles: <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src={DownArrow} alt="down arrow" />
                </a>
            </div>
        </div>
    )
}
