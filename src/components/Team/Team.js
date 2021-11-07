import "./Team.css";
import { Button } from "@mui/material";
import Dhwaj from "../../assets/Dhwaj.png";
import Tanishq from "../../assets/Tanishq.jpeg";

const Team = () => {
  return (
    <div className="team">
      <div className="team__container">
        <div className="team__image">
          <img src={Dhwaj} alt="" />
        </div>
        <div className="team__name">
          <h2>Dhwaj Sharma</h2>
        </div>
        <div className="team__title">
          <div>Front-End Developer</div>
        </div>
        <div className="team__links"></div>
      </div>
      <div className="team__container">
        <div className="team__image">
          <img src={Tanishq} alt="" />
        </div>
        <div className="team__name">
          <h2>Tanishq Maheshwari</h2>
        </div>
        <div className="team__title">
          <div>UI/UX Designer</div>
        </div>
        <div className="team__links"></div>
      </div>
    </div>
  );
};

export default Team;
