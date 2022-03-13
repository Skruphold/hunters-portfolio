import "./portfolio.scss"
import DNBphoto from "../../assets/Dollars-and-bills.png"
import ACHphoto from "../../assets/ach-game-review.png"
import ECTphoto from "../../assets/ECT.png"
import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from "react";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured")

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
    ];

    return (
        <div className='portfolio' id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src={DNBphoto} alt="" />
                    <h3>Dollars And Bills</h3>   
                </div>
                <div className="item">
                    <img src={ACHphoto} alt="" />
                    <h3>ACH Game Review</h3>   
                </div>
                <div className="item">
                    <img src={ECTphoto} alt="" />
                    <h3>Event Covid Tracker</h3>   
                </div>
            </div>
        </div>
    )
}
