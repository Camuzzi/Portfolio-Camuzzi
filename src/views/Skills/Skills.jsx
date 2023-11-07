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
import logoGitHub from "../../assets/technologies/github-icon.svg";
import logoSlack from "../../assets/technologies/slack-icon.svg";
import logoSequelize from "../../assets/technologies/sequelize.svg";
import logoTrello from "../../assets/technologies/trello.svg";


const Skills = () => {
    return(
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-icons">
                <h2>Tech Skills:</h2>

                <div className="tech-icon">
                    <div className="tech-logo">
                        <img src={logoJS} alt="JS"/>
                    </div>
                    <div className="tech-name">JavaScript</div>
                </div>

                
                <div className="tech-icon">
                    <div className="tech-logo">
                        <img src={logoNode} alt="Node"/>
                    </div>
                    <div className="tech-name">NodeJs</div>
                </div>
                
                <div className="tech-icon">
                    <div className="tech-logo">
                        <img src={logoReact} alt="React"/>
                    </div>
                    <div className="tech-name">React</div>
                </div>
                
                <div className="tech-icon">
                    <div className="tech-logo">
                        <img src={logoRedux} alt="Redux"/>
                    </div>
                    <div className="tech-name">Redux</div>
                </div>
                
                <div className="tech-icon">
                    <div className="tech-logo">
                        <img src={logoBootstrap} alt="Bootstrap"/>
                    </div>
                    <div className="tech-name">Bootstrap</div>
                </div>
                
                <div className="tech-icon">
                    <div className="tech-logo">
                        <img src={logoCss} alt="CSS"/>
                    </div>
                    <div className="tech-name">CSS</div>
                </div>
                
                <div className="tech-icon">
                    <div className="tech-logo">
                        <img src={logoHtml} alt="HTML"/>
                    </div>
                    <div className="tech-name">HTML</div>
                </div>
                
                <div className="tech-icon">
                    <div className="tech-logo">
                        <img src={logoSQL} alt="SQL"/>
                    </div>
                    <div className="tech-name">PostgreSQL</div>
                </div>
                
                <div className="tech-icon">
                    <div className="tech-logo">
                        <img src={logoWebpack} alt="Webpack"/>
                    </div>
                    <div className="tech-name">Webpack</div>
                </div>
                
                <div className="tech-icon">
                    <div className="tech-logo">
                        <img src={logoVite} alt="Vite"/>
                    </div>
                    <div className="tech-name">Vite</div>
                </div>
                
                <div className="tech-icon">
                    <div className="tech-logo">
                        <img src={logoGit} alt="Git"/>
                    </div>
                    <div className="tech-name">Git</div>
                </div>
                
                
                
               

                

                <div className="tech-icon">
                    <div className="tech-logo">
                        <img src={logoSequelize} alt="Sequelize"/>
                    </div>
                    <div className="tech-name">Sequelize</div>
                </div>

                

                <h2>Tools:</h2>

                <div className="tech-icon">
                    <div className="tech-logo">
                        <img src={logoTrello} alt="Trello"/>
                    </div>
                    <div className="tech-name">Trello</div>
                </div>

                <div className="tech-icon">
                    <div className="tech-logo">
                        <img src={logoSlack} alt="Slack"/>
                    </div>
                    <div className="tech-name">Slack</div>
                </div>

                <div className="tech-icon">
                    <div className="tech-logo">
                        <img src={logoGitHub} alt="GitHub"/>
                    </div>
                    <div className="tech-name">GitHub</div>
                </div>

                <div className="tech-icon">
                    <div className="tech-logo">
                        <img src={logoFigma} alt="Figma"/>
                    </div>
                    <div className="tech-name">Figma</div>
                </div>

            </div>
        </div>
    );
}

export default Skills;