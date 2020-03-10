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
      <StyledLink location={props.location.pathname} path={blogPath} to="/blog">
        Blog
      </StyledLink>
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
`

const NavbarLinks = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 100%;
`

const StyledLink = styled(props => <Link {...props} />)`
  min-width: 100px;
  text-align: center;
  padding: 30px 10px 10px 10px;
  text-decoration: none;
  color: ${props => (props.location === props.path ? "grey" : "inherit")};
  border-bottom: none;
  transition: border-bottom: 2s;

  &:hover {
    border-bottom: 2px solid ${props =>
      props.lightMode ? "black" : "#f9fff8"};
  }
`

export default Navbar
