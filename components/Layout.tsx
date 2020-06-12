import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  background-color: #2168db;
  min-height: 40px;
  margin-bottom: 20px;
`;

const Nav = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px 0;
`;
const NavItem = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #ffffff;
  margin-right: 15px;
  font-weight: bold;
`;

const Layout = (props) => {
  return (
    <div>
      <NavWrapper>
        <Nav>
          <Link href="/">
            <NavItem>All posts</NavItem>
          </Link>
          <Link href="/posts/new">
            <NavItem>Create new post</NavItem>
          </Link>
        </Nav>
      </NavWrapper>
      {props.children}
    </div>
  );
};

export default Layout;
