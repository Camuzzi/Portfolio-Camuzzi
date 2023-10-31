import "./About.css";

import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import wpLogo from "../../assets/whatsapp.svg";

const About = () => {
    return(
        <div className="about-container">

            <h1>About me</h1>
            <div className="col-left">
                <h4>"I am a Full Stack Developer, a graduate of the Henry Bootcamp, with over 800 hours of theoretical and practical courses. I have honed my skills from the fundamentals to collaborating within a team, and utilizing agile methodologies.<br/>My deep fascination with the IT world  and emerging technologies, including Artificial Intelligence, Machine Learning, and the world of cryptocurrencies, has been a driving force in my career. Building on my background in administration, sales, and volunteering, I have cultivated valuable skills in teamwork, communication, and proactive problem-solving over the years.</h4>
                <h4>I'm always eager to embrace new opportunities and continually enhance my professional development as a developer. If you're interested in exploring my skill set, please click below 👇.</h4>
                <Link to="/skills">
                    <button>
                        skills
                    </button>
                </Link>
                <h4>Likewise, if you'd like to reach out for potential collaborations or to learn more about me, feel free to contact me here 👇."</h4>
                <a href="https://wa.me/5492664953687?text=Hello Agustin!" target="_blank">
                    <img src={wpLogo} alt="Whatsapp Logo" title="Send me a message!" />
                </a>
            </div>

            <div className="col-right">
                <Card />
                <button>
                    View CV
                </button>
                <button>
                    Download CV
                </button>
            </div>

        </div>
    );
}

export default About;