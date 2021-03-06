import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { useHistory } from "react-router";
import "./Post.css";
import { selectPost } from "../../features/postSlice";

const Post = ({
  name,
  title,
  price,
  description,
  number,
  email,
  timestamp,
  postImage,
}) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const openPost = () => {
    dispatch(
      selectPost({
        name,
        title,
        price,
        description,
        number,
        email,
        timestamp,
        postImage,
      })
    );
    history.push("/openpost");
  };

  return (
    <div className="post" onClick={openPost}>
      <div className="post__text">
        <div className="post__nameTimestamp">
          <p className="post__nameTimestamp__name">{name}</p>
          {timestamp ? (
            <p className="post__nameTimestamp__timestamp">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          ) : (
            <p className="post__nameTimestamp__timestamp">Loading</p>
          )}
        </div>
        {postImage && (
          <div className="post__image">
            <img src={postImage} alt="" />
          </div>
        )}
        <p className="post__text__message">{title}</p>
        <p className="post__text__message">
          {"₹ "}
          {price}
        </p>
      </div>
    </div>
  );
};

export default Post;
