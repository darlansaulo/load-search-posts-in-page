import { Component } from "react";

import "./App.css";

import { loadPosts } from "./utils/loadPosts";
import { Posts } from "./components/Posts";

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postAndPhotos = await loadPosts();
    this.setState({ posts: postAndPhotos });
  }

  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts}></Posts>
      </section>
    );
  }
}

export default App;
