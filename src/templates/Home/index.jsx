import { Component } from "react";

import "./styles.css";

import { loadPosts } from "../../utils/loadPosts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 4,
    searchValue: "",
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

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, allPosts, postPerPage, searchValue } = this.state;
    const checkLimitPost = page + postPerPage >= allPosts.length;

    const filteredPosts = !!searchValue
      ? allPosts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    return (
      <section className="container">
        <Input
          handleChange={this.handleChange}
          searchValue={searchValue}
        >  
        </Input>
        <Posts posts={filteredPosts}></Posts>
        <div className="button-container">
          {!searchValue && (
            <Button
              disabled={checkLimitPost}
              text={"Load more posts"}
              onClick={this.loadMorePosts}
            ></Button>
          )}
        </div>
      </section>
    );
  }
}

export default Home;
