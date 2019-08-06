import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map(tag => (
            <Link
              style={{display: 'none'}}
              key={tag}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <button type="button">{tag}</button>
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
