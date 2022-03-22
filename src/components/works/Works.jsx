import "./works.scss"
import Mobile from "../../assets/mobile.png"
import DNBphoto from "../../assets/Dollars-and-bills.png"
import ACHphoto from "../../assets/ach-game-review.png"
import ECTphoto from "../../assets/ECT.png"
import NoteTakerPhoto from "../../assets/note-taker.PNG"
import JatePhoto from "../../assets/Jate.PNG"
import SNApiGif from "../../assets/demo.gif"
import Arrow from "../../assets/arrow.png"
import Globe from "../../assets/globe.png"
import { useState } from "react"

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        {
            id: 1,
            icon: Globe,
            title: "Dollars And Bills",
            desc: "Dollars and Bills was created to solve the age-old problem of keeping track of your dollars whilst paying your bills. As a user you are allowed to create a budget, expenses within and then update or delete them.",
            img: DNBphoto,
        },
        {
            id: 2,
            icon: Globe,
            title: "ACH Game Review",
            desc: "A game review website where you can save games and keep track of others reviews. You can post reviews of your own and ratings. First you must sign up, then you can start having all the fun with other game reviewers.",
            img: ACHphoto,
        },
        {
            id: 3,
            icon: Mobile,
            title: "Event Covid Tracker",
            desc: "This website was built to allow you to search any city for events in that area. With the current times it can be important to know how bad covid may be in that area. This website will show you the amount of cases near that event.",
            img: ECTphoto,
        },
        {
            id: 4,
            icon: Mobile,
            title: "Note Taker",
            desc: "This app allows the user to create and save a note after giving it a title and description. The user can later delete the note if they no longer need it or have completed the task. Just tap the get started button.",
            img: NoteTakerPhoto,
        },
        {
            id: 5,
            icon: Globe,
            title: "Just another Text Editor",
            desc: "This is a Progressive Web Application aka PWA. It is a single page text editor that you can use to store and write text. It is functionable offline and can also be installed to the user's local machine.",
            img: JatePhoto,
        },
        {
            id: 6,
            icon: Globe,
            title: "Social Network Api",
            desc: "This is a backend application that can be used to create users. Then those users can interact and become friends. One user can post a thought and the others can react.",
            img: SNApiGif,
        },
    ];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 5) 
        : setCurrentSlide(currentSlide < data.length -1 ? currentSlide +1 : 0)
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map(d=>(

                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src={Arrow} className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src={Arrow} className="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
    )
}
