import React from "react";
import Post from "./Post";

const tempData = [
  {
    id: "123",
    username: "arsh",
    userImg: "",
    img: "",
    caption: "Test Data",
  },
];

function Posts() {
  return (
    <div>
      {/* POSTS */}
      {tempData.map((post) => {
        <Post
          key={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption }
        />;
      })}
      {/* POSTS ENDS */}
    </div>
  );
}

export default Posts;
