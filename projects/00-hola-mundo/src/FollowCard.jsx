import { userState, useState } from "react";

export function FollowCard({ userName, children }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const text = isFollowing ? "Siguiendo" : "seguir";
  const buttonClassName = isFollowing
    ? "boton-megusta siguiendo"
    : "boton-megusta";
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-header">
        <img
          className="tw-avatar"
          src={`https://unavatar.io/youtube/${userName}`}
          alt="avatar x"
        />
        <div className="datos">
          <strong>{children}</strong>
          <span className="tw-user-name">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
