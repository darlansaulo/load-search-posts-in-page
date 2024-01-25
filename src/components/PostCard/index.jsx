import "./styles.css"

export const PostCard = ({ title, photos, body, id }) => {
  return (
    <div className="post">
      <img src={photos} alt={title} className="photo-content"></img>
      <div className="post-content">
        <h2> {id} - {title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};
