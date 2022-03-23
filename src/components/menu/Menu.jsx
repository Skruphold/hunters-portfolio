import "./menu.scss"
import Resume from "../../assets/Linkedinresume.pdf"
import Linkedin from "../../assets/linkedin.png"
import Twitter from "../../assets/twitter.png"
import Github from "../../assets/GitHub-Mark-Light-64px.png"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href={Resume}>Resume</a>
                </li>
                    <a className="linked-in" href="https://www.linkedin.com/in/hunter-coleman-webdev/"><img src={Linkedin} alt=""/></a>
                    <a className="twitter" href="https://twitter.com/huntergotvision"><img src={Twitter} alt=""/></a>
                    <a className="github" href="https://github.com/Skruphold"><img src={Github} alt=""/></a>
                <p>Hunterco999@gmail.com</p>
                <p>952-457-8900</p>
            </ul>
        </div>
    )
}
