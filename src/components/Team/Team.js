import "./Team.css";
import { Button } from "@mui/material";
import Dhwaj from "../../assets/Dhwaj.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Team = () => {
  return (
    <div className="team">
      <div className="team__container">
        <div className="team__image">
          <img src={Dhwaj} alt="" />
        </div>
        <div className="team__name">
          <h2>Dhwaj Sharma</h2>
          <div className="team__title">
            <div>Front-End Developer</div>
          </div>
          <div className="team__links">
            <a
              href="https:github.com/dhwajsharma"
              rel="noreferrer"
              target="_blank"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/dhwajsharma/"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
