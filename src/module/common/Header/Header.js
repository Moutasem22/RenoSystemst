import React, { Component } from "react";
import { Layout, Menu, Dropdown, Badge, } from "antd";
import { UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import notificationsIcon from '../../../stylesheets/images/notifications-icon.svg'
const { Header } = Layout;

const menu = (
    <Menu>
        <Menu.Item key="1" icon={<UserOutlined />}>Profile </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>Setting</Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>LogOut</Menu.Item>
    </Menu>
);

export default class MainHeader extends Component {


    render() {
        return (

            <Header className="site-layout-background main-header" style={{ padding: 0 }}>
                <div className="header-wrapper">
                    <div>
                        <span className='trigger' onClick={this.props.toggle}>
                            {this.props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        </span>
                        <span className="header__text"><span>Good Morning! </span> Sat Jun 12,2021 9:39 PM</span>
                    </div>
                    <div className="header__comp--right">
                        <div style={{ display: 'flex' }}>
                            <QuestionCircleOutlined style={{ fontSize: '21px' }} />
                        </div>
                        <div className="header__comp--noti">
                            <Badge placement='start' size="small" count={5} style={{ backgroundColor: '#f68f39' }} >
                                <img src={notificationsIcon} alt='notifications' />
                            </Badge>
                        </div>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <span className="ant-dropdown-link header__profile" onClick={e => e.preventDefault()}>
                                Moutasem Ahmed
                                <span>
                                    MA
                                </span>
                            </span>
                        </Dropdown>
                    </div>
                </div>
            </Header>
        );
    }
}
