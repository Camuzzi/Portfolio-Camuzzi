import "./Contact.css";
import emailjs from 'emailjs-com';

import wpLogo from "../../assets/whatsapp.svg";
import logoLocation from "../../assets/contact/location.svg";
import logoPhone from "../../assets/contact/phone.svg";
import logoMail from "../../assets/contact/mail.svg";
import { useState } from "react";


const Contact = () => {

    const [formData,setFormData] = useState({
        user_name: "",
        user_email: "",
        user_subject: "",
        message: ""
    })

    emailjs.init("QUgbuHx52Wl1EF9Ee");

    function sendEmail(e) {
        e.preventDefault();

        emailjs.send("service_8njxbg9","contact_form",formData)
        .then((result) => {
            console.log(result.text);
            alert("Email sent successfully, I will conctact you soon!");
            location.reload();
        }, (error) => {
            console.log(error.text);
            alert("Opss, some error ocurred, try again.");
        })
    }

    return(
        <div className="contact-container">
            <h1>Contact</h1>
            <div className="contact-left">

                <div className="contact-info">
                    <div className="contacts">
                        <img src={logoMail} alt="Mail"/>
                        <h4>Contact me via email:</h4>
                        <h5>camuzziagustin@gmail.com</h5>
                    </div>
                    <div className="contacts">
                        <img src={logoPhone} alt="Phone"/>
                        <h4>Contact me by my phone:</h4>
                        <h5>+54 (266) 4953687</h5>
                    </div>
                </div>

                <div className="contact-info">
                    <div className="contacts">
                        <img src={logoLocation} alt="Location"/>
                        <h4>Current location:</h4>
                        <h5>San Luis, Argentina</h5>
                    </div>
                    <div className="contacts">
                        <h4> Or send me a message in Whatsapp 👇."</h4>
                        <a href="https://wa.me/5492664953687?text=Hello Agustin!" target="_blank">
                            <img src={wpLogo} alt="Whatsapp Logo" title="Send me a message!" />
                        </a> 
                    </div>
                </div>

            </div>
            <div className="contact-right">
                <form onSubmit={sendEmail}>
                    <div className="name-email-fields">
                    <div className="form-field">
                        <label htmlFor="user_name">Name</label>
                        <input 
                            placeholder="Agustin Camuzzi"
                            type="text"
                            name="user_name"
                            id="user_name"
                            value={formData.user_name}
                            onChange={(e) => setFormData({...formData,user_name:e.target.value})}
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="user_email">Email</label>
                        <input 
                            placeholder="example@gmail.com"
                            type="text"
                            name="user_email"
                            id="user_email"
                            value={formData.user_email}
                            onChange={(e) => setFormData({...formData,user_email:e.target.value})}
                        />                        
                    </div>
                    </div>
                    <div className="form-field">
                        <label htmlFor="user_subject">Subject</label>
                        <input 
                            placeholder="Subject"
                            type="text"
                            name="user_subject"
                            id="user_subject"
                            value={formData.user_subject}
                            onChange={(e) => setFormData({...formData,user_subject:e.target.value})}
                        />                        
                    </div>

                    <div className="form-field">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            placeholder="Message..."
                            type="text"
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({...formData,message:e.target.value})}
                        />                        
                    </div>

                    <button type="sumbit">
                        Send
                    </button>

                </form>
            </div>
        </div>
    );
}

export default Contact;