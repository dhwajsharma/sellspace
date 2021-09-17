import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectpostIsOpen } from "../../features/postSlice";
import "./OpenPost.css"

const OpenPost = () => {
    const history = useHistory();
    const selectedPost = useSelector(selectpostIsOpen);

    return (
        <div className="openpost">
            <div className="openpost__left">
                <img src={selectedPost?.postImage} alt="" />
            </div>

            <div className="openpost__right">
                <h2>{selectedPost?.name}</h2>
                <div className="openpost__subHeading">
                    <p>{selectedPost?.email}</p>
                </div>
                <div className="openpost__message">
                    <p>{selectedPost?.message}</p>
                </div>
            </div>
        </div>
    )
}

export default OpenPost
