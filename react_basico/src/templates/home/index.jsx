import './style.css';
import { Component } from 'react';

import { loadPosts } from '../../utils/loadPosts'
import { Posts } from '../../components/Posts/index';
import { Button } from '../../components/Button';
class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 2,
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const {
      page,
      postPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
        <div class="button-container">
          <Button
            text="Load More Posts"
            onClick={this.loadMorePosts}
            disable={true}
          />
        </div>
      </section >
    );
  };
}


export default Home;
