import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const CenterColumn = styled.div`
  @font-face {
    font-family: 'Crimson Text';
    font-style: normal;
    font-weight: 400;
    src: local('Crimson Text Regular'), local('CrimsonText-Regular'), url(https://fonts.gstatic.com/s/crimsontext/v8/wlp2gwHKFkZgtmSR3NB0oRJfbwhT.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  font-family: 'Crimson Text',serif;
  font-size: 1.2em;
  max-width: 700px;
  margin: auto;
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <CenterColumn>
      <Header />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </CenterColumn>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;