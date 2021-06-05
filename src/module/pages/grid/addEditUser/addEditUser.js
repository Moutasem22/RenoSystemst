import React, { Component } from 'react'
import { Input, Button, Col, Row, Form, Select } from "antd";
import Modal from "antd/lib/modal/Modal";
const { Option } = Select;

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

class AddEditUser extends Component {
    formRef = React.createRef();
    state = {
        nameList: [],
        compoenentList: [],
        isModalVisible: this.props.isModalVisible,
        componentModal: false,
        usingPanel: true,
        costTypeValue: '0',
        lowLevelList: [],
    };

    componentDidMount() {
        let data = [];

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

    componentDidUpdate(prevProps) {
        if (prevProps.isModalVisible !== this.props.isModalVisible) this.setState({ isModalVisible: this.props.isModalVisible })
    }

    handleChange = (value) => this.setState({ costTypeValue: value });

    resetFields = () => {
        this.formRef.current.resetFields()
    }

    render() {
        return (
            <Modal className="add__record--modal sm-size"
                footer={null} title="Add New User"
                visible={true} onOk={() => this.props.closeModal()}
                onCancel={() => this.props.closeModal()}>
                <Form ref={this.formRef} className="add__record--form" name="nest-messages" onFinish={(values) => console.log(values)} validateMessages={validateMessages}>
                    <Row gutter={16}>
                        <Col sm={24} xs={{ span: 24 }}>
                            <Form.Item name={['user', 'fullName']} label={"Full Name"} rules={[{ required: true, whitespace: true }]}>
                                <Input placeholder={"Full Name"} />
                            </Form.Item>
                        </Col>

                        <Col sm={24} xs={{ span: 24 }}>
                            <Form.Item name={['user', 'username']} label="User Name" rules={[{ required: true, whitespace: true }]}>
                                <Input placeholder="User Name" />
                            </Form.Item>
                        </Col>

                        <Col sm={24} xs={{ span: 24 }}>
                            <Form.Item name={['user', 'email']} label="Email Address" rules={[{ required: true, whitespace: true }]}>
                                <Input placeholder="Email Address" />
                            </Form.Item>
                        </Col>

                        <Col sm={24} xs={{ span: 24 }}>
                            <Form.Item name={['user', 'group']} label="Groups" rules={[{ required: true, whitespace: true }]}>
                                <Select style={{ width: '100%' }} placeholder="Group"
                                    onChange={this.handleChange} optionLabelProp="label">
                                    <Option value="1" label="Fixed Cost Per Kg">
                                        <div className="demo-option-label-item">Group 1</div>
                                    </Option>
                                    <Option value="2" label="fixed">
                                        <div className="demo-option-label-item">Group 2</div>
                                    </Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col sm={24} xs={{ span: 24 }}>
                            <Form.Item name={['user', 'assign Profile']} label="Assign Profile" rules={[{ required: true, whitespace: true }]}>
                                <Select style={{ width: '100%' }} placeholder="Assign Profile"
                                    onChange={this.handleChange} optionLabelProp="label">
                                    <Option value="1" label="Fixed Cost Per Kg">
                                        <div className="demo-option-label-item">Group 1</div>
                                    </Option>
                                    <Option value="2" label="fixed">
                                        <div className="demo-option-label-item">Group 2</div>
                                    </Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <div className="add__form--footer">
                        <Button className="reset_btn" onClick={(e) => { this.resetFields() }} >Reset Fields</Button>
                        <div>
                            <Button onClick={(e) => {
                                this.formRef.current.validateFields().then((values) => {
                                    // console.log('this.formRef.values', values)
                                })
                            }} type="primary" className="primary__btn" htmlType="submit">Save </Button>
                            <Button onClick={(e) => { this.props.closeModal() }} key="2" className="secondary_fill">
                                Cancel
                        </Button>
                        </div>
                    </div>
                </Form>
            </Modal>
        )
    }
}
export default AddEditUser;
