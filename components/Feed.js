import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      {/* SECTION */}
      <section className="col-span-2">
        {/* STORIES */}
        <Stories />
        {/* STORIES ENDS */}

        {/* POSTS */}
        <Posts />
        {/* POSTS ENDS */}
      </section>

      {/* SECTION */}
      {/* MINI PROFILE */}
      {/* SUGGESTIONS */}
    </main>
  );
}

export default Feed;
