import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectpostIsOpen } from "../../features/postSlice";
import "./OpenPost.css"

const OpenPost = () => {
    const history = useHistory();
    const selectedPost = useSelector(selectpostIsOpen);

    return (
        <div className="openpost">
            <h2>{selectedPost?.message}</h2>
        </div>
    )
}

export default OpenPost
