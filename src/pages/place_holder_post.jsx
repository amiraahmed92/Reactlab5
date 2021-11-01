import { useEffect, useState } from "react";
import { useCreatePosts } from "../hooks";

export const Placeholderpost = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = useCreatePosts();
console.log(getPosts)
  useEffect(() => {
    getPosts().then(setPosts);
  }, []);
  
  if (!posts.length) return <h1>Loading...</h1>;
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};