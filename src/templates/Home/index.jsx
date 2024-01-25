import { Component } from "react";

import "./styles.css";

import { loadPosts } from "../../utils/loadPosts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 4,
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postPerPage } = this.state;

    const postAndPhotos = await loadPosts();
    this.setState({
      posts: postAndPhotos.slice(page, postPerPage),
      allPosts: postAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postPerPage, allPosts, posts } = this.state;

    const nextPage = page + postPerPage;

    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    const { posts, page, allPosts, postPerPage  } = this.state;
    const checkLimitPost = page + postPerPage >= allPosts.length;

    return (
      <section className="container">
        <Posts posts={posts}></Posts>
        <div className="button-container">
          <Button
            disabled={checkLimitPost}
            text={"Load more posts"}
            onClick={this.loadMorePosts}
          ></Button>
        </div>
      </section>
    );
  }
}

export default Home;
