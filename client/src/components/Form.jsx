import React from "react";
import { Form, Input, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { api } from "../json/api";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const CampaignForm = () => {
  const [funds, setFunds] = useState([]);
  useEffect(() => {
    setFunds(api);
  },[]);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="formMainContainer">
      <div className="formContainer">
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Your Name"
            name="name"
            className="custom_text_class_generate"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Campaign Title"
            name="title"
            className="custom_text_class_generate"
            rules={[
              {
                required: true,
                message: "Please input your campaign title!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Story"
            name="story"
            className="custom_text_class_generate"
            rules={[
              {
                required: true,
                message: "Please input your story!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="Goal"
            name="goal"
            className="custom_text_class_generate"
            rules={[
              {
                required: true,
                message: "Please input your campaign goal!",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            label="Campaign Image"
            name="image"
            className="custom_text_class_generate"
            rules={[
              {
                required: true,
                message: "Please upload your campaign image!",
              },
            ]}
          >
            <Input
              type="file"
              accept=".jpg,.jpeg,.png"
              addonBefore={<UploadOutlined />}
            />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CampaignForm;
