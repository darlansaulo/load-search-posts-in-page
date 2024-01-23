import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResp = fetch("https://jsonplaceholder.typicode.com/posts"); // API pública para teste / Public API for test
    const photosResp = fetch("https://jsonplaceholder.typicode.com/photos");

    const [posts, photos] = await Promise.all([postsResp, photosResp]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postAndPhotos = postsJson.map((post, index) => {
      return { ...post, photos: photosJson[index].url }
    });

    this.setState({ posts: postAndPhotos });
  };

  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
            <div className="post">
              <img src={post.photos} alt={post.title} className="photo-content"></img>
              <div key={post.id} className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
