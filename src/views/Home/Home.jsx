import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h1><b>Hello!<br /> I'm Agustin Camuzzi<br /> Full Stack Developer</b> </h1>
            <h2> Welcome to my portfolio</h2>
            <br />
            <Link to="/contact">
                <button >
                    Contact Me
                </button>
            </Link>
            <br />
            <br />
            <Link to="/projects">
                <button >
                    Projects
                </button>
            </Link>
        </div>
    );
}

export default Home;