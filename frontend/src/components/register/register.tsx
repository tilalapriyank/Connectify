import React, { useState } from "react";
import { Form, Input, Button, Typography, Card, DatePicker, Row, Col, message } from "antd";
import { UserOutlined, MailOutlined, LockOutlined, IdcardOutlined, PhoneOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { useDispatch } from "react-redux";
import ENDPOINT from "../../api/config";
import { AppDispatch } from "../../store/store";
import { registerRequest } from "../../store/actions/authActions";

const { Title, Text } = Typography;

const Register: React.FC = () => {
    const [form] = Form.useForm();
    const [usernameAvailable, setUsernameAvailable] = useState<null | boolean>(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch<AppDispatch>();

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const handleSubmit = async (values: any) => {
        setLoading(true);
        try {
            const updatedPayload = {
                ...values,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            };
            // dispatch(registerRequest(updatedPayload));
            await dispatch(registerRequest(updatedPayload));
            message.success("Registration successful! Redirecting to login...");
            setTimeout(() => navigate("/login"), 2000);
        } catch (error) {
            message.error("Registration failed!");
        } finally {
            setLoading(false);
        }
    };

    const checkUsername = async () => {
        const username = form.getFieldValue("userName");
        if (!username) return;

        setLoading(true);
        try {
            const response = await axios.post(`${ENDPOINT.CHECKUSERNAME}`, { userName: username });
            setUsernameAvailable(response.data.available);
        } catch (error) {
            console.error("Error checking username:", error);
            setUsernameAvailable(null);
        }
        setLoading(false);
    };

    return (
        <Card
            style={{
                width: isMobile ? "100%" : isTablet ? "60%" : "480px",
                padding: "30px",
                margin: "150px auto",
                borderRadius: "12px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                background: "#fff",
            }}
        >
            <Title level={2} style={{ textAlign: "center", marginBottom: 20 }}>
                Create Account
            </Title>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item name="firstName" label="First Name" rules={[{ required: true, message: "Enter your first name" }]}>
                            <Input prefix={<IdcardOutlined />} placeholder="John" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="lastName" label="Last Name" rules={[{ required: true, message: "Enter your last name" }]}>
                            <Input prefix={<IdcardOutlined />} placeholder="Doe" />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item name="userName" label="Username" rules={[{ required: true, message: "Enter a username" }]}>
                    <Input prefix={<UserOutlined />} placeholder="johndoe123" onBlur={checkUsername} />
                    {usernameAvailable !== null && (
                        <Text type={usernameAvailable ? "success" : "danger"}>
                            {usernameAvailable ? "Username is available" : "Username is taken"}
                        </Text>
                    )}
                </Form.Item>

                <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: "Enter a valid email" }]}>
                    <Input prefix={<MailOutlined />} placeholder="example@mail.com" />
                </Form.Item>

                <Form.Item name="password" label="Password" rules={[{ required: true, min: 6, message: "Password must be at least 6 characters" }]}>
                    <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" />
                </Form.Item>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item name="birthdate" label="Birthdate" rules={[{ required: true, message: "Select your birthdate" }]}>
                            <DatePicker style={{ width: "100%" }} format="YYYY-MM-DD" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="mobileNumber"
                            label="Mobile Number"
                            rules={[{ required: true, pattern: /^[0-9]{10}$/, message: "Enter a valid 10-digit number" }]}
                        >
                            <Input prefix={<PhoneOutlined />} placeholder="9876543210" />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <Button type="primary" htmlType="submit" block size="large" loading={loading}>
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default Register;
