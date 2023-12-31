import { Link } from "react-router-dom";
import "./Sidebar.css";
import homeLogo from "../../assets/home.svg";
import aboutLogo from "../../assets/about.svg";
import skillsLogo from "../../assets/skills.svg";
import projectsLogo from "../../assets/projects.svg";
import contactLogo from "../../assets/contact.svg";
import linkedInLogo from "../../assets/linkedIn.svg";
import gitLogo from "../../assets/github.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";


const Sidebar = () => {

    const [t, i18n] = useTranslation("global");

    const [selectedLanguage, setSelectedLanguage] = useState("en");

    const handleLanguageChange = (event) => {
        const newLanguage = event.target.value;
        setSelectedLanguage(newLanguage)
        i18n.changeLanguage(newLanguage);
    }

    return(
        <div className="sidebar">
            <div className="sidebar-header">
                <h3>Agustin Camuzzi</h3>
            </div>
            <ul className="sidebar-icons">
            <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
            >
                <option value="en">{t("sidebar.lan1")}</option>
                <option value="es">{t("sidebar.lan2")}</option>
                <option value="pt">{t("sidebar.lan3")}</option>
            </select>
                <li>
                    <Link to="/">
                         <img src={homeLogo} alt="Home Logo" title="Home" className="icon"/>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                    <img src={aboutLogo} alt="About Logo" title="About" className="icon"/>
                    </Link>
                </li>
                <li>
                    <Link to="/skills">
                    <img src={skillsLogo} alt="Skills Logo" title="Skills" className="icon"/>
                    </Link>
                </li>
                <li>
                    <Link to="/projects">
                    <img src={projectsLogo} alt="Projects Logo" title="Projects" className="icon"/>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                    <img src={contactLogo} alt="Contact Logo" title="Contact me" className="icon"/>
                    </Link>
                </li>
                <a href="https://www.linkedin.com/in/agustin-camuzzi-3a9b81272/" target="_blank">
                <img src={linkedInLogo} alt="Linked In Logo" title="LinkedIn" className="icon-social"/>
                </a>
                <a href="https://github.com/Camuzzi/" target="_blank">
                <img src={gitLogo} alt="GitHub Logo" title="GitHub Logo" className="icon-social"/>
                </a>
            </ul>
            
        </div>
    );
}

export default Sidebar;