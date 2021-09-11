import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import Post from "../Post/Post";
import "./Posts.css"

const Posts = () => {
    const [realtimePosts] = useCollection(
        db.collection("posts").orderBy("timestamp", "desc")
    )

    return (
        <div className="posts">
            {
                realtimePosts ?
                    realtimePosts?.docs.map((post) => (
                        <Post
                            key={post.id}
                            name={post.data().name}
                            message={post.data().message}
                            email={post.data().email}
                            timestamp={post.data().timestamp}
                            postImage={post.data().postImage}
                        />
                    )) :
                    posts.map((post) => (
                        <Post
                            key={post.id}
                            name={post.name}
                            message={post.message}
                            email={post.email}
                            timestamp={post.timestamp}
                            postImage={post.postImage}
                        />
                    ))
            }
        </div>
    )
}

export default Posts
