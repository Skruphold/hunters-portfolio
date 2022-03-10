import "./portfolio.scss"
import DNBphoto from "../../assets/Dollars-and-bills.png"
import ACHphoto from "../../assets/ach-game-review.png"
import ECTphoto from "../../assets/ECT.png"

export default function Portfolio() {
    return (
        <div className='portfolio' id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Dollars And Bills</li>
                <li>ACH Game Review</li>
                <li>Event Covid Tracker</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src={DNBphoto} alt="" />
                    <h3>Dollars And Bills</h3>   
                </div>
            </div>
            <div className="container">
                <div className="item">
                    <img src={ACHphoto} alt="" />
                    <h3>ACH Game Review</h3>   
                </div>
            </div>
            <div className="container">
                <div className="item">
                    <img src={ECTphoto} alt="" />
                    <h3>Event Covid Tracker</h3>   
                </div>
            </div>
        </div>
    )
}
