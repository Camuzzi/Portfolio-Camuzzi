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


const Projects = () => {
    return(
        <div className="projects-container">
            <h1>Projects</h1>
            <div className="cards-container">
                <div className="project">
                    <CardProject
                        className="cards-projects" 
                        imgPage={eightHome}
                        imgPage2={eightDetail}
                        imgPage3={eightStore}
                        imgPage4={eightProfile}
                        titlePage="8-bits app"
                        descriptionPage="Ecommerce of videogames developed using technologies like React, JavaScript, HTML, Redux, Node.js, Bootstrap, PostgreSQL, among other."
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
                        titlePage="Pokemon app"
                        descriptionPage="Pokedex when you can review all pokemons with their details, filter by attack or type and create your own pokemon"
                        linkRepo="https://github.com/Camuzzi/Pokemon-PI-Camuzzi.git"
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;