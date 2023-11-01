import "./Card.css"
import pixAvatar from "../../assets/pixAvatar.png";
import avatar from "../../assets/avatar.png";

const Card = () => {
    return(
        <div className="card-about">
            <div className="first-content">
                <img src={pixAvatar} alt="Pixel" />
            </div>
            <div className="second-content">
                <img src={avatar} alt="Avatar" />
            </div>
        </div>
    );
}

export default Card;