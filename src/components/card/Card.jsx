import "./Card.css"
import pixAvatar from "../../assets/pixAvatar.png";
import avatar from "../../assets/avatar.png";

const Card = () => {
    return(
        <div class="card">
            <div class="first-content">
                <img src={pixAvatar} alt="Pixel" />
            </div>
            <div class="second-content">
                <img src={avatar} alt="Avatar" />
            </div>
        </div>
    );
}

export default Card;