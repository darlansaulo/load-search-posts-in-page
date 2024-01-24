export const PostCard = ({ title, photos, body }) => {
  return (
    <div className="post">
      <img src={photos} alt={title} className="photo-content"></img>
      <div className="post-content">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
};
