import React, { useState } from "react";
import { Form, Input, Button, Typography, Card, message } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Login: React.FC = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      login(values);
      message.success("Login successful!");
      setTimeout(() => navigate("/home"), 1000);
    } catch (error: any) {
      message.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        padding: "20px",
      }}
    >
      <Card
        style={{
          width: 380,
          padding: "30px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
          Login
        </Title>

        <Form
          layout="vertical"
          onFinish={onFinish}
          style={{ width: "100%" }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              style={{
                height: "40px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <Text type="secondary">Don't have an account? </Text>
          <Link to="/register" style={{ fontWeight: "bold", color: "#1890ff" }}>
            Register here
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
