import React from "react";
import Image from "./Image";
import PostInfo from "./PostInfo";
import PostInteraction from "./PostInteraction";

const Post = () => {
  return (
    <div className="p-4 border-y border-borderGray">
      {/* post type */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
          />
        </svg>
        <span className="">Rustam Zagitov reposted</span>
      </div>
      {/* post content */}
      <div className="flex gap-4">
        {/* avatar */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            path="general/avatar.png"
            alt="avatar"
            w={100}
            h={100}
            tr={true}
          ></Image>
        </div>
        {/* content */}
        <div className="flex-1 flex flex-col gap-2">
          {/* top */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-md font-bold">
                Rustam Zagitov
              </h1>
              <span className="text-textGray">
                @rustamzagitov02
              </span>
              <span className="text-textGray">
                1 day ago
              </span>
            </div>
            <PostInfo />
          </div>
          {/* text & media */}
          <p className="">
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Iste iure doloribus enim!
            Inventore iure ea maxime excepturi sit
            dignissimos, laudantium ullam at? Neque pariatur
            placeat quo, odio fugit labore veritatis.
          </p>
          <Image
            path="general/post.jpeg"
            alt="post"
            w={600}
            h={600}
          />
          <PostInteraction />
        </div>
      </div>
    </div>
  );
};

export default Post;
