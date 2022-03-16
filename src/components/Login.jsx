import React, { useState } from 'react'
import { Row, Col, Input, Typography, Button, Form, Alert } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { setCurrentUser } from '../app/actions/userActions';


const { Title } = Typography;
const { Password } = Input;

const Login = () => {
    const [notice, setNotice] = useState({ message: '', showNotice: false })

    const users = useSelector((state) => state?.usersReducer?.users);
    const dispatchCurrentUser = useDispatch();
    let navigate = useNavigate();

    const onFinish = ({ username, password }) => {
        const user = users.find(user => user.username === username && user.password === password)
        console.log('Success:', username, password);
        if (user !== undefined) {
            dispatchCurrentUser(setCurrentUser(username, user.baseCurrency));
            navigate('/user');

        } else {
            setNotice({
                message: `Invalid Username+Password combination`,
                showNotice: true,
            })
        }

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <Row justify='center'>
            <Col xs={24} md={14} lg={10} xl={8} xxl={6}>
                <Form
                    name="login"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 18,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        wrapperCol={{
                            offset: 6,
                            span: 6,
                        }}
                    >
                        <Title level={1}>Login</Title>
                    </Form.Item>
                    {notice.showNotice && <Form.Item
                        wrapperCol={{
                            offset: 0,
                            span: 24,
                        }}
                    >
                        <Row justify='center'>
                            <Alert
                                message={notice.message}
                                type={'error'}
                            />
                        </Row>
                    </Form.Item>}
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input size='large' />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Password size='large' />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 6,
                            span: 5,
                        }}
                    >
                        <Button type="primary" htmlType="submit" size='large'>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default Login