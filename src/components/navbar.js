import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const blogPath = `${__PATH_PREFIX__}/blog/`
const photoPath = `${__PATH_PREFIX__}/photos/`

const Navbar = props => (
  <NavbarWrapper props={props}>
    <NavbarLinks>
      <StyledBlogLink location={props.location.pathname} to="/blog">
        Blog
      </StyledBlogLink>
      <StyledPhotosLink location={props.location.pathname} to="/photos">
        Travel Photography
      </StyledPhotosLink>
    </NavbarLinks>
  </NavbarWrapper>
)

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
`

const NavbarLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  height: 100%;
`

const StyledBlogLink = styled(props => <Link {...props} />)`
  color: ${props => (props.location === blogPath ? "light gray" : "inhereted")};

  &:hover {
    background: pink;
  }
`

const StyledPhotosLink = styled(props => <Link {...props} />)`
  color: ${props =>
    props.location === photoPath ? "light gray" : "inhereted"};

  &:hover {
    background: pink;
  }
`

export default Navbar
