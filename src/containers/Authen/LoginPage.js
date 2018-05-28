import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.css';

const FormItem = Form.Item;

class LoginPage extends React.Component {
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const userNameInput = this.props.form.getFieldDecorator('username', {
      rules: [
        { required: true, message: 'This field is required' },
      ],
    })(
      <Input
        prefix={<Icon type="user" />}
        placeholder="Username"
      />,
    );
    const passwordInput = this.props.form.getFieldDecorator('password', {
      rules: [
        { required: true, message: 'This field is required' },
      ],
    })(
      <Input
        prefix={<Icon type="lock" />}
        placeholder="Password"
      />,
    );
    const rememberMeInput = this.props.form.getFieldDecorator('remember', {
      valuePropName: 'checked',
      initialValue: true,
    })(
      <Checkbox>Remember me</Checkbox>
    );
    const submitButton = (
      <Button
        type="primary" htmlType="submit" className="login-form-button"
        // loading={this.loadingLogin}
      >
        Login
      </Button>
    );
    return (
      <div className="ant-row-flex ant-row-flex-space-around ant-row-flex-middle login-row">
        <div className="ant-col-8">
          <Form className="login-form" onSubmit={this.onFormSubmit}>
            <h2 className="logo">
              <span>logo</span>
            </h2>
            <FormItem>{userNameInput}</FormItem>
            <FormItem>{passwordInput}</FormItem>
            <FormItem>
              {rememberMeInput}
              <a className="login-form-forgot" href="">Forgot password</a>
              {submitButton}
              </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

const WrappedLoginPageWithAnt = Form.create()(LoginPage);

export default WrappedLoginPageWithAnt;
