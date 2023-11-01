import "./Projects.css";
import CardProject from "../../components/CardProject/CardProject";

import eightBitsImg from "../../assets/8-bits-page.png";

const Projects = () => {
    return(
        <div>
            <h1>Projects</h1>
            <CardProject 
                imgPage={eightBitsImg}
                titlePage="8-bits app"
                descriptionPage="Ecommerce of videogames developed using technologies like React, JavaScript, HTML, Redux, Node.js, Bootstrap, PostgreSQL, among other."
                linkRepo="https://github.com/negrura14/8_Bits_Front"
                linkLive="https://8-bits-front.vercel.app/"
            />
        </div>
    );
}

export default Projects;