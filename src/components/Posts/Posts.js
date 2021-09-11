import { useEffect } from "react";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import Post from "../Post/Post";
import "./Posts.css"

const Posts = () => {
    const [realtimePosts] = useCollection(
        db.collection("posts").orderBy("timestamp", "desc")
    )
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                    timestamp: null
                }))
            )
        );
    }, []);


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
