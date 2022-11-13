import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";

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
      <section className="hidden xl:inline-grid md:col-span-1">
        <div className="fixed top-20">
          {/* MINI PROFILE */}
          <MiniProfile />
          {/* SUGGESTIONS */}
          <Suggestions />
        </div>
      </section>
    </main>
  );
}

export default Feed;
