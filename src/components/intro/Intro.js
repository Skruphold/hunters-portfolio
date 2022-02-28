import "./intro.css"
import Me from "../../images/me.jpg"

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-welcome">Hello, my name is!</h2>
                    <h1 className="intro-name">Hunter Coleman</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Web Developer</div>
                            <div className="intro-title-item">Photographer</div>
                        </div>
                    </div>
                    <div className="intro-description">I am a full stack web developer looking to work or collaborate on anything. I really enjoy working with data bases but also really enjoy using react for the front end. I can also build you a personal website for your own small business.</div>
                </div>
            </div>
            <div className="intro-right">
                <img src={Me} alt="myself" className="intro-image" />
            </div>
        </div>
    )
}

export default Intro