import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="sidebar-header">
                <h3>Agustin Camuzzi</h3>
            </div>
            <ul className="sidebar-icons">
                <li>
                    <Link to="/home">
                         Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                         About
                    </Link>
                </li>
                <li>
                    <Link to="/skills">
                         Skills
                    </Link>
                </li>
                <li>
                    <Link to="/projects">
                         Projects
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                         Contact me
                    </Link>
                </li>
            </ul>
            <div className="sidebar-icons">
                <a href="" target="">
                    Linked In
                </a>
                <a href="" target="">
                    GitHub
                </a>
            </div>
        </div>
    );
}

export default Sidebar;