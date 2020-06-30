import React, { Component } from "react"
import {
  MenuWrapper,
  MenuContainer,
  MenuGroup,
  MenuItem,
  MenuLink,
  LogoLink,
} from "./styled"
import Logo from "../Logo"

class Header extends Component {
  state = { scroll: 0 };

  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }

  handleScroll() {
    if (document.documentElement.scrollTop > 0) {
      this.setState({
        scroll: document.documentElement.scrollTop,
      })
    } else {
      this.setState({
        scroll: 0,
      })
    }
  }

  render() {
    return (
      <MenuWrapper scroll={this.state.scroll}>
        <MenuContainer>
          <LogoLink to="/">
            <Logo />
          </LogoLink>
          <MenuGroup>
            <MenuItem>
              <MenuLink to="/" activeClassName="active">
                Início
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/a-versagro" activeClassName="active">
                A Versagro
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/solucoes" activeClassName="active">
                Soluções
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/cases" activeClassName="active">
                Cases
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/blog" activeClassName="active">
                Blog
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/contato" activeClassName="active">
                Contato
              </MenuLink>
            </MenuItem>
          </MenuGroup>
        </MenuContainer>
      </MenuWrapper>
    )
  }
}

export default Header