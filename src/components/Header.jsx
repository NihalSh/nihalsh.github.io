import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const NavBarStyle = styled.nav`
  font-family: Georgia,Cambria,"Times New Roman",Times,serif;

  > ul {
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;

    > li {
      font-family: 'Oswald', sans-serif;
      font-size: 1.2em;
      line-height: 40px;
      height: 40px;
      border-bottom: 1px solid #888;
      
      > a {
        text-decoration: none;
        color: #f45f45;
        display: block;
        outline: none;
        transition: .3s color;
      }

      > a:active {
        outline: none;
      }

      > a:focus {
        outline: none;
      }

      > a:hover {
        color: #000;
        outline: none;
      }
    }

    @media screen and (min-width: 600px) {
      > li {
        width: 120px;
        border-bottom: none;
        height: 50px;
        line-height: 50px;
        font-size: 1.4em;
        display: inline-block;
        margin-right: -4px;
      }
    }
  }
`;

const Title = styled.header`
  @font-face {
    font-family: 'Cabin Sketch';
    font-style: normal;
    font-weight: 700;
    src: local('Cabin Sketch Bold'), local('CabinSketch-Bold'), url(https://fonts.gstatic.com/s/cabinsketch/v11/QGY2z_kZZAGCONcK2A4bGOj0I_1Y5tjz.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @keyframes Glow {
    30%, 70% {
      text-shadow: 0 0 0.1em yellow;
    }
    40%, 60% {
      text-shadow: 0 0 0.3em yellow;
    }
    50% {
      text-shadow: 0 0 0.5em yellow;
    }
  }

  animation: Glow 5s linear infinite;
  color: #102088;
  font-family: 'Cabin Sketch', cursive;
  font-size: 2em;
  text-align: center;
  transition: text-shadow 0.2s linear;
`;
const Header = () => (
  <div>
    <Title>
      <h1>Nihal Shriwastawa</h1>
    </Title>
    <NavBarStyle>
      <ul>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <a href="https://github.com/nihalsh/" target="_blank">GitHub</a>
        </li>
      </ul>
    </NavBarStyle>
  </div>
);

export default Header;