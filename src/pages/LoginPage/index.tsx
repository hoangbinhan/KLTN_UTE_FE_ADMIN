// libs
import React, { useState } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Axios from "axios";
import Cookie from 'js-cookie'
// others
import "./style.scss";
import { baseUrl } from '@/configs/enviroments'
import { useRouter } from "@/hooks";

const Login = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const login = (values: any) => {
        setIsLoading(true);
        Axios({
            method: "post",
            url: `${baseUrl}/api/staff/login`,
            data: values,
        }).then(async (req) => {
            if (req) {
                setIsLoading(false);
                const { token, refresh_token } = req.data
                Cookie.set('token', token)
                Cookie.set('refresh_token', refresh_token)
                router.push('/')
            } else {
                message.error("Access token is null!");
                setIsLoading(false);
            }
        })
            .catch((err) => {
                message.error("Login fail");
                setIsLoading(false);
            });
    };

    return (
        <div className="login-wrapper">
            <div className="login-background-img">
                <div className="login-form">
                    <h1 style={{color:'#3a9cd7'}}>ACCOUNT LOGIN</h1>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={login}
                        onFinishFailed={() => { }}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                { required: true, message: "Please input your username!" },
                            ]}
                            hasFeedback
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Username"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                { required: true, message: "Please input your password!" },
                            ]}
                            hasFeedback
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item name="remember" valuePropName="">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                className="login-form-button"
                                type="primary"
                                htmlType="submit"
                                block
                                loading={isLoading}
                            >
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;
