import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Navbar = props => (
  <NavbarWrapper props={props}>
    <NavbarLinks role="navigation" aria-label="Main">
      <StyledLink tabindex="1" location={props.location} path="/" to="/">
        Portfolio
      </StyledLink>
      {/* <StyledLink location={props.location.pathname} path={blogPath} to="/blog">
        Blog
      </StyledLink> */}
      <StyledLink location={props.location} path="/photos/" to="/photos/" tabindex="0">
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
  font-family: Montserrat, sanserif;
  opacity: ${props => (props.location === props.path ? "38%" : "100%")};
  border-bottom: none;
  transition: border-bottom: 2s;

  &:hover {
    text-decoration: underline;
  }
`

export default Navbar
