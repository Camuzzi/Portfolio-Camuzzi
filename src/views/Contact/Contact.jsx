import "./Contact.css";

import wpLogo from "../../assets/whatsapp.svg";


const Contact = () => {
    return(
        <div>
            <h1>Contact</h1>
            <h4>Likewise, if you'd like to reach out for potential collaborations or to learn more about me, feel free to contact me here 👇."</h4>
                <a href="https://wa.me/5492664953687?text=Hello Agustin!" target="_blank">
                    <img src={wpLogo} alt="Whatsapp Logo" title="Send me a message!" />
                </a>
        </div>
    );
}

export default Contact;