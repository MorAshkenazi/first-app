import { FunctionComponent } from "react";
import useFetch from "../hooks/useFetch";
import Post from "../interfaces/Post";

interface PostsProps {}

const Posts: FunctionComponent<PostsProps> = () => {
  let [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  return (
    <>
      {posts.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post: Post) => (
              <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>There are no posts</p>
      )}
    </>
  );
};

export default Posts;
