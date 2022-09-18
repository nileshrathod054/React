import React, { useState, useEffect } from "react";
import axios from "axios";
function DataFetching() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <br />
      <input placeholder="Data" type="text" />
      <ol>
        {posts.map((post) => (
          <table>
            <li key={post.id}>{post.title}</li>
          </table>
        ))}
      </ol>
    </div>
  );
}
export default DataFetching;
