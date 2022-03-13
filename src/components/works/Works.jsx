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
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero rem ab perspiciatis facilis culpa illum earum deleniti maxime totam sed, sapiente, corporis corrupti officia doloribus dolore asperiores modi veniam vero.",
            img: DNBphoto,
        },
        {
            id: 2,
            icon: Globe,
            title: "ACH Game Review",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero rem ab perspiciatis facilis culpa illum earum deleniti maxime totam sed, sapiente, corporis corrupti officia doloribus dolore asperiores modi veniam vero.",
            img: ACHphoto,
        },
        {
            id: 3,
            icon: Mobile,
            title: "Event Covid Tracker",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero rem ab perspiciatis facilis culpa illum earum deleniti maxime totam sed, sapiente, corporis corrupti officia doloribus dolore asperiores modi veniam vero.",
            img: ECTphoto,
        },
        {
            id: 4,
            icon: Mobile,
            title: "Note Taker",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero rem ab perspiciatis facilis culpa illum earum deleniti maxime totam sed, sapiente, corporis corrupti officia doloribus dolore asperiores modi veniam vero.",
            img: NoteTakerPhoto,
        },
        {
            id: 5,
            icon: Globe,
            title: "Just another Text Editor",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero rem ab perspiciatis facilis culpa illum earum deleniti maxime totam sed, sapiente, corporis corrupti officia doloribus dolore asperiores modi veniam vero.",
            img: JatePhoto,
        },
        {
            id: 6,
            icon: Globe,
            title: "Social Network Api",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero rem ab perspiciatis facilis culpa illum earum deleniti maxime totam sed, sapiente, corporis corrupti officia doloribus dolore asperiores modi veniam vero.",
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
