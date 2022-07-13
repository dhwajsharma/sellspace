import { useEffect } from "react";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = () => {
  const [realtimePosts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
            timestamp: null,
          }))
        )
      );
  }, []);

  return (
    <div className="posts_parent">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="posts">
        {realtimePosts
          ? realtimePosts?.docs
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val
                    ?.data()
                    ?.title?.toLowerCase()
                    ?.includes(searchTerm?.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((post) => (
                <Post
                  key={post.id}
                  name={post.data().name}
                  title={post.data().title}
                  price={post.data().price}
                  description={post.data().description}
                  number={post.data().number}
                  email={post.data().email}
                  timestamp={post.data().timestamp}
                  postImage={post.data().postImage}
                />
              ))
          : posts.map((post) => (
              <Post
                key={post.id}
                name={post.name}
                title={post.data().title}
                price={post.data().price}
                description={post.data().description}
                number={post.data().number}
                email={post.email}
                timestamp={post.timestamp}
                postImage={post.postImage}
              />
            ))}
      </div>
    </div>
  );
};

export default Posts;
