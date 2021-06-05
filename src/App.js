import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Layout, ConfigProvider } from "antd";
import { BrowserRouter as Router, Switch, } from "react-router-dom";
import MainHeader from './module/common/Header/Header'
import Routes from './Routes'
import SideMenu from './module/common/sideMenu/SideMenu'
import "./stylesheets/sass/pages/app.scss"

let lang = localStorage.getItem('lang') === null ? 'en' : localStorage.getItem('lang');
const mq = window.matchMedia("(max-width: 768px)");
const { Content, Sider } = Layout;

export default class App extends Component {
  state = {
    collapsed: mq.matches,
    isAuth: false,
    nameList: [],
    isPhone: mq.matches,
    isModalVisible: false,
    usingPanel: true
  };

  componentDidMount() {
    let data = [];
    mq.addListener(this.handleMediaQueryChange);
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: i,
        address: `London, Park Lane no. ${i}`,
      });
    }

    this.setState({ nameList: data })
  }

  handleMediaQueryChange = e => {
    if (e.matches) {
      this.setState({ collapsed: true });
    } else {
      this.setState({ collapsed: false });
    }
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  changeCategoryType = (e) => this.setState({ usingPanel: e.target.value });

  render() {
    const { collapsed } = this.state;
    return (
      <div className="App">
        <ConfigProvider direction={lang === 'en' ? 'ltr' : 'rtl'}>
          <Router>
            <Layout className="app-wrapper" style={{ minHeight: "100vh" }}>
              <Sider trigger={null} collapsedWidth="80" width="240" collapsible collapsed={collapsed} onCollapse={this.onCollapse} className="sider-list-wrapper">
                <SideMenu />
              </Sider>
              <Layout className="site-layout">
                <MainHeader toggle={this.onCollapse} collapsed={collapsed} />
                <Content className="app-main-wrapper">
                  <Switch>
                    <Routes />
                  </Switch>
                </Content>
              </Layout>
            </Layout> :
          </Router>
        </ConfigProvider>
      </div>
    );
  }
}
