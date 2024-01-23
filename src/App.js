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
    const postsResp = fetch("https://jsonplaceholder.typicode.com/posts");
    const [posts] = await Promise.all([postsResp]);
    const postsJson = await posts.json();

    this.setState({ posts: postsJson });
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
