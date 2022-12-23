import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const sendComment = async (e) => {
    e.preventDefault();
    const commentSending = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentSending,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db]
  );

  return (
    <div className="bg-white my-7 border rounded-sm ">
      {/* HEADER */}
      <div className="flex items-center p-5 ">
        <img
          src={userImg}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* HEADER ENDS */}

      {/* IMG */}
      <img
        className="object-cover w-full"
        src={img}
        alt="user uploaded image"
      />
      {/* IMG ENDS */}

      {/* BUTTONS */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}
      {/* BUTTONS END */}

      {/* CAPTION */}
      <div>
        <p className="p-5 truncate">
          <span className="font-bold mr-1">{username}</span>
          {caption}
        </p>
      </div>
      {/* CAPTION ENDS */}

      {/* COMMENTS */}
      {/* COMMENTS END */}

      {/* INPUT BOX */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            className="border-none flex-1 focus:ring-0 outline-none"
            placeholder="Add a comment.."
            value={comment}
          />
          <button
            disabled={!comment.trim()}
            type="submit"
            className="font-semibold text-blue-400"
            onClick={sendComment}
          >
            Post
          </button>
        </form>
      )}
      {/* INPUT BOX ENDS */}
    </div>
  );
}

export default Post;
