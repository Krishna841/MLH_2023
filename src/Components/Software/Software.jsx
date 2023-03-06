import Sidebar from "../../Containers/Sidebar/Sidebar";
import Header from "../../Containers/Header/Header";
import "./Software.scss";
import profile from "../../assets/images/profile.svg";
import Item from "../../Containers/Item/Item";
import data from "../../Containers/info";
import useState from "react";
import axios from "axios";
import { useEffect } from "react";

const Software = () => {
  // const [item, setItem] = useState("");

  // const getItems = () => {
  //
  //     .get("https://8a2b-49-36-224-5.ngrok.io/softwares/")
  //     .then((response) => {
  //       console.log(response);
  //       setItem(response.data);
  //     });
  // };
  // useEffect(() => getItems(), []);
  return (
    <div className="software">
      <div className="software_side">
        {" "}
        <Sidebar />
      </div>
      <div className="software_main">
        <div className="software_main_title">
          <div className="software_main_title_text">Software</div>
          <div className="software_main_title_profile">
            <img src={profile} alt="profile" />
          </div>
        </div>
        <div className="software_main_box">
          <div className="software_main_box_header">
            <Header />
          </div>

          <div className="software_main_box_heading">
            <div className="software_main_box_heading_name">NAME</div>
            <div className="software_main_box_heading_company">COMPANY</div>
            <div className="software_main_box_heading_website">WEBSITE</div>
            <div className="software_main_box_heading_date">DATE</div>
            <div className="software_main_box_heading_status">STATUS</div>
          </div>

          <div className="software_main_box_list">
            {data.map((item) => (
              <Item
                product_name={item.product_name}
                company_name={item.company_name}
                website_url={item.website_url}
                expiration_date={item.expiration_date}
                status={item.status}
              />
            ))}

            {/* <Item data={data[0]} />
            <Item data={data[1]} />
            <Item data={data[2]} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;