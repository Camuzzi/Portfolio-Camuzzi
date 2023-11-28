import "./Home.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {

    const [t, i18n] = useTranslation("global");

    return(
        <div className="container-home">
            <h1>{t("home.title1")}</h1>
            <h1>{t("home.title2")}</h1>
            <h1>{t("home.title3")}</h1>
            <h2>{t("home.title4")}</h2>
            <br />
            <Link to="/contact">
                <button >
                    {t("home.button1")}
                </button>
            </Link>
            <br />
            <br />
            <Link to="/projects">
                <button >
                    {t("home.button2")}
                </button>
            </Link>
            
        </div>
    );
}

export default Home;