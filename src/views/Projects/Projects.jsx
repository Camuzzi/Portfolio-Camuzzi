import "./Projects.css";
import CardProject from "../../components/CardProject/CardProject";
import eightHome from "../../assets/projects/bits.home.png";
import eightDetail from "../../assets/projects/bits.detail.png";
import eightStore from "../../assets/projects/bits.store.png";
import eightProfile from "../../assets/projects/bits-profile.png";
import pokemonHome from "../../assets/projects/pokemon.home.png";
import pokemonAbout from "../../assets/projects/pokemon.about.png";
import pokemonForm from "../../assets/projects/pokemon.form.png";
import pokemonLanding from "../../assets/projects/pokemon.landing.png";

import { useTranslation } from "react-i18next";


const Projects = () => {

    const [t, i18n] = useTranslation("global");

    return(
        <div className="projects-container">
            <h1>{t("projects.title")}</h1>
            <div className="cards-container">
                <div className="project">
                    <CardProject
                        className="cards-projects" 
                        imgPage={eightHome}
                        imgPage2={eightDetail}
                        imgPage3={eightStore}
                        imgPage4={eightProfile}
                        titlePage={t("projects.cardTitle1")}
                        descriptionPage={t("projects.cardDescription1")}
                        linkRepo="https://github.com/negrura14/8_Bits_Front"
                        linkLive="https://8-bits-front.vercel.app/"
                    />
                </div>
                <div className="project">
                    <CardProject 
                        className="cards-projects" 
                        imgPage={pokemonLanding}
                        imgPage2={pokemonHome}
                        imgPage3={pokemonForm}
                        imgPage4={pokemonAbout}
                        titlePage={t("projects.cardTitle2")}
                        descriptionPage={t("projects.cardDescription2")}
                        linkRepo="https://github.com/Camuzzi/Pokemon-PI-Camuzzi.git"
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;