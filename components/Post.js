import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Moment from "react-moment";
import { useSession } from "next-auth/react";
import {
  doc,
  orderBy,
  collection,
  onSnapshot,
  query,
  setDoc,
  deleteDoc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export default function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  const likePost = async (e) => {
    e.preventDefault();
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  };

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
    [db, id]
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
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
            {hasLiked === true ? (
              <HeartIconFilled onClick={likePost} className="btn" />
            ) : (
              ""
            )}
            {hasLiked === false ? (
              <HeartIcon onClick={likePost} className="btn" />
            ) : (
              ""
            )}
            <ChatIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}
      {/* BUTTONS END */}
      {/* CAPTION */}
      {session && (
        <div>
          <p className="p-5 truncate">
            {likes.length > 0 && (
              <p className="font-bold mb-1">{likes.length} likes</p>
            )}
            <span className="font-bold mr-1">{username}</span>
            {caption}
          </p>
        </div>
      )}
      {/* CAPTION ENDS */}
      {/* COMMENTS */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img
                src={comment.data().userImage}
                className="h-8 rounded-full"
                alt=""
              />
              <p className="text-sm flex-1">
                <span>{comment.data().comment}</span>
              </p>
              <Moment fromNow className="pr-5 text-xs">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {/* COMMENTS END */}
      {/* INPUT BOX */}
      {session && (
        <form className="flex items-center p-4">
          {/* <EmojiHappyIcon className="h-7" /> */}
          <input
            type="text"
            className="border-none flex-1 focus:ring-0 outline-none"
            placeholder="Add a comment.."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
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
