import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./Post.css"

const Post = ({ name, message, email, timestamp, postImage }) => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
        <div className="post">
            <div className="post__tile">
                <div className="post__text">
                    <div className="post__nameTimestamp">
                        <p className="post__nameTimestamp__name">{name}</p>
                        {timestamp ? (
                            <p className="post__nameTimestamp__timestamp">{new Date(timestamp?.toDate()).toLocaleString()}</p>

                        ) : <p className="post__nameTimestamp__timestamp">Loading</p>}
                    </div>
                    <p className="post__text__message">{message}</p>
                </div>
                {postImage && (
                    <div className="post__image">
                        <img src={postImage} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Post
