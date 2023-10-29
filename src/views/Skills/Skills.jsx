import "./Skills.css"

import logoBootstrap from "../../assets/technologies/bootstrap.svg";
import logoCss from "../../assets/technologies/css-3.svg";
import logoFigma from "../../assets/technologies/figma.svg";
import logoGit from "../../assets/technologies/git-icon.svg";
import logoHtml from "../../assets/technologies/html-5.svg";
import logoJS from "../../assets/technologies/javascript.svg";
import logoNode from "../../assets/technologies/nodejs-icon.svg";
import logoNPM from "../../assets/technologies/npm.svg";
import logoSQL from "../../assets/technologies/postgresql.svg";
import logoReact from "../../assets/technologies/react.svg";
import logoRedux from "../../assets/technologies/redux.svg";
import logoVite from "../../assets/technologies/vitejs.svg";
import logoWebpack from "../../assets/technologies/webpack.svg";


const Skills = () => {
    return(
        <div>
            <h1>Skills</h1>
            <div className="skills-icons">
                <h2>Tech Skills:</h2>
                <p>Programming languanges and tools to developing</p>
                <img src={logoJS} alt="JS" title="JavaScript"/>
                <img src={logoNode} alt="Node" title="Node"/>
                <img src={logoReact} alt="React" title="React"/>
                <img src={logoRedux} alt="Redux" title="Redux"/>
                <img src={logoBootstrap} alt="Bootstrap" title="Bootstrap"/>
                <img src={logoCss} alt="CSS" title="CSS"/>
                <img src={logoHtml} alt="HTML" title="HTML"/>
                <img src={logoSQL} alt="SQL" title="PostgreSQL"/>
                <img src={logoWebpack} alt="Webpack" title="Webpack"/>
                <img src={logoVite} alt="Vite" title="Vite"/>
                <img src={logoGit} alt="Git" title="Git"/>
                <img src={logoNPM} alt="NPM" title="NPM"/>
                <img src={logoFigma} alt="Figma" title="Figma"/>
            </div>
        </div>
    );
}

export default Skills;