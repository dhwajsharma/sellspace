import "./Team.css"
import { Button } from '@mui/material';

const Team = () => {
    return (
        <div className="team">
            <div className="team__container">
                <div className="team__image">
                    <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1629055400490/PJR4grXxv.jpeg?w=400&h=400&fit=crop&crop=faces&auto=compress" alt="" />
                </div>
                <div className="team__name">
                    <h2>Dhwaj Sharma</h2>
                </div>
                <div className="team__title">
                    <h2>Front-End Developer</h2>
                </div>
                <div className="team__links">

                </div>
            </div>
            <div className="team__container">
                <div className="team__image">
                    <img src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className="team__name">
                    <h2>Tanishq Maheshwari</h2>
                </div>
                <div className="team__title">
                    <h2>UI/UX Designer</h2>
                </div>
                <div className="team__links">

                </div>
            </div>
        </div>
    )
}

export default Team
