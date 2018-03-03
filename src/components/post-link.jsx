import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: block;
  outline: none;
  padding: 1em 0 1em 0;
  transition: transform .2s ease-in-out;

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    outline: none;
    transform: scale(1.01, 1.01);
  }
`;

const PostLink = ({ post }) => (
  <div>
    <StyledLink to={post.frontmatter.path}>
      <div>
        <h2>{post.frontmatter.title}</h2>
        <p>{post.excerpt}</p>
        {post.frontmatter.date}
      </div>
    </StyledLink>
  </div>
);

export default PostLink;
