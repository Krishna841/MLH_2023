import "./Sidebar.scss";
import logout from "../../assets/images/logout.svg";
import software from "../../assets/images/software.svg";
import hardware from "../../assets/images/hardware.svg";
import dashboard from "../../assets/images/dashboard.svg";
import { Link } from "react-router-dom";
import Home from "../../Components/Home/Home";
import Software from "../../Components/Software/Software";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_dashboard">
        <img src={dashboard} alt="dashboard icon" height={30} width={30} />
      </div>
      <div className="sidebar_redirects">
        <div className="sidebar_redirects_software">
          <Link to="/Software" element={<Software />}>
            <img src={software} alt="software icon" height={30} width={30} />
          </Link>
        </div>
        <div className="sidebar_redirects_hardware">
          <img src={hardware} alt="hardware icon" height={30} width={30} />
        </div>
      </div>
      <div className="sidebar_wrapper">
        <div className="sidebar_wrapper_logout">
          <Link to="/" element={<Home />}>
            {(localStorage.setItem["token"] = null)}
            <img src={logout} alt="logout icon" height={30} width={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
