import "./About.css";

import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import pdfCV from "../../assets/CV. english.pdf";

const About = () => {
    return(
        <div className="about-container">

            <div className="col-left">
            <h1>About me</h1>
                <h4>I am a Full Stack Developer, a graduate of the Henry Bootcamp, with over 800 hours of theoretical and practical courses. I have honed my skills from the fundamentals to collaborating within a team, and utilizing agile methodologies.<br/>My deep fascination with the IT world  and emerging technologies, including Artificial Intelligence, Machine Learning, and the world of cryptocurrencies, has been a driving force in my career. Building on my background in administration, sales, and volunteering, I have cultivated valuable skills in teamwork, communication, and proactive problem-solving over the years.</h4>
                <h4>I'm always eager to embrace new opportunities and continually enhance my professional development as a developer. If you're interested in exploring my skill set, please click below 👇.</h4>
                <Link to="/skills">
                    <button>
                        skills
                    </button>
                </Link>
            </div>

            <div className="col-right">
                <Card />
                <button>
                    <a href={pdfCV} target="_blank">
                        View CV
                    </a>
                </button>
                <button>
                    <a href={pdfCV} target="_blank" rel="noopener noreferrer" download="CV Agustin Camuzzi">
                        Download CV     
                    </a>
                </button>
            </div>

        </div>
    );
}

export default About;