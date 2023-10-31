import "./About.css";

import { Link } from "react-router-dom";
import Card from "../../components/card/Card";

const About = () => {
    return(
        <div className="about-container">

            <h1>About me</h1>
            <div className="col-left">
                <h3>Full Stack Developer graduated from Henry Bootcamp, with  800 hours of theoretical-practical courses, learning from the basics to working with a team and with agile methodologies</h3>
                <h3>Fascinated with the IT world and the new techonologies, such as the AIs, machine learning and crypto world. Thanks to my background in administration, sales and volunteering, through the years I developed valious skills to team work, to comunicate and to become a proactive person</h3>
                <h3>Always open to new opportunities and to grow as a better professional as developer, if you want to know my skills, click here 👇</h3>
                <Link to="/skills">
                    <button>
                        skills
                    </button>
                </Link>
                <h3>And if you want to comunicate with me to develop a project or to know more about me click here 👇</h3>
                <button>
                    Link to wp
                </button>
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