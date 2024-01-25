import { PostCard } from "../PostCard";
import "./styles.css"

export const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          photos={post.photos}
          id={post.id}
        ></PostCard>
      ))}
    </div>
  );
};
