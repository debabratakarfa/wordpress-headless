import { Component, Fragment } from 'react';
import Link from 'next/link';
import _S from 'superagent';
import { API } from '../config';
import Navigation from '../component/Navigation';

export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps() {
    const res = await _S.get(API.wpUrl.concat(API.endPoint.post)); 
    return {
      posts: res.body
    }   
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <h1>Posts Page!</h1>
        <ul>
          {
            this.props.posts.map(post => {
              return (
                <li key={post.id}>
                  <Link href={`/posts/${post.slug}`}>
                    <a href={`/posts/${post.slug}`}>
                      {post.title.rendered}
                    </a>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}
