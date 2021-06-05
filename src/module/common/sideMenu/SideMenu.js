import React, { Component } from "react";
import { Menu, Input } from "antd";
import { BarChartOutlined } from "@ant-design/icons";
import RenoSystem from '../../../stylesheets/images/renoSystem.JPG'

const mq = window.matchMedia("(max-width: 768px)");
const { Search } = Input;
const { SubMenu } = Menu;

export default class SideMenu extends Component {
    state = {
        collapsed: true,
        nameList: [],
        isModalVisible: false,
        isPhone: mq.matches,
    };

    render() {
        const { collapsed } = this.state;
        return (
            <>
                <div className="logo" style={{ padding: 20, textAlign: 'center' }}>
                    <img src={RenoSystem} alt="logo" />
                </div>
                <Menu inlineCollapsed={collapsed} theme="dark" defaultSelectedKeys={["user-1"]} mode="inline">
                    <Menu.Item icon={<BarChartOutlined />} key="ex-1">  Dashboard</Menu.Item>
                    <Menu.Item className="menu__no--hover" key="cnc-1">  <Search className="search-input-holder" size="large" placeholder="Quick access" /></Menu.Item>
                    <Menu.Item className="menu__no--hover" key="set-1"> <span className="span__setting">Settings</span></Menu.Item>
                    <SubMenu key="ATM" title="ATM Setting">
                        <Menu.Item key="ex-1"> ATM 1  </Menu.Item>
                        <Menu.Item key="ex-2"> ATM 2  </Menu.Item>
                        <Menu.Item key="ex-3"> ATM 3  </Menu.Item>
                    </SubMenu>

                    <SubMenu key="Bus" title="Business setup">
                        <Menu.Item key="Bus-1"> Business 1  </Menu.Item>
                        <Menu.Item key="Bus-2"> Business 2  </Menu.Item>
                        <Menu.Item key="Bus-3"> Business 3  </Menu.Item>
                    </SubMenu>

                    <SubMenu key="user" defaultSelectedKeys={["user-1"]} title="User Management">
                        <Menu.Item key="user-1"> User  </Menu.Item>
                        <Menu.Item key="user-2"> Profiles  </Menu.Item>
                        <Menu.Item key="user-3"> Groups  </Menu.Item>
                    </SubMenu>

                    <Menu.Item key="lic-1"> License Management </Menu.Item>

                </Menu>
            </>
        );
    }
}
