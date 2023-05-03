import React from "react";
import { Form, Input, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

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
