import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const TwitterFollowCard = (props) => {
  const { name, username, initialIsFollowing, userImage } = props;
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  console.log(props);
  return (
    <article
      id={`userId-${username}`}
      className="flex items-center justify-between text-white text-sm max-w-80"
    >
      <header className="flex items-center">
        <img
          className="m-2 rounded-full h-12 w-12 object-coverç"
          alt="avatar"
          src={userImage}
        ></img>
        <div className="flex flex-col ">
          <strong>{name}</strong>
          <span className="opacity-60">@{username}</span>
        </div>
      </header>
      <aside>
        <button
          onClick={() => setIsFollowing(!isFollowing)}
          className={classNames(
            "mx-4 bg-white text-black rounded-lg px-2 cursor-pointer border border-white hover:text-white",
            !isFollowing ? "hover:bg-blue-300" : "bg-transparent hover:bg-red-600 "
          )}
        >
          {!isFollowing ? "Seguir" : "Siguiendo"}
        </button>
      </aside>
    </article>
  );
};

TwitterFollowCard.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  initialIsFollowing: PropTypes.boolean,
  userImage: PropTypes.string
};
export default TwitterFollowCard;
