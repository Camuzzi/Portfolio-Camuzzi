import "./CardProject.css";
import logoPage from "../../assets/8-bits-page.png";

const CardProject = ({ imgPage,titlePage,descriptionPage,linkRepo,linkLive }) => {
    return(
        <div className="card-project">
            <div className="card-image"><img src={imgPage} alt="Logo" /></div>
            <p className="card-title">{titlePage}</p>
            <p className="card-body">
                {descriptionPage}
            </p>
            {/* <p class="footer">Written by <span class="by-name">John Doe</span> on <span class="date">25/05/23</span></p> */}
            <a className="footer" href={linkLive} target="_blank">View page</a>
            {linkLive && 
                <a className="footer" href={linkRepo} target="_blank">View Repo</a>           
            }
        </div>
    );
}

export default CardProject;