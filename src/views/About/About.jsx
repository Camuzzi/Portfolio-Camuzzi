import "./About.css";

import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import pdfCV from "../../assets/CV. english.pdf";

import { useTranslation } from "react-i18next";


const About = () => {

    const [t, i18n] = useTranslation("global");

    return(
        <div className="about-container">

            <div className="col-left">
            <h1>{t("about.title")}</h1>
                <h4>{t("about.description1")}<br/>{t("about.description2")}</h4>
                <h4>{t("about.description3")}</h4>
                <Link to="/skills">
                    <button>
                        {t("about.button1")}
                    </button>
                </Link>
            </div>

            <div className="col-right">
                <Card />
                <button>
                    <a href={pdfCV} target="_blank">
                        {t("about.button2")}
                    </a>
                </button>
                <button>
                    <a href={pdfCV} target="_blank" rel="noopener noreferrer" download="CV Agustin Camuzzi">
                        {t("about.button3")}   
                    </a>
                </button>
            </div>

        </div>
    );
}

export default About;