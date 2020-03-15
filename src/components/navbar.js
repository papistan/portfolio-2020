import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const rootPath = `${__PATH_PREFIX__}/`
const blogPath = `${__PATH_PREFIX__}/blog/`
const photoPath = `${__PATH_PREFIX__}/photos/`

const Navbar = props => (
  <NavbarWrapper props={props}>
    <NavbarLinks>
      <StyledLink location={props.location.pathname} path={rootPath} to="/">
        Portfolio
      </StyledLink>
      {/* <StyledLink location={props.location.pathname} path={blogPath} to="/blog">
        Blog
      </StyledLink> */}
      <StyledLink
        location={props.location.pathname}
        path={photoPath}
        to="/photos"
      >
        Travel Photography
      </StyledLink>
    </NavbarLinks>
  </NavbarWrapper>
)

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 2px;
`

const NavbarLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 800px;
  height: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  min-width: 80px;
  text-align: center;
  padding: 30px 5px 10px 5px;
  margin: 0 10px;
  text-decoration: none;
  color: inherit;
  opacity: ${props => (props.location === props.path ? "38%" : "100%")};
  border-bottom: none;
  transition: border-bottom: 2s;

  &:hover {
    text-decoration: underline;
  }
`

export default Navbar
