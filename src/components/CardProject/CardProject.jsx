import "./CardProject.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imgPage from "../../assets/projects/bits-profile.png";

const CardProject = ({ imgPage,imgPage2,imgPage3,imgPage4,titlePage,descriptionPage,linkRepo,linkLive }) => {
    return(
        <div className="card-project">
            <div className="card-image">
            <Carousel
                showThumbs={false}
                emulateTouch={true}
                showArrows={false}
            >
                <div>
                <img src={imgPage} alt="Image 1" />
                </div>
                <div>
                <img src={imgPage2} alt="Image 2" />
                </div>
                <div>
                <img src={imgPage3} alt="Image 3" />
                </div>
                <div>
                <img src={imgPage4} alt="Image 4" />
                </div>
            </Carousel>
            </div>
            <p className="card-title">{titlePage}</p>
            <p className="card-body">
                {descriptionPage}
            </p>
            {linkLive && 
            <a className="footer" href={linkLive} target="_blank">View page</a>
            }
            <a className="footer" href={linkRepo} target="_blank">View Repo</a>           
            
        </div>
    );
}

export default CardProject;