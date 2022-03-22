import "./contact.scss";
import Shake from "../../assets/handshake.png";
import Linkedin from "../../assets/linkedin.png"
import Twitter from "../../assets/twitter.png"
import Github from "../../assets/GitHub-Mark-Light-64px.png"
import { useState } from "react";

export default function Contact() {
    const [message, setMessage] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className='contact' id="contact">
            <div className="left">
                <img src={Shake} alt="" />
            </div>
            <div className="right">
                <h2>Contact Me.</h2>
                <div className="links">
                    <a className="linked-in" href="https://www.linkedin.com/in/hunter-coleman-webdev/"><img src={Linkedin} alt=""/></a>
                    <a className="twitter" href="https://twitter.com/huntergotvision"><img src={Twitter} alt=""/></a>
                    <a className="github" href="https://github.com/Skruphold"><img src={Github} alt=""/></a>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your e-mail"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send.</button>
                    {message && <span>Thanks, I will get back to you as soon possible!</span>}
                </form>
            </div>
        </div>
    )
}
