import "./Contact.css";
import emailjs from 'emailjs-com';

import wpLogo from "../../assets/whatsapp.svg";
import logoLocation from "../../assets/contact/location.svg";
import logoPhone from "../../assets/contact/phone.svg";
import logoMail from "../../assets/contact/mail.svg";
import { useState } from "react";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { useTranslation } from "react-i18next";


const Contact = () => {

    const [t, i18n] = useTranslation("global");

    const MySwal = withReactContent(Swal);

    const [formData,setFormData] = useState({
        user_name: "",
        user_email: "",
        user_subject: "",
        message: ""
    })

    emailjs.init("QUgbuHx52Wl1EF9Ee");

    function sendEmail(e) {
        e.preventDefault();

        if (formData.user_email === "" || formData.user_name === "" || formData.user_subject === "" || formData.message === "" ) {
            MySwal.fire({
                title: <strong>WARNING</strong>,
                html: <i>You have to complete all fields</i>,
                icon: 'warning',     
                background : "#1d1d1d",
                customClass:{
                  container: 'custom-alert-container',
                }
              });
        } else {
            emailjs.send("service_8njxbg9","contact_form",formData)
            .then((result) => {
                console.log(result.text);
                MySwal.fire({
                    title: <strong>SUCCESS</strong>,
                    html: <i>Email sent successfully, I will conctact you soon!</i>,
                    icon: 'success',     
                    background : "#1d1d1d",
                    customClass:{
                      container: 'custom-alert-container',
                    }
                  }).then(() => {
                      location.reload();
                  });
            }, (error) => {
                console.log(error.text);
                alert("Opss, some error ocurred, try again.");
            })
        }

    }

    return(
        <div className="contact-container">
            <h1>{t("contact.title")}</h1>
            <div className="contact-left">

                <div className="contact-info">
                    <div className="contacts">
                        <img src={logoMail} alt="Mail"/>
                        <h4>{t("contact.contact1")}</h4>
                        <h5>camuzziagustin@gmail.com</h5>
                    </div>
                    <div className="contacts">
                        <img src={logoPhone} alt="Phone"/>
                        <h4>{t("contact.contact3")}</h4>
                        <h5>+54 (266) 4953687</h5>
                    </div>
                </div>

                <div className="contact-info">
                    <div className="contacts">
                        <img src={logoLocation} alt="Location"/>
                        <h4>{t("contact.contact2")}</h4>
                        <h5>San Luis, Argentina</h5>
                    </div>
                    <div className="contacts">
                        <h4>{t("contact.contact4")}</h4>
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
                        <label htmlFor="user_name">{t("contact.form1")}</label>
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
                            placeholder={t("contact.placeholder1")}
                            type="text"
                            name="user_email"
                            id="user_email"
                            value={formData.user_email}
                            onChange={(e) => setFormData({...formData,user_email:e.target.value})}
                        />                        
                    </div>
                    </div>
                    <div className="form-field">
                        <label htmlFor="user_subject">{t("contact.form2")}</label>
                        <input 
                            placeholder={t("contact.form2")}
                            type="text"
                            name="user_subject"
                            id="user_subject"
                            value={formData.user_subject}
                            onChange={(e) => setFormData({...formData,user_subject:e.target.value})}
                        />                        
                    </div>

                    <div className="form-field">
                        <label htmlFor="message">{t("contact.form3")}</label>
                        <textarea 
                            placeholder={t("contact.placeholder2")}
                            type="text"
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({...formData,message:e.target.value})}
                        />                        
                    </div>

                    <button type="sumbit">
                        {t("contact.sumbit")}
                    </button>

                </form>
            </div>
        </div>
    );
}

export default Contact;