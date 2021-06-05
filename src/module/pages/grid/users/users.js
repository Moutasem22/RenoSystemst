import React, { Component } from 'react'
import { Table, Button, Menu, Dropdown, Input, Select, DatePicker } from "antd";
import { MoreOutlined, EditFilled, LockFilled, } from "@ant-design/icons";
import UserModal from '../addEditUser/addEditUser'
import userList from '../../../../MOCK_DATA.json'

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Search } = Input

const menuAction = (
    <Menu className="menu-action-holder" >
        <Menu.Item key="1" style={{ fontSize: 15, }}>
            Add Tags
      </Menu.Item>
        <Menu.Item key="2" style={{ fontSize: 15, }}>
            Remove Tags
      </Menu.Item>
    </Menu>
);

const listMenu = (
    <Menu className="menu-action-holder" >
        <Menu.Item key={1} style={{ fontSize: 15, }}>Active</Menu.Item>
        <Menu.Item key={2} style={{ fontSize: 15, }}>Inactive</Menu.Item>
    </Menu>
);

class Items extends Component {
    state = {
        mainList: [],
        compoenentList: [],
        isModalVisible: false,
        showDrawer: false,
        selectedRowKeys: [],
        gridList: [],
    };

    componentDidMount() {
        let data = [];
        userList.map((item, i) => {
            data.push({
                key: i,
                id: item.id,
                name: item.name,
                username: item.username,
                email: item.email,
                Group: item.gruop,
                status: item.status ? 'active' : 'Inactive',
                date: item.date
            });
        })

        this.setState({ mainList: data, gridList: data })
    }

    closeModal = (e) => this.setState({ isModalVisible: false });

    onSelectChange = selectedRowKeys => {
        this.setState({ selectedRowKeys });
    };

    handleSearch = (type, value, changeGroup) => {
        let searchList = [];
        let gridList = changeGroup ? this.state.mainList : this.state.gridList;
        let mainList = this.state.mainList;



        gridList.map(item => {
            if (value) {
                if ((item[type]).toLowerCase().includes(value.toLowerCase())) searchList.push(item);
            }
        })

        if (searchList.length > 0) this.setState({ gridList: searchList });
        else if (value == "") this.setState({ gridList: mainList });
    }

    handleSelectChange = (values) => {
        console.log(values)
    }

    render() {
        const { selectedRowKeys } = this.state
        const hasSelected = selectedRowKeys.length > 0;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };

        return (
            <div className="app-page-wrapper">
                <div className="app-page-header">
                    <h2>Users Management</h2>
                    <Button size="large" style={{ margin: '0 8px' }} className="primary__btn" type="primary" onClick={() => this.setState({ isModalVisible: true })}>
                        Add New</Button>
                </div>
                <div className="site-layout-background section-indent-wrapper" style={{ minHeight: 360 }}>
                    {this.state.isModalVisible && <UserModal closeModal={this.closeModal} />}

                    <div className="table-tabs-wrapper">
                        <div className="filter__tables--input">
                            <Search placeholder="Name"  style={{ width: '300px' }}
                                onChange={e => {
                                    let keyword = e.target.value;
                                    this.handleSearch('name', keyword)
                                }}
                            />
                            <Search placeholder="Email"  style={{ width: '150px' }}
                                onChange={e => {
                                    let keyword = e.target.value;
                                    this.handleSearch('email', keyword)
                                }}
                            />
                            <Select style={{ width: '100%' }} placeholder="Group"  style={{ width: '150px' }}
                                onChange={value => this.handleSearch('Group', value, true)} allowClear onClear={() => { this.setState({ gridList: this.state.mainList }) }} optionLabelProp="label">
                                {this.state.mainList.map((item, i) => {
                                    return (
                                        <Option value={item.Group} key={i}>
                                            <div className="demo-option-label-item">{item.Group}</div>
                                        </Option>
                                    )
                                })}
                            </Select>
                            <RangePicker  style={{ width: '150px' }} />
                            <p className="all__filter">All Filters</p>
                        </div>
                        {selectedRowKeys.length > 0 &&
                            <div className="select-item-wrapper">
                                <span style={{ fontSize: 20, }}>
                                    {hasSelected ? `${selectedRowKeys.length} Selected` : ''}
                                </span>
                                <div className="select-item-action">
                                    <Button><EditFilled /></Button>
                                    <Button><LockFilled /></Button>
                                    <Button size="large">Assign to Profile</Button>
                                    <Button size="large">Assign to Group  </Button>
                                    <Dropdown trigger={['click']} overlay={menuAction}>
                                        <Button ><MoreOutlined /></Button>
                                    </Dropdown>
                                </div>
                            </div>
                        }
                    </div>

                    <Table
                        className="table-roles-wrapper app-table-wrapper"
                        columns={[
                            {
                                title: `Name`,
                                dataIndex: 'name',
                            },
                            {
                                title: `User Name`,
                                dataIndex: 'username',
                            },
                            {
                                title: `Email Address`,
                                dataIndex: 'email',
                            },
                            {
                                title: `Group`,
                                dataIndex: 'Group',
                            },
                            {
                                title: `Status`,
                                dataIndex: 'status',
                                render: (_, record) => {
                                    return (
                                        <div>
                                            <Dropdown trigger={['click']} arrow overlay={listMenu}>
                                                <span>{record.status}</span>
                                            </Dropdown>
                                        </div>
                                    )
                                }
                            },
                            {
                                title: `Ceated on`,
                                dataIndex: 'date',
                            },
                        ]} rowSelection={rowSelection}
                        dataSource={this.state.gridList}
                    />
                </div>
            </div >
        )
    }
}
export default Items;
