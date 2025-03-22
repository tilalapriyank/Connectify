import React from "react";
import { Form, Input, Button, Typography, Card, DatePicker } from "antd";
import { UserOutlined, MailOutlined, LockOutlined, IdcardOutlined, CalendarOutlined, PhoneOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

const { Title } = Typography;

const Register: React.FC = () => {
    const [form] = Form.useForm();

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const handleSubmit = (values: {
        firstName: string;
        lastName: string;
        userName: string;
        email: string;
        password: string;
        birthdate: string;
        mobileNumber: string;
    }) => {
        console.log("User Registered:", values);
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                padding: isMobile ? "10px" : "20px",
            }}
        >
            <Card
                style={{
                    width: isMobile ? "90%" : isTablet ? "60%" : "400px",
                    padding: isMobile ? "15px" : "20px",
                    borderRadius: 8,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
            >
                <Title level={2} style={{ textAlign: "center", marginBottom: 20, fontSize: isMobile ? "22px" : "26px" }}>
                    Register
                </Title>
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <Form.Item name="firstName" label="First Name" rules={[{ required: true, message: "Please enter your first name" }]}>
                        <Input prefix={<IdcardOutlined />} placeholder="Enter your first name" />
                    </Form.Item>

                    <Form.Item name="lastName" label="Last Name" rules={[{ required: true, message: "Please enter your last name" }]}>
                        <Input prefix={<IdcardOutlined />} placeholder="Enter your last name" />
                    </Form.Item>

                    <Form.Item name="userName" label="Username" rules={[{ required: true, message: "Please enter a username" }]}>
                        <Input prefix={<UserOutlined />} placeholder="Choose a username" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            { required: true, message: "Please enter your email" },
                            { type: "email", message: "Please enter a valid email" },
                        ]}
                    >
                        <Input prefix={<MailOutlined />} placeholder="Enter your email" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            { required: true, message: "Please enter your password" },
                            { min: 6, message: "Password must be at least 6 characters" },
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" />
                    </Form.Item>

                    <Form.Item name="birthdate" label="Birthdate" rules={[{ required: true, message: "Please select your birthdate" }]}>
                        <DatePicker style={{ width: "100%" }} format="YYYY-MM-DD" placeholder="Select your birthdate" />
                    </Form.Item>

                    <Form.Item
                        name="mobileNumber"
                        label="Mobile Number"
                        rules={[
                            { required: true, message: "Please enter your mobile number" },
                            { pattern: /^[0-9]{10}$/, message: "Mobile number must be 10 digits" },
                        ]}
                    >
                        <Input prefix={<PhoneOutlined />} placeholder="Enter your mobile number" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default Register;
