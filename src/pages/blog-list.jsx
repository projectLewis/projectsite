import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import style from "./bloglist.module.css";

class BlogList extends React.Component {
  render() {
    const {data: {allMarkdownRemark: {edges:postEdges}}} = this.props;
    
    return (
      <Layout>
        <div className={style.bloglistContainer}>
          <Helmet title={config.siteTitle} />
          <SEO />
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export default BlogList;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;