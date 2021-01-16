import React, { Component } from "react";
import ".././styles/Nav.css";
import { Link } from "react-router-dom";
import { Drawer, Menu, Button } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";

export default class Nav extends Component {
  state = {
    current: "mail",
    navbar: false,
    color: "white",
    visible: false,
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  changeColor = (color) => {
    this.setState({ color });
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  changeBackground = () => {
    if (window.scrollY >= 20) {
      this.setState({ navbar: true });
    } else {
      this.setState({ navbar: false });
    }
  };
  render() {
    const { current } = this.state;
    window.addEventListener("scroll", this.changeBackground);
    return (
      <>
        <div></div>
        <nav className={this.state.navbar ? "navbar active" : "navbar"}>
          <h1 class="logo">
            <a href="/" class="logo navlogo">
              <div class="waviy">
                <span>m</span>
                <span>h</span>
                <span>e</span>
                <span>a</span>
                <span>l</span>
              </div>
            </a>
          </h1>
          <Menu
            className="ul__mheal"
            onClick={this.handleClick}
            mode="horizontal"
          >
            <Menu.Item key="Home">
              <Link to="/" onClick={() => this.changeColor("black")}>
                Home{" "}
              </Link>
            </Menu.Item>

            <SubMenu key="SubMenu__1" title="Products">
              <Menu.ItemGroup title="In the Clinic">
                <Menu.Item key="Chest X-Ray">
                  <Link to="/Chest__X-ray">Chest X-Ray</Link>
                </Menu.Item>
                <Menu.Item key="Head CT Scans">
                  <Link to="/HeadCT">Head CT Scans</Link>
                </Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="In the Community ">
                <Menu.Item key="Public Health Solution">
                  <Link to="/PHS">Public Health Solution</Link>
                </Menu.Item>
                <Menu.Item key="TuberCulosis">
                  <Link to="/TB">TuberCulosis</Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="SubMenu__2" title="Research">
              <Menu.Item key="Highlights">
                <Link to="/highlights"> Highlights</Link>
              </Menu.Item>
              <Menu.Item key="Publications">
                <Link to="publications">Publications</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="About">
              <Link to="/About">About Us</Link>
            </Menu.Item>

            <Menu.Item key="Responsibility">
              <Link to="/Responsibility">Responsibilty</Link>
            </Menu.Item>
          </Menu>
          <div onClick={this.showDrawer}>
            
            <img
              className="nav__menu__img"
              alt="img"
              src="https://icon-library.com/images/mobile-menu-icon-png/mobile-menu-icon-png-2.jpg"
            />
          </div>
          <Drawer
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <Menu
              onClick={this.handleClick}
              style={{ width: "100%" }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
            >
              <Menu.Item key="Home">
                <Link to="/" onClick={() => this.changeColor("black")}>
                  Home{" "}
                </Link>
              </Menu.Item>

              <SubMenu key="SubMenu__1" title="Products">
                <Menu.ItemGroup title="In the Clinic">
                  <Menu.Item key="Chest X-Ray">
                    <Link to="/Chest__X-ray">Chest X-Ray</Link>
                  </Menu.Item>
                  <Menu.Item key="Head CT Scans">
                    <Link to="/HeadCT">Head CT Scans</Link>
                  </Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="In the Community ">
                  <Menu.Item key="Public Health Solution">
                    <Link to="/PHS">Public Health Solution</Link>
                  </Menu.Item>
                  <Menu.Item key="TuberCulosis">
                    <Link to="/TB">TuberCulosis</Link>
                  </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu key="SubMenu__2" title="Research">
                <Menu.Item key="Highlights">
                  <Link to="/highlights"> Highlights</Link>
                </Menu.Item>
                <Menu.Item key="Publications">
                  <Link to="publications">Publications</Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="About">
                <Link to="/About">About Us</Link>
              </Menu.Item>

              <Menu.Item key="Responsibility">
                <Link to="/Responsibility">Responsibilty</Link>
              </Menu.Item>
            </Menu>
          </Drawer>
        </nav>
      </>
    );
  }
}
